import {CHARACTERS, GRID_SIZE, DIRECTION, ANGLE} from './utils/GameConstants';
import {getRandomWithin, stepper, unique} from './utils/Utilities';
/**
 * Game Grid Creator
 **/
export default class GameGridCreator {
  /**
   * @constructor
   * @param data - Array of words
   **/
  constructor(data) {
    this.words = data;
    this.grid = [];
    this.occupiedIndices = [];
    this.metadata = [];
  }
  /**
   * @static
   * Spreads a word in
   * [hIndex] row and [vIndex] column in [angle] orientation and [directionStepper] direction
   * The returned array can be used to check if
   * the indices in grid are unoccupied thereby
   * allowing a word to be placed
   * @param word - String, hIndex - Integer, vIndex - Integer, angle - Integer, directionStepper - function
   * @return Array
   **/
  static spreader(word, hIndex, vIndex, angle, directionStepper) {
    let rStepper = angle === ANGLE.HORIZONTAL ? stepper('=') : directionStepper;
    let cStepper = angle === ANGLE.VERTICAL ? stepper('='): directionStepper;
    let spread = [];
    for(var i = 0; i < word.length; ++i) {
      spread.push([hIndex, vIndex]);
      hIndex = rStepper(hIndex);
      vIndex = cStepper(vIndex);
    }
    return spread;
  };
  /**
   * @static
   * Given a row/col, decide if the word should be placed ltr or rtl
   * spreadWord tries all indices in a grid until one that is long enough to spread the word is found
   * @param word - String, hIndex - Integer, vIndex - Integer, angle - Integer
   * @return Object
   **/
  static spreadWord(word, hIndex, vIndex, angle) {
    while(1) {  //Big-O(Scary)!!! - Ideally shouldn't take more than GRID_SIZE/2 Iterations
      let randomIndex = getRandomWithin(GRID_SIZE);
      if(randomIndex + word.length - 1 < GRID_SIZE) {  //If randomIndex allows to place the word ltr
        hIndex = hIndex === -1 ? randomIndex : hIndex;
        vIndex = vIndex === -1 ? randomIndex : vIndex;
        let direction = DIRECTION.FORWARD;
        let directionStepper = stepper('+');
        let spreadIndices = GameGridCreator.spreader(word, hIndex, vIndex, angle, directionStepper);
        return {
          hIndex,
          vIndex,
          direction,
          directionStepper,
          spreadIndices
        };
      } else if(randomIndex - word.length - 1 > -1) {  //If randomIndex allows to place the word rtl
        hIndex = hIndex === -1 ? randomIndex : hIndex;
        vIndex = vIndex === -1 ? randomIndex : vIndex;
        let direction = DIRECTION.BACKWARD;
        let directionStepper = stepper('-');
        let spreadIndices = GameGridCreator.spreader(word, hIndex, vIndex, angle, directionStepper);
        return {
          hIndex,
          vIndex,
          direction,
          directionStepper,
          spreadIndices
        };
      }
      //Continue until a valid randomIndex is found
    }
  }
  /**
   * @static
   * populate a GRID_SIZE*GRID_SIZE grid with random CHARACTERS[A-Z] : GRID_SIZE^2 iterations
   * @return Array
   **/
  static populateGrid() {
    let grid = [];
    for(var i = 0; i < GRID_SIZE; ++i) {
      var row = [];
      for(var j = 0; j < GRID_SIZE; ++j) {
        row.push({
          char: CHARACTERS[getRandomWithin(CHARACTERS.length)],
          occupied: false
        });
      }
      grid.push(row);
    }
    return grid;
  }
  /**
   * Create a put function that when called consecutively, places a valid word onto the grid.
   * Having a separate putter, allows us to separate the stepping logic from the assigning logic.
   * @param hIndex - Integer, vIndes - Integer, angle - Integer, directionStepper - function
   * @return function
   **/
  putter(hIndex, vIndex, angle, directionStepper) {
    let r = hIndex;
    let c = vIndex;
    let rStepper = angle === ANGLE.HORIZONTAL ? stepper('=') : directionStepper;
    let cStepper = angle === ANGLE.VERTICAL ? stepper('=') : directionStepper;
    return (char) => {
      this.grid[r][c] = {
        char,
        occupied: true
      };
      r = rStepper(r);
      c = cStepper(c);
    };
  }
  /**
   * Get positions [[x1,y1], [x2,y2], ... [xn,yn]] for a word in the grid
   * @param word - String, angle - Integer
   * @return Array
   * @TODO Generate unique random number in each iteration???
   **/
  getPosition(word, angle) {
    let triedPositions = [];
    let canPlace = true;
    for(var i = 0; i < GRID_SIZE; ++i) {
      let r = [];
      for(var j = 0; j < GRID_SIZE; ++j) {
        r.push(false);
      }
      triedPositions.push(r);
    }
    while(canPlace) { //Big-O(Scary!!!) : Avg. ~GRID_SIZE ^ 2 iterations
      let randomRow = getRandomWithin(GRID_SIZE);
      let randomCol = getRandomWithin(GRID_SIZE);
      if(!triedPositions[randomRow][randomCol]) {
        triedPositions[randomRow][randomCol] = true;
        let position = {
          hIndex: angle === ANGLE.HORIZONTAL ? randomRow : -1,
          vIndex: angle === ANGLE.VERTICAL ? randomCol : -1,
          direction: DIRECTION.FORWARD,
          angle
        };
        let spread = GameGridCreator.spreadWord(word, position.hIndex, position.vIndex, angle);  //Get the spread indices of the word
        if(unique(this.occupiedIndices, spread.spreadIndices)) { //Check if spreadIndices collide with occupiedIndices
          this.occupiedIndices = [...this.occupiedIndices, ...spread.spreadIndices];  //push spreadIndices to occupiedIndices
          return spread;
        }
      } else {
        canPlace = !!triedPositions.find(row => !!row.find(col => !col));
      }
      //Continue until a unique spread to place the word is found
    }
    return null;
  }
  /**
   * The main() method of this class.
   * Drives Grid Creation and assigns indices for each word
   * @TODO: Remove Console Log. Right now, it serves as a refernce to check the correctness of the algorithm.
   **/
  makeGrid() {
    console.time('GameCreateTime');
    this.grid = GameGridCreator.populateGrid();
    this.words.forEach((word) => {
      let angle = getRandomWithin(Object.keys(ANGLE).length);
      let position = this.getPosition(word, angle);
      if(position) {
        let data = {
          word,
          angle,
          hIndex: position.hIndex,
          vIndex: position.vIndex,
          direction: position.direction
        };
        console.log(data);
        this.metadata.push(data);
        let put = this.putter(data.hIndex, data.vIndex, data.angle, position.directionStepper);
        data.word.split('').forEach((char) => put(char));
      } else {
        console.log(`Ignored Word:\t${word}`)
      }
    });
    console.timeEnd('GameCreateTime');
  }
  /**
   * Grid Getter
   **/
  getGrid() {
    return this.grid;
  }
  /**
   * Metadata Getter
   **/
  getMetadata() {
    return this.metadata;
  }
}
