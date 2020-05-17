#!/usr/bin/env node

/*
var colors = {
	red: '#ff0000',
	yellow: '#ffff00',
	blue: '#0000ff'
};
const colors = require('./colors.json');
var nearestColor = require('./nearestColor.js').from(colors);


var vala = nearestColor('#a80000'); // => { name: 'red', value: '#f00', rgb: { r: 255, g: 0, b: 0 }, distance: 119 }
var valb = nearestColor('#ffe'); // => { name: 'yellow', value: '#ff0', rgb: { r: 255, g: 255, b: 0 }, distance: 238 }

console.log(JSON.stringify(vala, null, "\t"));
console.log(JSON.stringify(valb, null, "\t"));
*/

var colors = {
	'mBrown-0': 'd6c556',
	'mBrown-1': 'b79c40',
	'mBrown-2': 'a58038',
	'mBrown-3': '8f6b2d'
};
var styles = [
	'mBrown-0',
	'mBrown-1',
	'mBrown-2',
	'mBrown-3'
];
var canvas = [
	[0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0],
	[1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,2,2,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,2]
];
render(canvas);

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
	build(grid).forEach((row, y) => {
		var string = "";
		row.forEach((char, x) => {
			string += char;
		});
		console.log(string);
	});
}

