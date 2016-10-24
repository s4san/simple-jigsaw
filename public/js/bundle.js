(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _words = require('../sources/words');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * All In-Game Actions Go Here
 **/

var GameActions = function () {
  function GameActions() {
    _classCallCheck(this, GameActions);
  }

  _createClass(GameActions, [{
    key: 'gameDataReceived',

    /**
     * Ask the store to create game once data to be populated is received
     **/
    value: function gameDataReceived(data) {
      return data;
    }
    /**
     * Create a Game By Simulating fetch request to get words
     **/

  }, {
    key: 'createGame',
    value: function createGame() {
      var _this = this;

      _words2.default.fetch().then(function (data) {
        return _this.actions.gameDataReceived(data);
      });
    }
    /**
     * Select a Cell
     **/

  }, {
    key: 'selectCell',
    value: function selectCell(pos) {
      return pos;
    }
  }]);

  return GameActions;
}();

exports.default = _alt2.default.createActions(GameActions);

},{"../alt":2,"../sources/words":14}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Export App - The Root Component
 **/
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Export The Home Component for '/' Route
 **/
var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Grid2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"./grid/Grid":6,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _GameActions = require('../../actions/GameActions');

var _GameActions2 = _interopRequireDefault(_GameActions);

var _GameStore = require('../../stores/GameStore');

var _GameStore2 = _interopRequireDefault(_GameStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this));

    _this.state = {
      isSelected: false,
      isCorrect: false,
      heightSet: false
    };
    _this.onStoreChange = _this.onStoreChange.bind(_this);
    return _this;
  }
  /**
   * Listen to Store Changes and update the grid accordingly
   **/


  _createClass(Cell, [{
    key: 'onStoreChange',
    value: function onStoreChange(gameData) {
      var _this2 = this;

      var isSelected = !!gameData.currentRange.find(function (pos) {
        return pos[0] === _this2.props.index[0] && pos[1] === _this2.props.index[1];
      });
      var isCorrect = !!gameData.foundRanges.find(function (range) {
        return !!range.find(function (pos) {
          return pos[0] === _this2.props.index[0] && pos[1] === _this2.props.index[1];
        });
      });
      this.setState({
        isSelected: isSelected,
        isCorrect: isCorrect
      });
    }
    /**
     * Attach Store Change Listener
     **/

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _GameStore2.default.listen(this.onStoreChange);
    }
    /**
     * Unlisten on unmount
     **/

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _GameStore2.default.unlisten(this.onStoreChange);
    }
    /**
     * Make Cell a Perfect Square *after* rendering
     **/

  }, {
    key: 'setDim',
    value: function setDim(node) {
      if (node && !this.state.heightSet) {
        node.style.height = node.getBoundingClientRect().width + "px";
        this.setState({
          heightSet: true
        });
      }
    }
    /**
     * Select Cell
     **/

  }, {
    key: 'selectCell',
    value: function selectCell(e) {
      if (!this.state.isSelected && !this.state.isCorrect) {
        _GameActions2.default.selectCell(this.props.index);
      }
    }
    /**
     * Render Cell
     **/

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          ref: this.setDim.bind(this),
          className: 'cell flex align-center justify-center ' + (this.state.isSelected ? 'selected' : '') + ' ' + (this.state.isCorrect ? 'correct' : ''),
          onClick: this.selectCell.bind(this)
        },
        _react2.default.createElement(_reactInk2.default, null),
        this.props.content
      );
    }
  }]);

  return Cell;
}(_react2.default.Component);

exports.default = Cell;


Cell.defaultProps = {
  content: 'A',
  index: [-1, -1]
};

