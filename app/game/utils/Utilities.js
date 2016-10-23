export var getRandomWithin = (num) => Math.floor(Math.random() * 100 % num);
export var stepper = (operator) => {
	let stepFn =
		operator === '+'
		? i => ++i
		: operator === '-'
      ? i => --i
      : i => i
	return stepFn;
};
export var unique = (arr1, arr2) => {
	for(var i = 0; i < arr1.length; ++i) {
		let aPos = arr1[i];
		if(arr2.find(bPos => bPos[0] === aPos[0] && bPos[1] === aPos[1])) {
			return false;
		}
	}
	return true;
};
