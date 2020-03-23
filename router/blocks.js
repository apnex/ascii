#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2580}', // '▀'
	'\u{2584}', // '▄'
	'\u{2588}'  // '█'
];
var square = [
	[2,0,0,0,0,2],
	[2,0,0,0,0,2],
	[2,1,1,1,1,2]
];

chalk.bgKeyword('orange')
chalk.keyword('blue')
square.forEach((row) => {
	var string = "";
	row.forEach((char) => {
		string += chalk.bgKeyword('blue')(sym[char]);
	});
	console.log(string);
});
