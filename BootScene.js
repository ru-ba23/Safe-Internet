class BootScene extends Phaser.Scene {
  constructor(){ super('BootScene'); }
  preload(){
    // Build a tiny four-frame sprite sheet in code so the character has real animation frames.
    const sheet=document.createElement('canvas'); sheet.width=192; sheet.height=64;
    const c=sheet.getContext('2d');
    for(let f=0;f<4;f++){
      const x=f*48, bob=(f%2)*2;
      c.fillStyle='#20243e'; c.beginPath(); c.arc(x+24,15+bob,12,Math.PI,Math.PI*2); c.fill();
      c.fillStyle='#d99a77'; c.fillRect(x+14,13+bob,20,20);
      c.fillStyle='#172033'; c.fillRect(x+19,22+bob,3,3); c.fillRect(x+27,22+bob,3,3);
      c.fillStyle='#5de4e6'; c.fillRect(x+10,33+bob,28,19);
      c.fillStyle='#b8f36b'; c.fillRect(x+21,37+bob,6,6);
      c.fillStyle='#303b63';
      const legShift=f===1?4:f===3?-4:0;
      c.fillRect(x+14,50+bob,8,12+legShift); c.fillRect(x+26,50+bob,8,12-legShift);
    }
    this.load.spritesheet('hero',sheet.toDataURL(),{frameWidth:48,frameHeight:64});
  }
  create(){
    const g=this.make.graphics({x:0,y:0,add:false});
    g.fillStyle(0x14263b,1);g.fillRoundedRect(0,0,54,54,12);g.lineStyle(3,0x5de4e6,1);g.strokeRoundedRect(2,2,50,50,10);g.fillStyle(0xb8f36b,1);g.fillCircle(27,27,7);g.generateTexture('terminal',54,54);g.clear();
    g.fillStyle(0x253c54,1);g.fillRect(0,0,64,32);g.fillStyle(0x36546d,1);g.fillRect(0,0,64,5);g.generateTexture('platform',64,32);g.destroy();
    this.scene.start('MenuScene');
  }
}
