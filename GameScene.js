class GameScene extends Phaser.Scene {
 constructor(){super('GameScene');this.score=0;this.completed=new Set();this.activeMission=-1;this.soundEnabled=true;}
 init(){this.score=0;this.completed=new Set();this.activeMission=-1;}
 create(){
  this.worldWidth=2700; this.physics.world.setBounds(0,0,this.worldWidth,520);
  this.cameras.main.setBounds(0,0,this.worldWidth,520);
  this.add.rectangle(0,0,this.worldWidth,520,0x0b1728).setOrigin(0);
  // Parallax tile-sprite layers: the foreground follows the camera at different speeds.
  this.stars=this.add.tileSprite(0,0,900,520,'platform').setOrigin(0).setScrollFactor(0).setAlpha(.08);
  for(let i=0;i<90;i++){let x=Phaser.Math.Between(0,this.worldWidth),y=Phaser.Math.Between(25,390);this.add.circle(x,y,Phaser.Math.Between(1,2),0x5de4e6,.45);}
  this.platforms=this.physics.add.staticGroup();
  const ground=this.add.tileSprite(this.worldWidth/2,495,this.worldWidth,50,'platform');ground.setTint(0x253e54);this.physics.add.existing(ground,true);this.platforms.add(ground);
  const ledges=[[270,400,220],[610,340,190],[940,420,230],[1270,350,210],[1600,410,220],[1930,340,210],[2290,410,240]];
  ledges.forEach(([x,y,w])=>{let p=this.add.tileSprite(x,y,w,26,'platform').setTint(0x36546d);this.physics.add.existing(p,true);this.platforms.add(p);});
  // Decorative neon skyline.
  for(let i=0;i<32;i++){let x=i*88+20,h=Phaser.Math.Between(70,180);this.add.rectangle(x,445-h/2,Phaser.Math.Between(35,65),h,0x14243a).setDepth(-1);}
  this.player=this.physics.add.sprite(90,390,'hero');this.player.setScale(1.12);this.player.setCollideWorldBounds(true);this.player.setBounce(0);this.player.body.setSize(25,56).setOffset(11,7);
  this.anims.create({key:'walk',frames:this.anims.generateFrameNumbers('hero',{start:0,end:3}),frameRate:9,repeat:-1});this.anims.create({key:'idle',frames:[{key:'hero',frame:0}],frameRate:1});
  this.physics.add.collider(this.player,this.platforms);
  this.terminals=this.physics.add.staticGroup();
  const xs=[360,790,1110,1510,2070];
  xs.forEach((x,i)=>{let t=this.terminals.create(x,450,'terminal');t.setData('mission',i);t.setDepth(2);this.add.text(x,405,`0${i+1}`,{fontFamily:'monospace',fontSize:'13px',color:'#b8f36b'}).setOrigin(.5);this.tweens.add({targets:t,y:442, duration:900, yoyo:true,repeat:-1,ease:'Sine.easeInOut'});});
  this.cursors=this.input.keyboard.createCursorKeys();this.keys=this.input.keyboard.addKeys('A,D,W,E,SPACE');
  this.cameras.main.startFollow(this.player,true,.08,.08);this.cameras.main.setDeadzone(250,120);
  this.nearby=null;this.interactKey= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  this.input.keyboard.on('keydown-E',()=>{if(this.nearby && !window.isMissionOpen)this.openMission(this.nearby.getData('mission'));});
  this.events.on('shutdown',()=>{this.input.keyboard.removeAllListeners();});
  this.refreshHUD();
 }
 update(){
  const left=this.cursors.left.isDown||this.keys.A.isDown, right=this.cursors.right.isDown||this.keys.D.isDown;
  const jump=Phaser.Input.Keyboard.JustDown(this.cursors.up)||Phaser.Input.Keyboard.JustDown(this.keys.W)||Phaser.Input.Keyboard.JustDown(this.keys.SPACE);
  if(left){this.player.setVelocityX(-220);this.player.setFlipX(true);this.player.anims.play('walk',true);}else if(right){this.player.setVelocityX(220);this.player.setFlipX(false);this.player.anims.play('walk',true);}else{this.player.setVelocityX(0);this.player.anims.play('idle',true);}
  if(jump&&this.player.body.blocked.down)this.player.setVelocityY(-440);
  this.nearby=null;let closest=999;
  this.terminals.children.iterate(t=>{if(!t.active||this.completed.has(t.getData('mission')))return;let d=Phaser.Math.Distance.Between(this.player.x,this.player.y,t.x,t.y);if(d<92&&d<closest){closest=d;this.nearby=t;}});
  const prompt=document.getElementById('mission-prompt');if(this.nearby&&!window.isMissionOpen)prompt.classList.remove('hidden');else prompt.classList.add('hidden');
  this.stars.tilePositionX=this.cameras.main.scrollX*.15;
 }
 openMission(index){if(this.completed.has(index))return;this.activeMission=index;window.openMissionModal(index);}
 completeMission(index){this.completed.add(index);this.score+=100;const t=this.terminals.getChildren().find(o=>o.getData('mission')===index);if(t){t.disableBody(true,true);}this.refreshHUD();if(this.completed.size===MISSIONS.length){this.time.delayedCall(700,()=>this.scene.start('WinScene',{score:this.score}));}}
 refreshHUD(){document.getElementById('score').textContent=String(this.score).padStart(3,'0');document.getElementById('mission-count').textContent=`${this.completed.size} / 5`;document.getElementById('mission-strip').innerHTML=MISSIONS.map((m,i)=>`<span class="mission-pill ${this.completed.has(i)?'done':''}">${this.completed.has(i)?'✓':'○'} ${m.title}</span>`).join('');}
}
