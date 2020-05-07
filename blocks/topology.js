#!/usr/bin/env node
const chalk = require('chalk');
const colors = require('./colors.json');

const sym = [
	'\u{2588}', // '█'
	'\u{2580}', // '▀'
	'\u{2584}', // '▄'
	'\u{0020}'  // ' '
];
const styles = [
	'mBlack',
	'mLight-Green-400',
	'mLight-Blue-400',
	'mRed-300',
	'mOrange-400',
	'mRed-800',
	'mGrey'
];

// grid
var vm1 = [
	[1,1,1,1,1],
	[1,0,0,0,1],
	[1,0,2,0,1],
	[1,0,0,0,1],
	[1,3,3,3,1],
	[0,3,3,3,0],
	[0,0,1,0,0],
	[0,0,1,0,0],
	[0,0,1,0,0],
	[0,0,1,0,0],
	[0,0,1,0,0],
	[0,0,1,0,0]
];
var server1 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,3,0,3,0,3,0,0,0,0,3,0,3,0,3,0,1],
	[1,0,3,0,3,0,3,0,0,0,0,3,0,3,0,3,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var server2 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,2,3,2,3,0,4,4,4,4,0,0,3,0,3,0,1],
	[1,0,3,2,3,2,0,4,0,0,4,0,0,3,0,3,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var vm3 = [
	[3,3,0,0,3,3],
	[3,0,0,0,0,3],
	[0,0,4,4,0,0],
	[0,0,4,4,0,0],
	[3,0,0,0,0,3],
	[3,3,0,0,3,3]
];
renderGrid(vm1);

// build ascii map
function buildTerm(grid) {
	// pad grid to even rows
	var pad = 0;
	if(grid.length % 2 != 0) {
		if(pad) {	// pad top
			grid.push(Array(grid[0].length).fill(0));
		} else {	// pad bottom
			grid.unshift(Array(grid[0].length).fill(0));
		}
	}
	// render to ascii
	let result = [];
	for(y = 0; y < grid.length; y += 2) {
		let row = [];
		grid[y].forEach((bit1, x) => {
			let bit2 = grid[y + 1][x];
			if(bit1 == bit2) {
				//char = chalk.keyword(styles[5]).bgKeyword(styles[bit1])("+");
				row.push(chalk.hex(colors[styles[5]]).bgHex(colors[styles[bit1]])(sym[3]));
				//row.push(chalk.keyword(styles[5]).bgKeyword(styles[bit1])(sym[3]));
			} else {
				row.push(chalk.hex(colors[styles[bit1]]).bgHex(colors[styles[bit2]])(sym[1]));
				//row.push(chalk.keyword(styles[bit1]).bgKeyword(styles[bit2])(sym[1]));
			}
		});
		result.push(row);
	}
	return result;
}

// render
function renderGrid(grid) {
	buildTerm(grid).forEach((row, y) => {
		var string = "";
		row.forEach((char, x) => {
			string += char;
		});
		console.log(string);
	});
}
