#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2584}', // '▄'
	'\u{2588}', // '█'
	'\u{2580}', // '▀'
	'\u{0020}'  // ' '
];
const sides = [
	chalk.keyword('orange').bgKeyword('black')(sym[0]),
	chalk.keyword('orange').bgKeyword('black')(sym[1]),
	chalk.keyword('orange').bgKeyword('black')(sym[2]),
	sym[3]
];
var square = [
	[0,0,1,0,0,1,0,0],
	[1,3,3,3,3,3,3,1],
	[1,3,3,1,1,3,3,1],
	[1,3,3,3,3,3,3,1],
	[2,2,1,2,2,1,2,2]
];

chalk.bgKeyword('orange')
chalk.keyword('blue')
square.forEach((row) => {
	var string = "";
	row.forEach((char) => {
		string += sides[char];
	});
	console.log(string);
});
