#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2588}', // '█'
	'\u{2580}', // '▀'
	'\u{2584}', // '▄'
	'\u{0020}'  // ' '
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
	[1,0,0,0,0,0,0,1],
	[1,0,1,0,1,1,0,1],
	[1,1,1,1,1,1,1,1]
];

// pad grid to even rows
var pad = 0;
if(grid.length % 2 != 0) {
	if(pad) { // pad top to even rows
		grid.push(Array(grid[0].length).fill(0));
	} else {
		grid.unshift(Array(grid[0].length).fill(0));
	}
}

let result = [];
for(y = 0; y < grid.length; y+=2) {
	let row = [];
	grid[y].forEach((bit1, x) => {
		let bit2 = grid[y + 1][x];
		let char;
		if(bit1) {
			if(bit2) {
				char = sym[0]; // 11
			} else {
				char = sym[1]; // 10
			}
		} else {
			if(bit2) {
				char = sym[2]; // 01
			} else {
				char = sym[3]; // 00
			}
		}
		row.push(char);
	});
	result.push(row);
}
result.forEach((row, y) => {
	var string = "";
	row.forEach((char, x) => {
		string += char;
	});
	console.log(string);
});
