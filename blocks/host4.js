#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2580}', // '▀'
	'\u{2588}', // '█'
	'\u{2584}', // '▄'
	'\u{0020}'  // ' '
];
const sides = [
	sym[3], // blank
	chalk.keyword('lightgreen').bgKeyword('black')(sym[0]), // top green
	chalk.keyword('lightgreen').bgKeyword('black')(sym[1]), // full green
	chalk.keyword('lightgreen').bgKeyword('black')(sym[2]), // bottom green
	chalk.keyword('lightblue').bgKeyword('black')(sym[0]), // top yellow
	chalk.keyword('lightblue').bgKeyword('black')(sym[1]), // full yellow
	chalk.keyword('lightblue').bgKeyword('black')(sym[2]) // bottom yellow
];
var square = [
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,0,5,0,5,0,5,4,4,4,4,4,4,5,0,5,0,5,0,2],
	[2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2]
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
