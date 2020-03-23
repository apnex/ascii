#!/bin/bash

# find out about extended scii in nodejs
# console.log('\uD83D\uDE00');
#\u{1F4A9}

#VAL=2B # arrows
#VAL=25 # geometric
#VAL=28 # braille
VAL=28
for NUMBER in {0..255}; do
	NEW=""
	if [[ $NUMBER -lt 16 ]]; then
		NEW="0"
	fi
	HEX=$(printf "%X" ${NUMBER})
	printf "${VAL}${NEW}${HEX} : \u${VAL}${NEW}${HEX}\t"
	if [[ $((($NUMBER + 1) % 8)) == 0 ]]; then
		echo # new line
	fi
done
# 2500 - 257f
