#!/usr/bin/env node
"use strict";
var asciichart = require ('./asciichart')
var clear = require('clear');

var maxWidth = 60;
var values = [];
function nextValue(current) {
	//values.push(Math.round (Math.random () * 20));
	values.push(current + Math.round (Math.random() * (Math.random() > 0.5 ? 2:-2)))
	if(values.length > maxWidth) {
		values.shift();
	}
	return values;
}

let current = 2;
var interval = setInterval(() => {
	let series = nextValue(current);
	let padding = '       ';
	current = series[0];
	if(series.length > 2) {
		clear();
		console.log(asciichart.plot(series, {
			height: 20,
			padding: padding,
			format: function(x) {
				return (padding + x.toFixed(2)).slice(-padding.length)
			}
		}));
	}
}, 100);

//clearInterval(interval)
