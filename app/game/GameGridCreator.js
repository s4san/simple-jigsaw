import {CHARACTERS, GRID_SIZE, DIRECTION, ANGLE} from './utils/GameConstants';
import {getRandomWithin, stepper, unique} from './utils/Utilities';

export default class GameGridCreator {

  constructor(data) {
    this.words = data;
    this.grid = [];
    this.occupiedIndices = [];
  }

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

  static spreadWord(word, hIndex, vIndex, angle) {
		while(1) {
			let randomIndex = getRandomWithin(GRID_SIZE);
			if(randomIndex + word.length - 1 < GRID_SIZE) {
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
			} else if(randomIndex - word.length - 1 > -1) {
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
		}
	}

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

  getPosition(word, angle) {
		while(1) {
			let position = {
				hIndex: angle === ANGLE.HORIZONTAL ? getRandomWithin(GRID_SIZE) : -1,
				vIndex: angle === ANGLE.VERTICAL ? getRandomWithin(GRID_SIZE) : -1,
				direction: DIRECTION.FORWARD,
				angle
			};
			let spread = GameGridCreator.spreadWord(word, position.hIndex, position.vIndex, angle);
			if(unique(this.occupiedIndices, spread.spreadIndices)) {
				this.occupiedIndices = [...this.occupiedIndices, ...spread.spreadIndices];
				return spread;
			}
		}
	}

  makeGrid() {
    this.grid = GameGridCreator.populateGrid();
  	this.words.forEach((word) => {
  		let angle = getRandomWithin(Object.keys(ANGLE).length);
  		let position = this.getPosition(word, angle);
  		let data = {
  			word,
  			angle,
  			hIndex: position.hIndex,
  			vIndex: position.vIndex,
  			direction: position.direction
  		};
  		console.log(data);
  		let put = this.putter(data.hIndex, data.vIndex, data.angle, position.directionStepper);
  		data.word.split('').forEach((char) => put(char));
  	});
  }

  getGrid() {
    return this.grid;
  }

}
