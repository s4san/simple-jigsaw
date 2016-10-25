/**
 * Given a number returns a random within and not including that number: 0 < n < n
 * @param num - Integer
 * @return Integer
 **/
export var getRandomWithin = (num) => Math.floor(Math.random() * num);
/**
 * Given an operator: '+', '-', '='
 * returns a step function that increments, decrements or returns itself respectively
 * @param operator - Char
 * @return function
 **/
export var stepper = (operator) => {
	let stepFn =
		operator === '+'
		? i => ++i
		: operator === '-'
      ? i => --i
      : i => i
	return stepFn;
};
/**
 * Check if two arrays with elements of type array and length 2, intersect
 * @param arr1 - Array1, arr2 - Array2
 * @return boolean
 **/
export var unique = (arr1, arr2) => {
	for(var i = 0; i < arr1.length; ++i) {
		let aPos = arr1[i];
		if(arr2.find(bPos => bPos[0] === aPos[0] && bPos[1] === aPos[1])) {
			return false;
		}
	}
	return true;
};
