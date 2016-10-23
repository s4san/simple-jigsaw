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

var GameActions = function () {
  function GameActions() {
    _classCallCheck(this, GameActions);
  }

  _createClass(GameActions, [{
    key: 'gameDataReceived',
    value: function gameDataReceived(data) {
      return data;
    }
  }, {
    key: 'createGame',
    value: function createGame() {
      var _this = this;

      _words2.default.fetch().then(function (data) {
        return _this.actions.gameDataReceived(data);
      });
    }
  }]);

  return GameActions;
}();

exports.default = _alt2.default.createActions(GameActions);

},{"../alt":2,"../sources/words":13}],2:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: "setDim",
    value: function setDim(node) {
      if (node) {
        node.style.height = node.getBoundingClientRect().width + "px";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { ref: this.setDim.bind(this), className: "cell flex align-center justify-center" },
        this.props.content
      );
    }
  }]);

  return Cell;
}(_react2.default.Component);

exports.default = Cell;


Cell.defaultProps = {
  content: '0-0'
};

Cell.propTypes = {
  content: _react2.default.PropTypes.string.isRequired
};

},{"react":"react"}],6:[function(require,module,exports){
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

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this));

    _this.state = {
      grid: []
    };
    _this.onStoreChange = _this.onStoreChange.bind(_this);
    return _this;
  }

  _createClass(Grid, [{
    key: 'onStoreChange',
    value: function onStoreChange(gameData) {
      this.setState({
        grid: gameData.grid
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _GameStore2.default.listen(this.onStoreChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _GameActions2.default.createGame();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'grid flex dir-col justify-center' },
        this.state.grid.length ? this.state.grid.map(function (row, index) {
          return _react2.default.createElement(_Row2.default, { row: row, key: '' + index });
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

},{"../../actions/GameActions":1,"../../stores/GameStore":14,"./Row":7,"react":"react"}],7:[function(require,module,exports){
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
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row flex align-center justify-between' },
        this.props.row.map(function (cell, index) {
          return _react2.default.createElement(_Cell2.default, { content: cell.char, key: cell.char + '-' + index });
        })
      );
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;


Row.defaultProps = {
  row: []
};

Row.propTypes = {
  row: _react2.default.PropTypes.array.isRequired
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

var GameGridCreator = function () {
	function GameGridCreator(data) {
		_classCallCheck(this, GameGridCreator);

		this.words = data;
		this.grid = [];
		this.occupiedIndices = [];
	}

	_createClass(GameGridCreator, [{
		key: 'putter',
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
	}, {
		key: 'getPosition',
		value: function getPosition(word, angle) {
			while (1) {
				var position = {
					hIndex: angle === _GameConstants.ANGLE.HORIZONTAL ? (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE) : -1,
					vIndex: angle === _GameConstants.ANGLE.VERTICAL ? (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE) : -1,
					direction: _GameConstants.DIRECTION.FORWARD,
					angle: angle
				};
				var spread = GameGridCreator.spreadWord(word, position.hIndex, position.vIndex, angle);
				if ((0, _Utilities.unique)(this.occupiedIndices, spread.spreadIndices)) {
					this.occupiedIndices = [].concat(_toConsumableArray(this.occupiedIndices), _toConsumableArray(spread.spreadIndices));
					return spread;
				}
			}
		}
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
				var put = _this2.putter(data.hIndex, data.vIndex, data.angle, position.directionStepper);
				data.word.split('').forEach(function (char) {
					return put(char);
				});
			});
		}
	}, {
		key: 'getGrid',
		value: function getGrid() {
			return this.grid;
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
		value: function spreadWord(word, hIndex, vIndex, angle) {
			while (1) {
				var randomIndex = (0, _Utilities.getRandomWithin)(_GameConstants.GRID_SIZE);
				if (randomIndex + word.length - 1 < _GameConstants.GRID_SIZE) {
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
			}
		}
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

},{"./utils/GameConstants":9,"./utils/Utilities":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHARACTERS = exports.CHARACTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var GRID_SIZE = exports.GRID_SIZE = 15;
var DIRECTION = exports.DIRECTION = {
  FORWARD: 0,
  BACKWARD: 1
};
var ANGLE = exports.ANGLE = {
  HORIZONTAL: 0,
  VERTICAL: 1
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getRandomWithin = exports.getRandomWithin = function getRandomWithin(num) {
	return Math.floor(Math.random() * 100 % num);
};
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

},{}],11:[function(require,module,exports){
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

},{"./routes":12,"react":"react","react-dom":"react-dom","react-router":"react-router","react-tap-event-plugin":"react-tap-event-plugin"}],12:[function(require,module,exports){
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
// You can read more here: https://github.com/reactjs/react-router

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

},{"./components/App":3,"./components/Home":4,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameStore = function () {
  function GameStore() {
    _classCallCheck(this, GameStore);

    this.bindListeners({
      createGame: _GameActions2.default.gameDataReceived
    });
    this.state = {
      grid: []
    };
  }

  _createClass(GameStore, [{
    key: 'createGame',
    value: function createGame(data) {
      var gridCreator = new _GameGridCreator2.default(data);
      gridCreator.makeGrid();
      console.log(gridCreator.getGrid());
      this.setState({
        grid: gridCreator.getGrid()
      });
    }
  }]);

  return GameStore;
}();

exports.default = _alt2.default.createStore(GameStore, 'GameStore');

},{"../actions/GameActions":1,"../alt":2,"../game/GameGridCreator":8}]},{},[11]);
