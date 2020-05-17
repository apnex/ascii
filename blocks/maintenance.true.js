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
	'mGrey-200',
	'mGrey-600',
	'mGrey-400',
	'mYellow-500',
	'mYellow-900'
];

// grid
var frame1 = [
	[1,1,1,1,1,1,1,1,1,1],
	[1,2,2,2,2,2,2,2,2,1],
	[1,2,1,1,1,1,1,1,2,1],
	[1,2,2,2,2,2,2,2,2,1],
	[0,0,0,0,0,0,0,0,0,0],
	[0,3,3,4,4,3,3,4,4,0],
	[0,3,4,4,3,3,4,4,3,0],
	[0,4,4,3,3,4,4,3,3,0],
	[0,0,0,0,0,0,0,0,0,0],
	[1,2,3,3,3,3,3,3,2,1],
	[1,2,3,3,3,3,3,3,2,1],
	[1,2,3,3,3,3,3,3,2,1],
	[1,2,3,3,3,3,3,3,2,1],
	[1,1,1,1,1,1,1,1,1,1]
];

//render(merge(frame1, frame2));
render(frame1);

// build ascii map
function merge(fr1, fr2, ax, ay) {
	let mx = Math.floor(fr2[0].length / 2);
	let my = Math.floor(fr2.length / 2);
	if(typeof(ax) == 'undefined') { // default left/top
		ax = mx;
		ay = my;
	}
	let sx = ax - mx;
	let sy = ay - my;
	let ex = sx + (fr2[0].length - 1);
	let ey = sy + (fr2.length - 1);
	let frame = [];
	for(y = 0; y < fr1.length; y++) {
		let row = [];
		fr1[y].forEach((bit1, x) => {
			let bit = bit1;
			if(y >= sy && y <= ey) {
				if(x >= sx && x <= ex) {
					let bit2 = fr2[y - sy][x - sx];
					if(bit2 > 0) { // not 0
						bit = bit2;
					}
				}
			}
			row.push(bit);
		});
		frame.push(row);
	}
	return frame;
}

// build ascii map
function build(grid) {
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
				row.push(chalk.hex(colors[styles[1]]).bgHex(colors[styles[bit1]])(sym[3]));
			} else {
				row.push(chalk.hex(colors[styles[bit1]]).bgHex(colors[styles[bit2]])(sym[1]));
			}
		});
		result.push(row);
	}
	return result;
}

// render
function render(grid) {
	build(grid).forEach((row, y) => {
		var string = "";
		row.forEach((char, x) => {
			string += char;
		});
		console.log(string);
	});
}
