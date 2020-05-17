#!/usr/bin/env node
const colors = require('./colors.json');

var val = toTuple('fffb98');
console.log(JSON.stringify(val, null, "\t"));

var nval = toTuple(
	colors['mBlue-500'].replace('#', '')
);
console.log(JSON.stringify(nval, null, "\t"));

var testa = getDelta(toTuple('fffb98'), toTuple(colors['mBlue-500'].replace('#', '')));
console.log(testa);

// convert hex to decimal tuple
function toTuple(c) {
	return [
		parseInt(c.substring(0, 2), 16),
		parseInt(c.substring(2, 4), 16),
		parseInt(c.substring(4, 6), 16)
	];
}

// delta between 2 tuples
function getDelta(a, b) {
	return [
		Math.abs(a[0] - b[0]),
		Math.abs(a[1] - b[1]),
		Math.abs(a[2] - b[2])
	].reduce((a, b) => a + b);
}
