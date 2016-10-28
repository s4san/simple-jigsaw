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
      foundRanges: [],
      playerScore: 0
    };
    this.gridValidator = {};
    this.activePlayerID = -1;
    this.bindListeners({
      createGame: GameActions.gameDataReceived,
      selectCell: GameActions.selectCell,
      setPlayerID: GameActions.setActivePlayerID
    });
  }
  /**
   * Once words are received from GameActions, create game
   * @param data - Array of words
   **/
  createGame(data) {
    let grid, gridValidator, metadata;
    if(localStorage && localStorage.getItem('grid') && localStorage.getItem('gridMetadata')) {
      grid = JSON.parse(localStorage.getItem('grid'));
      metadata = JSON.parse(localStorage.getItem('gridMetadata'));
      gridValidator = new GameGridValidator(grid, metadata);
    } else {
      let gridCreator = new GameGridCreator(data);
      gridCreator.makeGrid();
      grid = gridCreator.getGrid();
      metadata = gridCreator.getMetadata();
      gridValidator = new GameGridValidator(grid, metadata);
      //Save the grid to localstorage.
      if(localStorage) {
        localStorage.setItem('grid', JSON.stringify(gridCreator.getGrid()));
        localStorage.setItem('gridMetadata', JSON.stringify(metadata));
      }
    }
    this.gridValidator = gridValidator;
    //this updates the view with the game
    this.setState({
      grid
    });
  }
  /**
   * Select a given cell and validate
   * @TODO Refactor this method; It's doing too much - BREAK IT DOWN!
   **/
  selectCell(pos) {
    let range = clone(this.state.currentRange);
    //check if user has selected valid cell
    if(this.gridValidator.validateCell(pos)) {
      if(this.state.isValid) {
        //Valid cell already selected, continue validating appending new cell
        range.push(pos);
        if(GameGridValidator.validateRange(range) && range.length > 1 && GameGridValidator.getExpandableIndex(range[range.length - 2], range[range.length - 1]) > -1) {
          //If a range of cells are selected; Validate the range and the word formed
          let expandedRange = [...range.slice(0, range.length-2), ...GameGridValidator.expand(range[range.length - 2], range[range.length - 1])];
          //Remove Duplicates while expanding
          expandedRange = expandedRange.reduce((newRange, pos, index) => {
            if(!newRange.find(newPos => newPos[0] === pos[0] && newPos[1] === pos[1])) {
              newRange.push(pos);
            }
            return newRange;
          }, []);
          //Validate Word Formed
          let word = this.gridValidator.getValidatedWord(expandedRange);
          let valid = !!word;
          this.setState({
            isValid: !valid,
            currentRange: valid ? [[-1,-1]] : expandedRange,
            foundWords: valid ? [...this.state.foundWords, word] : [...this.state.foundWords],
            foundRanges: valid ? [...this.state.foundRanges, expandedRange] : [...this.state.foundRanges],
            playerScore: valid ? ++this.state.playerScore : this.state.playerScore
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
          let valid = !!word;
          this.setState({
            isValid: !valid,  //A valid word is found; RESET to find new words
            currentRange: valid ? [[-1,-1]] : range,
            foundWords: valid ? [...this.state.foundWords, word] : [...this.state.foundWords],
            foundRanges: valid ? [...this.state.foundRanges, range] : [...this.state.foundRanges],
            playerScore: valid ? ++this.state.playerScore : this.state.playerScore
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
    if(localStorage && this.activePlayerID > -1) {
      localStorage.setItem(`${this.activePlayerID}State`, JSON.stringify(this.state));
    }
  }
  /**
   * Set Active Player ID
   **/
  setPlayerID(playerID) {
    this.activePlayerID = parseInt(playerID, 10);
    if(localStorage && localStorage.getItem(`${this.activePlayerID}State`)) {
      this.setState(JSON.parse(localStorage.getItem(`${this.activePlayerID}State`)));
    }
  }
}

export default alt.createStore(GameStore, 'GameStore');
