#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2580}', // '▀'
	'\u{2588}', // '█'
	'\u{2584}', // '▄'
	'\u{0020}',  // ' ',
	'+',  // '?'
	'v',  // '?'
	'm'  // '?'
];
const styles = [
	(char) => {return char}, // blank
	chalk.keyword('lightgreen').bgKeyword('black'),
	chalk.keyword('black').bgKeyword('orange')
];
const fgStyles = [
	(char) => {return char}, // blank
	chalk.keyword('black'),
	chalk.keyword('lightgreen'),
	chalk.keyword('lightblue'),
	chalk.keyword('orange')
];
const bgStyles = [
	(char) => {return char}, // blank
	chalk.bgKeyword('black'),
	chalk.bgKeyword('lightgreen'),
	chalk.bgKeyword('lightblue'),
	chalk.bgKeyword('orange')
];

// character - foreground is character, background is solid colour
var grid = [
	[1,0,3,3,0,0,3,3,0,1],
	[3,3,1,0,0,0,0,1,3,3],
	[1,3,1,3,5,6,3,1,3,1],
	[3,3,1,2,2,2,2,1,3,3],
	[1,2,3,3,2,2,3,3,2,1]
];
var fgStyle = [
	[3,3,3,3,3,3,3,3,3,3],
	[3,3,2,2,2,2,2,2,3,3],
	[3,3,2,3,1,1,3,2,3,3],
	[3,3,2,2,2,2,2,2,3,3],
	[3,3,3,3,3,3,3,3,3,3]
];
var bgStyle = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,4,4,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];

chalk.bgKeyword('orange')
chalk.keyword('blue')
grid.forEach((row, y) => {
	var string = "";
	row.forEach((char, x) => {
		let fg = fgStyles[fgStyle[y][x]](sym[char]);
		cell = bgStyles[bgStyle[y][x]](fg);
		string += cell;
	});
	console.log(string);
});
