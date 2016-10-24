import alt from '../alt';
import GameActions from '../actions/GameActions';
import GameGridCreator from '../game/GameGridCreator';
import GameGridValidator from '../game/GameGridValidator';

let clone = (o) => JSON.parse(JSON.stringify(o));

/**
 * GameStore
 * All GameActions are consumed and
 * Game Logic is driven from here
 **/
class GameStore {
  /**
   * constructor
   **/
  constructor() {
    this.state = {
      grid: [],
      isValid: false,
      currentRange: [[-1,-1]],
      foundWords: [],
      foundRanges: []
    };
    this.gridValidator = {};
    this.bindListeners({
      createGame: GameActions.gameDataReceived,
      selectCell: GameActions.selectCell
    });
  }
  /**
   * Once words are received from GameActions, create game
   * @param data - Array of words
   **/
  createGame(data) {
    let gridCreator = new GameGridCreator(data);
    gridCreator.makeGrid();
    this.gridValidator = new GameGridValidator(gridCreator.getGrid(), gridCreator.getMetadata());
    //this updates the view with the game
    this.setState({
      grid: gridCreator.getGrid()
    });
  }
  /**
   * Select a given cell and validate
   **/
  selectCell(pos) {
    let range = clone(this.state.currentRange);
    //Double-check if user has selected valid cell
    if(this.gridValidator.validateCell(pos)) {
      if(this.state.isValid) {
        //Valid cell already selected, continue validating appending new cell
        range.push(pos);
        if(GameGridValidator.validateRange(range) && range.length === 2 && GameGridValidator.getExpandableIndex(range[0], range[1]) > -1) {
          //If a range of cells are selected; Validate the range and the word formed
          let expandedRange = GameGridValidator.expand(range[0], range[1]);
          let word = this.gridValidator.getValidatedWord(expandedRange);
          this.setState({
            isValid: !word,
            currentRange: !!word ? [[-1,-1]] : expandedRange,
            foundWords: !!word ? [...this.state.foundWords, word] : [...this.state.foundWords],
            foundRanges: !!word ? [...this.state.foundRanges, expandedRange] : [...this.state.foundRanges]
          });
        } else if(!GameGridValidator.validateRange(range)) {
          //If Invalid Range is selected; RESET
          this.setState({
            isValid: false,
            currentRange: [[-1,-1]]
          });
        } else if(range.length > 3) {
          //If a range of 3+ letters is formed start checking for a valid word
          //If valid word is found, add it to foundWords and RESET; Else wait for a valid word to be formed
          let word = this.gridValidator.getValidatedWord(range);
          this.setState({
            isValid: !word,
            currentRange: !!word ? [[-1,-1]] : range,
            foundWords: !!word ? [...this.state.foundWords, word] : [...this.state.foundWords],
            foundRanges: !!word ? [...this.state.foundRanges, range] : [...this.state.foundRanges]
          });
        } else {
          //If only 3 letters are found; Wait for more letters
          this.setState({
            currentRange: range
          });
        }
      } else {
        //Valid Cell Selected; add this cell for further validation
        this.setState({
          isValid: true,
          currentRange: [pos]
        });
      }
    } else {
      //Invalid Cell selected, RESET
      this.setState({
        isValid: false,
        currentRange: [[-1, -1]]
      });
    }
  }
}

export default alt.createStore(GameStore, 'GameStore');
