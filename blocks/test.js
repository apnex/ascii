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
	chalk.keyword('orange'),
	chalk.keyword('red')
];
const bgStyles = [
	chalk.bgKeyword('black'),
	chalk.bgKeyword('lightgreen'),
	chalk.bgKeyword('lightblue'),
	chalk.bgKeyword('orange'),
	chalk.bgKeyword('red')
];

// character - foreground is character, background is solid colour
var grid = [
	[1,1,1,1],
	[1,1,1,1],
	[1,0,0,1],
	[1,0,0,1],
	[1,1,1,1],
	[1,1,1,1]
];
var style = [
	[4,4,4,2],
	[4,4,4,4],
	[4,4,4,4],
	[4,4,4,4],
	[4,4,4,4],
	[2,4,4,4]
];

// pad grid to even rows
var pad = 0;
if(grid.length % 2 != 0) {
	if(pad) {	// pad top
		grid.push(Array(grid[0].length).fill(0));
		style.push(Array(style[0].length).fill(0));
	} else {	// pad bottom
		grid.unshift(Array(grid[0].length).fill(0));
		style.unshift(Array(style[0].length).fill(0));
	}
}

// assume all half-characters are top+foreground
// full height ascii blocks are background (to allow for foreground characters)
// build ascii map
let result = [];
for(y = 0; y < grid.length; y += 2) {
	let row = [];
	grid[y].forEach((bit1, x) => {
		let bit2 = grid[y + 1][x];
		let char;
		if(bit1) {
			if(bit2) {
				// check styles - if same, set block
				let st1 = style[y][x];
				let st2 = style[y + 1][x];
				let nchar;
				if(st1 == st2) { // candidate for character
					//nchar = fgStyles[st1](sym[0]);
					nchar = fgStyles[0]("+");
					nchar = bgStyles[st1](nchar);
				} else {
					nchar = fgStyles[st1](sym[1]);
					nchar = bgStyles[st2](nchar);
				}
				char = nchar; // 11
			} else {
				let st1 = fgStyles[style[y][x]](sym[1]);
				let st2 = bgStyles[0](st1);
				char = st2; // 10
			}
		} else {
			if(bit2) {
				let st1 = fgStyles[style[y + 1][x]](sym[2]);
				let st2 = bgStyles[0](st1);
				char = st1; // 01
			} else {
				//let st1 = bgStyles[style[y][x]](sym[0]);
				//let st2 = fgStyles[style[y + 1][x]](st1);
				char = sym[0]; // 00
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
