#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2588}', // '█'
	'\u{2580}', // '▀'
	'\u{2584}', // '▄'
	'\u{0020}'  // ' '
];
const styles = [
	'black',
	'lightgreen',
	'lightblue',
	'orange',
	'red',
	'grey'
];

// grid
var grid = [
	[1,1,1,1],
	[1,4,4,1],
	[3,0,0,2],
	[3,0,0,2],
	[3,1,1,1],
	[1,1,1,1]
];

// pad grid to even rows
var pad = 0;
if(grid.length % 2 != 0) {
	if(pad) {	// pad top
		grid.push(Array(grid[0].length).fill(0));
	} else {	// pad bottom
		grid.unshift(Array(grid[0].length).fill(0));
	}
}

// build ascii map
let result = [];
for(y = 0; y < grid.length; y += 2) {
	let row = [];
	grid[y].forEach((bit1, x) => {
		let bit2 = grid[y + 1][x];
		let char;
		if(bit1 == bit2) {
			// check styles - if same, merge block
			char = chalk.keyword(styles[5]).bgKeyword(styles[bit1])("+");
		} else {
			char = chalk.keyword(styles[bit1]).bgKeyword(styles[bit2])(sym[1]);
		}
		row.push(char);
	});
	result.push(row);
}

// print
result.forEach((row, y) => {
	var string = "";
	row.forEach((char, x) => {
		string += char;
	});
	console.log(string);
});