Cell.propTypes = {
  content: _react2.default.PropTypes.string.isRequired,
  index: _react2.default.PropTypes.array.isRequired
};

},{"../../actions/GameActions":1,"../../stores/GameStore":15,"react":"react","react-ink":"react-ink"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _GameActions = require('../../actions/GameActions');

var _GameActions2 = _interopRequireDefault(_GameActions);

var _GameStore = require('../../stores/GameStore');

var _GameStore2 = _interopRequireDefault(_GameStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Utility to clone an Object
 * @TODO Move this to global utils
 **/
var clone = function clone(o) {
  return JSON.parse(JSON.stringify(o));
};

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  /**
   * Grid constructor
   **/
  function Grid() {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this));

    _this.state = {
      grid: []
    };
    _this.onStoreChange = _this.onStoreChange.bind(_this);
    return _this;
  }
  /**
   * Listen to Store Changes and update the grid accordingly
   **/


  _createClass(Grid, [{
    key: 'onStoreChange',
    value: function onStoreChange(gameData) {
      this.setState({
        grid: gameData.grid
      });
    }
    /**
     * Attach Store Change Listener
     **/

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _GameStore2.default.listen(this.onStoreChange);
    }
    /**
     * Create Game After Mounting the Grid Component
     **/

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _GameActions2.default.createGame();
    }
    /**
     * Unlisten on unmount
     **/

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _GameStore2.default.unlisten(this.onStoreChange);
    }
    /**
     * Event Handler for Cell Selection
     * Better to handle by event bubbling instead of click listener on each cell
     **/

  }, {
    key: 'selectChar',
    value: function selectChar(e) {
      if (e.target.classList.contains('cell')) {//Validates if the element is indeed a cell
        // let grid = clone(this.state.grid);
        // grid[]
      }
    }
    /**
     * Render Grid
     * @TODO Animated Creating Game... component instead of a simple h1
     **/

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'grid flex dir-col justify-center', onClick: this.selectChar.bind(this) },
        this.state.grid.length ? this.state.grid.map(function (row, index) {
          return _react2.default.createElement(_Row2.default, { row: row, key: '' + index, index: index });
        }) : _react2.default.createElement(
          'h1',
          null,
          'Creating Game...'
        )
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

