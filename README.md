# simple-jigsaw
  A Simple JigSaw Game.

## Project Structure

```
  |- app (JigSaw App)
    |- actions (All User Actions)
    |- components (All UI Components)
    |--- grid (All Game UI Components: Grid, Row and Cell)
    |- game (Game related logic)
    |--- utils (Contains GAME Constants like grid size, alphabets etc. and utility functions)
    |-- GameGridCreator.js (Game Creation Logic)
    |-- GameGridValidator.js (Game Validation Logic)
    |- sources (words.js - A Nasty ~2mb implementation of english dictionary. OPEN in VI/VIM ONLY!)
    |- stores (Game Store - All User Driven Logic)
    |- stylesheets (*.scss files)
    |--- lib (theme file, flexbox file and normalize.scss)
    |-- _jigsaw.scss (Core App SCSS File)
    |-- main.scss (All files bundled together)
    |- views (Root View index.html goes here)
    |- alt.js (Flux Architecture Library Instantiation)
    |- main.js (Initialize app)
    |- routes.js (Initialize all routes)
  | gulpfile.js (Build File)
  | server.js (node.js server)
  | .gitignore
  | package.json (all dependencies go here)
```

## Installation

  - Clone/Fork the repo
  - Install dependencies using: `npm install`
  - Run `gulp build && npm start`; This will start the app at [localhost:5000](http://localhost:5000)

## Live version

  You can find the live version of the deployed app [here](http://simple-jigsaw.herokuapp.com/).

## Frameworks/Libraries Used

  * `React` for building the App.
  * `Alt.js` for Isomorphic Flux implementation
  * `Gulpjs` for Build system
  * `Nodejs` server
  * `SASS` with SCSS syntax
  * `normalize.css` for CSS cross-browser normalization
  * And all the other `node_modules` that go with the app

  Credits where due. :star2: :sparkles: :clap:

## Browser Compatibility

  The Game UI is built using `CSS Flexbox` and relies on it for responsiveness and UX.

  Check if your browser supports flexbox [here](http://caniuse.com/#feat=flexbox).
