#!/usr/bin/env node
const chalk = require('chalk');

const sym = {
	thin: [
		'\u{0020}', // ' '
		'\u{256D}', // '╭'
		'\u{256E}', // '╮'
		'\u{256F}', // '╯'
		'\u{2570}', // '╰'
		'\u{2500}', // '─'
		'\u{2502}'  // '│'
	],
	thick: [
		'\u{0020}', // ' '
		'\u{250F}', // '┏'
		'\u{2513}', // '┓'
		'\u{251B}', // '┛'
		'\u{2517}', // '┗'
		'\u{2501}', // '━'
		'\u{2503}'  // '┃'
	],
	port: [
		'\u{252B}', // '┫'
		'\u{2523}', // '┣'
		'\u{253B}', // '┻'
		'\u{2533}'  // '┳'
	]
};
const thick = [
		'\u{0020}', // ' '
		'\u{250F}', // '┏'
		'\u{2513}', // '┓'
		'\u{251B}', // '┛'
		'\u{2517}', // '┗'
		'\u{2501}', // '━'
		'\u{2503}', // '┃'
		'\u{252B}', // '┫'
		'\u{2523}', // '┣'
		'\u{253B}', // '┻'
		'\u{2533}', // '┳'
		'\u{005B}', // '['
		'\u{005D}', // ']'
		'\u{254B}', // '╋'
		'\u{25C0}', // '◀'
		'\u{25B6}'  // '▶'
];
const thin = [
		'\u{0020}', // 0 ' '
		'\u{256D}', // 1 '╭'
		'\u{256E}', // 2 '╮'
		'\u{256F}', // 3 '╯'
		'\u{2570}', // 4 '╰'
		'\u{2500}', // 5 '─'
		'\u{2502}', // 6 '│'
		'\u{252B}', // 7 '┫'
		'\u{2523}', // 8 '┣'
		'\u{253B}', // 9 '┻'
		'\u{2533}'  // 10 '┳'
];
var sr = [
	[1,5,5,5,2],
	[6,14,5,15,8],
	[4,5,10,5,3]
];
var sl = [
	[1,5,5,5,2],
	[7,14,5,15,6],
	[4,5,10,5,3]
];
var vline = [
	[0,0,6,0,0],
	[0,0,6,0,0],
	[0,0,6,0,0]
];
var hline = [
	[0,0,0,0,0],
	[5,5,5,5,5],
	[0,0,0,0,0]
];
var rtl = [
	[1,5,9,5,2],
	[7,11,13,12,6],
	[4,5,5,5,3]
];
var router = [
	[1,5,5,5,2],
	[7,6,6,6,8],
	[4,5,5,5,3]
];
var rtr = [
	[1,5,9,5,2],
	[6,11,13,12,8],
	[4,5,5,5,3]
];
var machine = [
	[1,5,9,5,2],
	[6,6,6,6,6],
	[4,5,5,5,3]
];
var firewall = [
	[1,5,9,5,2],
	[6,6,15,6,6],
	[4,5,10,5,3]
];

function getPos(cell) {
	return {
		x: cell.x * 5,
		y: cell.y * 3
	}
}

var canvas = [];
function write(char, pos) {
	canvas[pos.y][pos.x] = char;
}

function draw(spec) {
	// dimension cells first
	let setx = [];
	let sety = [];
	spec.forEach((icon) => {
		setx.push(icon.pos.x);
		sety.push(icon.pos.y);
	});
	let myx = Math.max(...setx);
	let myy = Math.max(...sety);
	let height = myy * 3 + 3;
	let width = myx * 5 + 5;

	// dimension rows
	for(let i = 0; i < height; i++) {
		canvas.push(new Array(width).fill('\u{0020}')); // fill with spaces
	}

	// translate icons
	spec.forEach((item) => {
		let pos = getPos(item.pos);
		item.icon.forEach((row, y) => {
			row.forEach((char, x) => {
				write(char, {
					x: pos.x + x,
					y: pos.y + y,
				});
			});
		});
	});

	// render
	canvas.forEach((row) => {
		console.log(row.join(''));
	});
}

function getIcon(icon, color = 'green') {
	let map = [];
	icon.forEach((row) => {
		let thisRow = [];
		map.push(thisRow);
		row.forEach((idx) => {
			thisRow.push(chalk.keyword(color)(thick[idx]));
		});
	});
	return map;
}

var diag = [
	{
		icon: getIcon(machine, 'green'),
		pos: {x:1, y:2}
	},
	{
		icon: getIcon(firewall, 'red'),
		pos: {x:1, y:1}
	},
	{
		icon: getIcon(sr, 'lightgreen'),
		pos: {x:1, y:0}
	},
	{
		icon: getIcon(hline, 'lightgreen'),
		pos: {x:2, y:0}
	},
	{
		icon: getIcon(sl, 'lightgreen'),
		pos: {x:3, y:0}
	},
	{
		icon: getIcon(rtr, 'red'),
		pos: {x:3, y:1}
	},
	{
		icon: getIcon(router, 'red'),
		pos: {x:4, y:1}
	},
	{
		icon: getIcon(rtl, 'red'),
		pos: {x:5, y:1}
	},
	{
		icon: getIcon(sr, 'lightgreen'),
		pos: {x:5, y:0}
	},
	{
		icon: getIcon(hline, 'lightgreen'),
		pos: {x:6, y:0}
	},
	{
		icon: getIcon(sl, 'lightgreen'),
		pos: {x:7, y:0}
	},
	{
		icon: getIcon(rtr, 'red'),
		pos: {x:7, y:1}
	},
	{
		icon: getIcon(router, 'red'),
		pos: {x:8, y:1}
	},
	{
		icon: getIcon(rtl, 'red'),
		pos: {x:9, y:1}
	},
	{
		icon: getIcon(sr, 'lightgreen'),
		pos: {x:9, y:0}
	},
	{
		icon: getIcon(hline, 'lightgreen'),
		pos: {x:10, y:0}
	},
	{
		icon: getIcon(sl, 'lightgreen'),
		pos: {x:11, y:0}
	},
	{
		icon: getIcon(rtr, 'red'),
		pos: {x:11, y:1}
	},
	{
		icon: getIcon(router, 'red'),
		pos: {x:12, y:1}
	},
	{
		icon: getIcon(rtl, 'red'),
		pos: {x:13, y:1}
	},
	{
		icon: getIcon(sr, 'lightgreen'),
		pos: {x:13, y:0}
	},
	{
		icon: getIcon(hline, 'lightgreen'),
		pos: {x:14, y:0}
	},
	{
		icon: getIcon(sl, 'lightgreen'),
		pos: {x:15, y:0}
	},
	{
		icon: getIcon(firewall, 'red'),
		pos: {x:15, y:1}
	},
	{
		icon: getIcon(machine, 'green'),
		pos: {x:15, y:2}
	}
];

draw(diag);
