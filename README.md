# Safe Internet: Cyber Guardian

A 2D educational cybersecurity adventure for learners aged 13–16. Built with HTML5, CSS, JavaScript and Phaser 3.

## Run locally
1. Extract the ZIP folder.
2. Open `index.html` in a modern browser. If your browser restricts local scripts, run a local server from this folder (for example, VS Code Live Server).
3. Press **Start Adventure**.

The Phaser library is included locally in `lib/phaser.min.js`; no build step or package installation is required. Google Fonts are an optional online enhancement; the game uses fallback fonts if unavailable.

## Controls
- A / D or Left / Right arrows: move.
- W / Up arrow / Space: jump.
- E: interact with a nearby glowing terminal.
- Choose an answer with the mouse.

## Project structure
- `index.html`: page structure and interface.
- `style.css`: visual design and responsive layout.
- `js/main.js`: Phaser setup, browser UI, modal questions and synthesized sound effects.
- `js/questions.js`: five educational missions.
- `js/scenes/`: Boot, Menu, Game and Win scenes.
- `lib/phaser.min.js`: local Phaser engine.

## Audio
Short success and error tones are synthesized through the Web Audio API after player interaction. The Sound button toggles the effects.
