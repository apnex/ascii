#!/usr/bin/env node
const colors = {
	blue: [34, 89],
	yellow: [33, 89],
	red: [31, 89],
	cyan: [36, 89],
	green: [32, 89],
	magenta: [35, 89],
	white: [37, 89],
	gray: [30, 89],
	redBright: [91, 39],
	greenBright: [92, 39],
	yellowBright: [93, 39],
	blueBright: [94, 39],
	magentaBright: [95, 39],
	cyanBright: [96, 39],
	whiteBright: [97, 39],
	bgBlack: [40, 49],
	bgRed: [41, 49],
	bgGreen: [42, 49],
	bgYellow: [43, 49],
	bgBlue: [44, 49],
	bgMagenta: [45, 49],
	bgCyan: [46, 49],
	bgWhite: [47, 49],
	bgBlackBright: [100, 49],
	bgRedBright: [101, 49],
	bgGreenBright: [102, 49],
	bgYellowBright: [103, 49],
	bgBlueBright: [104, 49],
	bgMagentaBright: [105, 49],
	bgCyanBright: [106, 49],
	bgWhiteBright: [107, 49]
}
const styles = {
	reset: [0, 0],
	bold: [1, 22],
	dim: [2, 22],
	italic: [3, 23],
	underline: [4, 24],
	inverse: [7, 27],
	hidden: [8, 28],
	strikethrough: [9, 29]
}

//const { colors, styles } = require("./cs");

class nzu {
	constructor() {
		this.str = [];
		const ref = Object.assign({}, colors, styles);
		const all = Object.keys(ref);
		all.forEach(d => {
			const obj = {
				[d]: {
					get() {
						this.str.push(ref[[d]]);
						const self = this;
						const b = function(arg) {
							const reset = "\x1b[" + styles.reset[0] + "m";
							for (var d of self.str.reverse())
							arg = "\x1b[" + d[0] + "m" + arg + "\x1b[" + d[1] + "m";
							self.str = [];
							return arg + reset;
						};
						b.__proto__ = this;
						return b;
					}
				}
			};
			Object.defineProperties(nzu.prototype, obj);
		});
	}
}

//module.exports = new nzu();
//const nzu = require('nzu')

const anzu = new nzu();
console.log(anzu.blue("nnamdi")) // outpts blue `nnamdi`
console.log(anzu.bold.yellow("chidume")) // outputs bold yellow `chidume`
