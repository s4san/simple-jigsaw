import {stepper} from './utils/Utilities';
/**
 * Game Grid Validator
 * All User Input Validations Take Place Here
 **/
export default class GameGridValidator {
  /**
   * constructor
   * @param grid - Array, metadata - Array
   **/
  constructor(grid, metadata) {
    this.grid = grid;
    this.metadata = metadata;
  }
  /**
   * @static
   * validateRange - Validate a range of indices for a potential word
   * @param indices - Array [[x1,y1],...,[xn,yn]]
   * @return Boolean
   **/
  static validateRange(indices) {
    let validateBy = indices[0][0] === indices[1][0] ? 0 : 1;
    let validateWith = indices[0][validateBy];
    return indices.every((pos) => pos[validateBy] === validateWith);
  }
  /**
   * @static
   * getExpandableIndex - A range is expandable if begin and end pos have same row/col index
   * Check if given range is expandable and return the expandable one or -1
   * @param beginPos - Array [x,y] endPos - Array [p,q]
   * @return Integer
   **/
  static getExpandableIndex(beginPos, endPos) {
    let index =
      beginPos[0] === endPos[0] && Math.abs(endPos[1] - beginPos[1]) > 1
        ? 1
        : beginPos[1] === endPos[1] && Math.abs(endPos[0] - beginPos[0]) > 1
          ? 0
          : -1;
    return index;
  }
  /**
   * @static
   * Expand a pair of positions encompassing the cells in between
   * @param beginPos - Array [x,y] endPos - Array [p,q]
   * @return Array - [[x,y],...,[p,q]]
   **/
  static expand(beginPos, endPos) {
    let indexToExpand = GameGridValidator.getExpandableIndex(beginPos, endPos);
    let indices = [];
    let nextPos = [...beginPos];
    let stepFn;
    if(indexToExpand > -1) {
      stepFn = endPos[indexToExpand] > beginPos[indexToExpand] ? stepper('+') : stepper('-');
      while(nextPos[indexToExpand] !== endPos[indexToExpand]) {
        indices.push([...nextPos]);
        nextPos =
          indexToExpand === 0
          ? [stepFn(nextPos[0]), nextPos[1]]
          : [nextPos[0], stepFn(nextPos[1])];
      }
      indices.push([...endPos]);
    }
    return indices;
  }
  /**
   * Validate if a cell contains a valid character
   * @param pos - Array [x,y]
   * @return Boolean
   **/
  validateCell(pos) {
    let row = pos[0];
    let col = pos[1];
    return this.grid[row][col].occupied;
  }
  /**
   * Validate if a given range contains a valid word and return it
   * @param indices - Array [[x1,y1],...,[xn,yn]]
   * @return String
   **/
  getValidatedWord(indices) {
    let wordFormed = '';
    let isCharValid = indices.every(pos => {
      //Step1: Validate each character is part of a valid word
      if(this.validateCell(pos)) {
        wordFormed += this.getChar(pos);
        return true;
      } else {
        return false;
      }
    });
    if(isCharValid) {
      //Step 2: Validate word formed is a complete, valid word in Grid
      return this.validateWord(wordFormed) ? wordFormed : '';
    } else {
      return '';
    }
  }
  /**
   * Get Character represented by a Cell
   * @param pos - Array [x,y]
   * @return Character
   **/
   getChar(pos) {
     let row = pos[0];
     let col = pos[1];
     return this.grid[row][col].char;
   }
   /**
    * Validate that the given word is valid.
    * @param word - String
    * @return Boolean
    **/
   validateWord(word) {
     return this.metadata.find(data => data.word.split('').sort().join('') === word.split('').sort().join(''));
   }
}
