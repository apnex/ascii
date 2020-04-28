#!/usr/bin/env node
const chalk = require('chalk');

const sym = [
	'\u{2588}', // '█'
	'\u{2580}', // '▀'
	'\u{2584}', // '▄'
	'\u{0020}'  // ' '
];
const fgStyles = [
	chalk.keyword('black'),
	chalk.keyword('lightgreen'),
	chalk.keyword('lightblue'),
	chalk.keyword('orange')
];
const bgStyles = [
	chalk.bgKeyword('black'),
	chalk.bgKeyword('lightgreen'),
	chalk.bgKeyword('lightblue'),
	chalk.bgKeyword('orange')
];

// character - foreground is character, background is solid colour
var grid = [
	[1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,1],
	[1,0,1,0,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1]
];
var style = [
	[1,3,3,2,2,2,1,1,1],
	[1,3,3,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1]
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
for(y = 0; y < grid.length; y+=2) {
	let row = [];
	grid[y].forEach((bit1, x) => {
		let bit2 = grid[y + 1][x];
		let char;
		if(bit1) {
			if(bit2) {
				char = sym[0]; // 11
			} else {
				let st1 = fgStyles[style[y][x]](sym[1]); // 10
				let st2 = bgStyles[style[y + 1][x]](st1);
				char = st2; // 10
			}
		} else {
			if(bit2) {
				let st1 = fgStyles[style[y + 1][x]](sym[2]); // 01
				let st2 = bgStyles[style[y][x]](st1);
				char = st2; // 01
				//char = sym[2]; // 01
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