exports.default = Grid;

},{"../../actions/GameActions":1,"../../stores/GameStore":15,"./Row":7,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',

    /**
     * Render Row
     **/
    value: function render() {
      var row = this.props.index;
      return _react2.default.createElement(
        'div',
        { className: 'row flex align-center justify-between' },
        this.props.row.map(function (cell, col) {
          return _react2.default.createElement(_Cell2.default, { content: cell.char, index: [row, col], key: cell.char + '-' + col });
        })
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;


Row.defaultProps = {
  row: [],
  index: -1
};

Row.propTypes = {
  row: _react2.default.PropTypes.array.isRequired,
  index: _react2.default.PropTypes.number.isRequired
};

},{"./Cell":5,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameConstants = require('./utils/GameConstants');

var _Utilities = require('./utils/Utilities');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Game Grid Creator
 **/
var GameGridCreator = function () {
  /**
   * @constructor
   * @param data - Array of words
   **/
  function GameGridCreator(data) {
    _classCallCheck(this, GameGridCreator);

    this.words = data;
    this.grid = [];
    this.occupiedIndices = [];
    this.metadata = [];
  }
  /**
   * @static
   * Spreads a word in
   *  [hIndex] row and [vIndex] column in [angle] orientation and [directionStepper] direction
   * The returned array can be used to check if
   * the indices in grid are unoccupied thereby
   * allowing a word to be placed
   * @param word - String, hIndex - Integer, vIndex - Integer, angle - Integer, directionStepper - function
   * @return Array
   **/


  _createClass(GameGridCreator, [{
    key: 'putter',

    /**
     * Create a put function that when called consecutively, places a valid word onto the grid.
     * Having a separate putter, allows us to separate the stepping logic from the assigning logic.
     * @param hIndex - Integer, vIndes - Integer, angle - Integer, directionStepper - function
     * @return function
     **/
    value: function putter(hIndex, vIndex, angle, directionStepper) {
      var _this = this;

      var r = hIndex;
      var c = vIndex;
      var rStepper = angle === _GameConstants.ANGLE.HORIZONTAL ? (0, _Utilities.stepper)('=') : directionStepper;
      var cStepper = angle === _GameConstants.ANGLE.VERTICAL ? (0, _Utilities.stepper)('=') : directionStepper;
      return function (char) {
        _this.grid[r][c] = {
          char: char,
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
     * @TODO Give a time-out to decide if word cannot be placed
     **/

  }, {
    key: 'getPosition',
    value: function getPosition(word, angle) {
      while (1) {
        //Big-O(Scary)!!! - Potentially infinite iterations.
        var position = {
          hIndex: angle === _GameConstants.ANGLE.HORIZONTAL ? (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE) : -1,
          vIndex: angle === _GameConstants.ANGLE.VERTICAL ? (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE) : -1,
          direction: _GameConstants.DIRECTION.FORWARD,
          angle: angle
        };
        var spread = GameGridCreator.spreadWord(word, position.hIndex, position.vIndex, angle); //Get the spread indices of the word
        if ((0, _Utilities.unique)(this.occupiedIndices, spread.spreadIndices)) {
          //Check if spreadIndices collide with occupiedIndices
          this.occupiedIndices = [].concat(_toConsumableArray(this.occupiedIndices), _toConsumableArray(spread.spreadIndices)); //push spreadIndices to occupiedIndices
          return spread;
        }
        //Continue until a unique spread to place the word is found
      }
    }
    /**
     * The main() method of this class.
     * Drives Grid Creation and assigns indices for each word
     * @TODO: Remove Console Log. Right now, it serves as a refernce to check the correctness of the algorithm.
     **/

  }, {
    key: 'makeGrid',
    value: function makeGrid() {
      var _this2 = this;

      this.grid = GameGridCreator.populateGrid();
      this.words.forEach(function (word) {
        var angle = (0, _Utilities.getRandomWithin)(Object.keys(_GameConstants.ANGLE).length);
        var position = _this2.getPosition(word, angle);
        var data = {
          word: word,
          angle: angle,
          hIndex: position.hIndex,
          vIndex: position.vIndex,
          direction: position.direction
        };
        console.log(data);
        _this2.metadata.push(data);
        var put = _this2.putter(data.hIndex, data.vIndex, data.angle, position.directionStepper);
        data.word.split('').forEach(function (char) {
          return put(char);
        });
      });
    }
    /**
     * Grid Getter
     **/

  }, {
    key: 'getGrid',
    value: function getGrid() {
      return this.grid;
    }
    /**
     * Metadata Getter
     **/

  }, {
    key: 'getMetadata',
    value: function getMetadata() {
      return this.metadata;
    }
  }], [{
    key: 'spreader',
    value: function spreader(word, hIndex, vIndex, angle, directionStepper) {
      var rStepper = angle === _GameConstants.ANGLE.HORIZONTAL ? (0, _Utilities.stepper)('=') : directionStepper;
      var cStepper = angle === _GameConstants.ANGLE.VERTICAL ? (0, _Utilities.stepper)('=') : directionStepper;
      var spread = [];
      for (var i = 0; i < word.length; ++i) {
        spread.push([hIndex, vIndex]);
        hIndex = rStepper(hIndex);
        vIndex = cStepper(vIndex);
      }
      return spread;
    }
  }, {
    key: 'spreadWord',

    /**
     * @static
     * Given a row/col, decide if the word should be placed ltr or rtl
     * spreadWord tries all indices in a grid until one that is long enough to spread the word is found
     * @param word - String, hIndex - Integer, vIndex - Integer, angle - Integer
     * @return Object
     **/
    value: function spreadWord(word, hIndex, vIndex, angle) {
      while (1) {
        //Big-O(Scary)!!! - Ideally shouldn't take more than GRID_SIZE/2 Iterations
        var randomIndex = (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE);
        if (randomIndex + word.length - 1 < _GameConstants.GRID_SIZE) {
          //If randomIndex allows to place the word ltr
          hIndex = hIndex === -1 ? randomIndex : hIndex;
          vIndex = vIndex === -1 ? randomIndex : vIndex;
          var direction = _GameConstants.DIRECTION.FORWARD;
          var directionStepper = (0, _Utilities.stepper)('+');
          var spreadIndices = GameGridCreator.spreader(word, hIndex, vIndex, angle, directionStepper);
          return {
            hIndex: hIndex,
            vIndex: vIndex,
            direction: direction,
            directionStepper: directionStepper,
            spreadIndices: spreadIndices
          };
        } else if (randomIndex - word.length - 1 > -1) {
          //If randomIndex allows to place the word rtl
          hIndex = hIndex === -1 ? randomIndex : hIndex;
          vIndex = vIndex === -1 ? randomIndex : vIndex;
          var _direction = _GameConstants.DIRECTION.BACKWARD;
          var _directionStepper = (0, _Utilities.stepper)('-');
          var _spreadIndices = GameGridCreator.spreader(word, hIndex, vIndex, angle, _directionStepper);
          return {
            hIndex: hIndex,
            vIndex: vIndex,
            direction: _direction,
            directionStepper: _directionStepper,
            spreadIndices: _spreadIndices
          };
        }
        //Continue until a valid randomIndex is found
      }
    }
    /**
     * @static
     * populate a GRID_SIZE*GRID_SIZE grid with random CHARACTERS[A-Z] : Big-O(GRID_SIZE^2)
     * @return Array
     **/

  }, {
    key: 'populateGrid',
    value: function populateGrid() {
      var grid = [];
      for (var i = 0; i < _GameConstants.GRID_SIZE; ++i) {
        var row = [];
        for (var j = 0; j < _GameConstants.GRID_SIZE; ++j) {
          row.push({
            char: _GameConstants.CHARACTERS[(0, _Utilities.getRandomWithin)(_GameConstants.CHARACTERS.length)],
            occupied: false
          });
        }
        grid.push(row);
      }
      return grid;
    }
  }]);

  return GameGridCreator;
}();

exports.default = GameGridCreator;

},{"./utils/GameConstants":10,"./utils/Utilities":11}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utilities = require('./utils/Utilities');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Game Grid Validator
 * All User Input Validations Take Place Here
 **/
var GameGridValidator = function () {
  /**
   * constructor
   * @param grid - Array, metadata - Array
   **/
  function GameGridValidator(grid, metadata) {
    _classCallCheck(this, GameGridValidator);

    this.grid = grid;
    this.metadata = metadata;
  }
  /**
   * @static
   * validateRange - Validate a range of indices for a potential word
   * @param indices - Array [[x1,y1],...,[xn,yn]]
   * @return Boolean
   **/


  _createClass(GameGridValidator, [{
    key: 'validateCell',

    /**
     * Validate if a cell contains a valid character
     * @param pos - Array [x,y]
     * @return Boolean
     **/
    value: function validateCell(pos) {
      var row = pos[0];
      var col = pos[1];
      return this.grid[row][col].occupied;
    }
    /**
     * Validate if a given range contains a valid word and return it
     * @param indices - Array [[x1,y1],...,[xn,yn]]
     * @return String
     **/

  }, {
    key: 'getValidatedWord',
    value: function getValidatedWord(indices) {
      var _this = this;

      var wordFormed = '';
      var isCharValid = indices.every(function (pos) {
        //Step1: Validate each character is part of a valid word
        if (_this.validateCell(pos)) {
          wordFormed += _this.getChar(pos);
          return true;
        } else {
          return false;
        }
      });
      if (isCharValid) {
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

  }, {
    key: 'getChar',
    value: function getChar(pos) {
      var row = pos[0];
      var col = pos[1];
      return this.grid[row][col].char;
    }
    /**
     * Validate that the given word is valid.
     * @param word - String
     * @return Boolean
     **/

  }, {
    key: 'validateWord',
    value: function validateWord(word) {
      return this.metadata.find(function (data) {
        return data.word.split('').sort().join('') === word.split('').sort().join('');
      });
    }
  }], [{
    key: 'validateRange',
    value: function validateRange(indices) {
      var validateBy = indices[0][0] === indices[1][0] ? 0 : 1;
      var validateWith = indices[0][validateBy];
      return indices.every(function (pos) {
        return pos[validateBy] === validateWith;
      });
    }
    /**
     * @static
     * getExpandableIndex - A range is expandable if begin and end pos have same row/col index
     * Check if given range is expandable and return the expandable one or -1
     * @param beginPos - Array [x,y] endPos - Array [p,q]
     * @return Integer
     **/

  }, {
    key: 'getExpandableIndex',
    value: function getExpandableIndex(beginPos, endPos) {
      var index = beginPos[0] === endPos[0] && Math.abs(endPos[1] - beginPos[1]) > 1 ? 1 : beginPos[1] === endPos[1] && Math.abs(endPos[0] - beginPos[0]) > 1 ? 0 : -1;
      return index;
    }
    /**
     * @static
     * Expand a pair of positions encompassing the cells in between
     * @param beginPos - Array [x,y] endPos - Array [p,q]
     * @return Array - [[x,y],...,[p,q]]
     **/

  }, {
    key: 'expand',
    value: function expand(beginPos, endPos) {
      var indexToExpand = GameGridValidator.getExpandableIndex(beginPos, endPos);
      var indices = [];
      var nextPos = [].concat(_toConsumableArray(beginPos));
      var stepFn = void 0;
      if (indexToExpand > -1) {
        stepFn = endPos[indexToExpand] > beginPos[indexToExpand] ? (0, _Utilities.stepper)('+') : (0, _Utilities.stepper)('-');
        while (nextPos[indexToExpand] !== endPos[indexToExpand]) {
          indices.push([].concat(_toConsumableArray(nextPos)));
          nextPos = indexToExpand === 0 ? [stepFn(nextPos[0]), nextPos[1]] : [nextPos[0], stepFn(nextPos[1])];
        }
        indices.push([].concat(_toConsumableArray(endPos)));
      }
      return indices;
    }
  }]);

  return GameGridValidator;
}();

exports.default = GameGridValidator;

},{"./utils/Utilities":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//English Uppercase Alphabet
var CHARACTERS = exports.CHARACTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Grid Size
var GRID_SIZE = exports.GRID_SIZE = 15;
//Word Direction: ltr or rtl
var DIRECTION = exports.DIRECTION = {
  FORWARD: 0,
  BACKWARD: 1
};
//Word Orientation: ltr or top->bottom
var ANGLE = exports.ANGLE = {
  HORIZONTAL: 0,
  VERTICAL: 1
};

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Given a number returns a random within and not including that number: 0 < n < n
 * @param num - Integer
 * @return Integer
 **/
var getRandomWithin = exports.getRandomWithin = function getRandomWithin(num) {
  return Math.floor(Math.random() * 100 % num);
};
/**
 * Given an operator: '+', '-', '='
 * returns a step function that increments, decrements or returns itself respectively
 * @param operator - Char
 * @return function
 **/
var stepper = exports.stepper = function stepper(operator) {
  var stepFn = operator === '+' ? function (i) {
    return ++i;
  } : operator === '-' ? function (i) {
    return --i;
  } : function (i) {
    return i;
  };
  return stepFn;
};
/**
 * Check if two arrays with elements of type array and length 2, intersect
 * @param arr1 - Array1, arr2 - Array2
 * @return boolean
 **/
var unique = exports.unique = function unique(arr1, arr2) {
  var _loop = function _loop() {
    var aPos = arr1[i];
    if (arr2.find(function (bPos) {
      return bPos[0] === aPos[0] && bPos[1] === aPos[1];
    })) {
      return {
        v: false
      };
    }
  };

  for (var i = 0; i < arr1.length; ++i) {
    var _ret = _loop();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return true;
};

},{}],12:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();
// This one is pure service module. It injects our markup into the page, shouldn't be changed

var history = _reactRouter.browserHistory;

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":13,"react":"react","react-dom":"react-dom","react-router":"react-router","react-tap-event-plugin":"react-tap-event-plugin"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// React-router will handle routing by itself. So you are, basically, not switching pages, it just looks like so

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

},{"./components/App":3,"./components/Home":4,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var words = ['BEAUTIFUL', 'COURAGE', 'GLORY', 'AWESOME', 'LANGUAGE', 'TEST', 'CHECK', 'LOVE', 'ANGEL', 'SACRIFICE'];
var ValidWords = {
  fetch: function fetch() {
    // returning a Promise because that is what fetch does.
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      resolve(words);
    });
  }
};

exports.default = ValidWords;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _GameActions = require('../actions/GameActions');

var _GameActions2 = _interopRequireDefault(_GameActions);

var _GameGridCreator = require('../game/GameGridCreator');

var _GameGridCreator2 = _interopRequireDefault(_GameGridCreator);

var _GameGridValidator = require('../game/GameGridValidator');

var _GameGridValidator2 = _interopRequireDefault(_GameGridValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clone = function clone(o) {
  return JSON.parse(JSON.stringify(o));
};

/**
 * GameStore
 * All GameActions are consumed and
 * Game Logic is driven from here
 **/

var GameStore = function () {
  /**
   * constructor
   **/
  function GameStore() {
    _classCallCheck(this, GameStore);

    this.state = {
      grid: [],
      isValid: false,
      currentRange: [[-1, -1]],
      foundWords: [],
      foundRanges: []
    };
    this.gridValidator = {};
    this.bindListeners({
      createGame: _GameActions2.default.gameDataReceived,
      selectCell: _GameActions2.default.selectCell
    });
  }
  /**
   * Once words are received from GameActions, create game
   * @param data - Array of words
   **/


  _createClass(GameStore, [{
    key: 'createGame',
    value: function createGame(data) {
      var gridCreator = new _GameGridCreator2.default(data);
      gridCreator.makeGrid();
      this.gridValidator = new _GameGridValidator2.default(gridCreator.getGrid(), gridCreator.getMetadata());
      //this updates the view with the game
      this.setState({
        grid: gridCreator.getGrid()
      });
    }
    /**
     * Select a given cell and validate
     **/

  }, {
    key: 'selectCell',
    value: function selectCell(pos) {
      var range = clone(this.state.currentRange);
      //Double-check if user has selected valid cell
      if (this.gridValidator.validateCell(pos)) {
        if (this.state.isValid) {
          //Valid cell already selected, continue validating appending new cell
          range.push(pos);
          if (_GameGridValidator2.default.validateRange(range) && range.length === 2 && _GameGridValidator2.default.getExpandableIndex(range[0], range[1]) > -1) {
            //If a range of cells are selected; Validate the range and the word formed
            var expandedRange = _GameGridValidator2.default.expand(range[0], range[1]);
            var word = this.gridValidator.getValidatedWord(expandedRange);
            this.setState({
              isValid: !word,
              currentRange: !!word ? [[-1, -1]] : expandedRange,
              foundWords: !!word ? [].concat(_toConsumableArray(this.state.foundWords), [word]) : [].concat(_toConsumableArray(this.state.foundWords)),
              foundRanges: !!word ? [].concat(_toConsumableArray(this.state.foundRanges), [expandedRange]) : [].concat(_toConsumableArray(this.state.foundRanges))
            });
          } else if (!_GameGridValidator2.default.validateRange(range)) {
            //If Invalid Range is selected; RESET
            this.setState({
              isValid: false,
              currentRange: [[-1, -1]]
            });
          } else if (range.length > 3) {
            //If a range of 3+ letters is formed start checking for a valid word
            //If valid word is found, add it to foundWords and RESET; Else wait for a valid word to be formed
            var _word = this.gridValidator.getValidatedWord(range);
            this.setState({
              isValid: !_word,
              currentRange: !!_word ? [[-1, -1]] : range,
              foundWords: !!_word ? [].concat(_toConsumableArray(this.state.foundWords), [_word]) : [].concat(_toConsumableArray(this.state.foundWords)),
              foundRanges: !!_word ? [].concat(_toConsumableArray(this.state.foundRanges), [range]) : [].concat(_toConsumableArray(this.state.foundRanges))
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
  }]);

  return GameStore;
}();

exports.default = _alt2.default.createStore(GameStore, 'GameStore');

},{"../actions/GameActions":1,"../alt":2,"../game/GameGridCreator":8,"../game/GameGridValidator":9}]},{},[12]);
