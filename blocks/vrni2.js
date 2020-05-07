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
	'mLight-Green-300',
	'mLight-Green-600',
	'mLight-Green-900',
	'mLight-Blue-300',
	'mLight-Blue-600',
	'mLight-Blue-900',
	'mRed-300',
	'mRed-600',
	'mRed-900',
	'mOrange-300'
];

// grid
var frame1 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var frame2 = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,1,0,0,0,1,0,0,0,0],
	[5,0,0,0,1,0,2,0,1,0,0,0,0],
	[5,0,0,0,1,0,2,0,1,0,0,0,0],
	[0,0,0,0,1,0,0,0,1,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var frame2 = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,1,0,0,0,1,0,0,0,0],
	[5,0,0,0,1,0,2,0,1,0,0,0,0],
	[5,0,0,0,1,0,2,0,1,0,0,0,0],
	[0,0,0,0,1,0,0,0,1,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0]
];


var screen = mergeFrame(frame1, frame2);



var icon = [
	[4,4,4],
	[4,6,4],
	[4,4,4]
];
//var newscreen = placeFrame(screen, icon, 3, 3);
var newscreen = placeFrame(screen, icon);
render(newscreen);


// build ascii map
function placeFrame(fr1, fr2, ax, ay) {
	let midx = Math.floor(fr2.length / 2);
	let midy = Math.floor(fr2[0].length / 2);
	if(typeof(ax) == 'undefined') {
		ax = midx;
		ay = midy; 
	}
	let startx = ax - midx;
	let starty = ay - midy;
	let endx = startx + (fr2.length - 1);
	let endy = starty + (fr2[0].length - 1);

	let frame = [];
	for(y = 0; y < fr1.length; y++) {
		let row = [];
		fr1[y].forEach((bit1, x) => {
			let bit = bit1;
			if(y >= starty && y <= endy) {
				if(x >= startx && x <= endx) {
					bit = fr2[y - starty][x - startx];
				}
			}
			row.push(bit);
		});
		frame.push(row);
	}
	return frame;
}

// build ascii map
function mergeFrame(fr1, fr2) {
	// layer frame2 on top of frame1
	let frame = [];
	for(y = 0; y < fr1.length; y++) {
		let row = [];
		fr1[y].forEach((bit1, x) => {
			let bit2 = fr2[y][x];
			if(bit2 > 0) {
				row.push(bit2);
			} else {
				row.push(bit1);
			}
		});
		frame.push(row);
	}
	return frame;
}

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
				row.push(chalk.hex(colors[styles[5]]).bgHex(colors[styles[bit1]])(sym[3]));
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
	buildTerm(grid).forEach((row, y) => {
		var string = "";
		row.forEach((char, x) => {
			string += char;
		});
		console.log(string);
	});
}
