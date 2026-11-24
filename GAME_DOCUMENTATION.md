# SAFE INTERNET: CYBER GUARDIAN
## Game Documentation

### Cover Page
**Course:** Game Design and Programming  
**Project:** Safe Internet: Cyber Guardian  
**Team members:** Add all team members' full names and university ID numbers before submission.  
**Instructor:** Add instructor's name.

### Game Title
Safe Internet: Cyber Guardian

### Game Description
Safe Internet: Cyber Guardian is a 2D educational adventure that introduces players to practical digital-safety habits. Players guide a young cyber guardian through a digital city, visit interactive terminals, and complete short scenario-based challenges about password safety, phishing, suspicious links, privacy, and unexpected attachments.

### Game Genre
Educational / Adventure / Puzzle game.

### Gameplay
The player controls a character in a side-view digital environment. The character can move, jump across platforms, and approach five glowing terminals. Pressing E opens a mission. Each mission presents a realistic online-safety situation and multiple choices. Correct choices earn 100 points and complete the terminal; incorrect choices provide feedback and allow another attempt. Completing all five missions secures the network and ends the game.

### Motivations for Playing
- Learn useful online-safety habits through short interactive scenarios.
- Explore a colorful digital environment and discover all five terminals.
- Earn points and receive immediate feedback.
- Complete the final challenge and become the Cyber Guardian.

### Target Audience
Teenagers aged 13–16. The language, scenarios, controls, and challenge length are designed for secondary-school learners developing independent digital habits.

### Learning Outcomes
By the end of the game, players should be able to recognize characteristics of stronger passwords, identify common phishing signals, avoid suspicious links and attachments, and protect personal information in online spaces.

### Game Requirements Implementation
| Required concept | Implementation in the game |
|---|---|
| Scenes | BootScene, MenuScene, GameScene, and WinScene separate loading, menu, gameplay, and completion. |
| Background Images | The digital-city background and skyline are drawn as layered scene artwork. |
| Object Manipulation | The player moves and jumps; terminals are approached and activated; completed terminals are removed from play. |
| Spritesheets | A four-frame character spritesheet is generated and animated with Phaser's animation manager. |
| Physics | Phaser Arcade Physics provides gravity, velocity, world bounds, static platforms, and player/platform collision. |
| Input | Keyboard movement and jump controls plus E interaction; mouse is used to select answers and operate interface buttons. |
| Cameras | The camera follows the player and is constrained to the level bounds. |
| Tile Sprites | Repeating platform/ground and parallax tile-sprite layers create the environment. |
| Audio Output | Web Audio API generates success and incorrect-answer tones; sound can be toggled. |

### Technology
HTML5, CSS3, JavaScript, Phaser 3, Canvas API, and Web Audio API.

### Notes Before Submission
Add the final team roster and instructor details to this document. Test the project using the same browser and hosting method that will be used for the class demonstration.
