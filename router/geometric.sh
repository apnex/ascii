#!/bin/bash

# find out about extended scii in nodejs
# console.log('\uD83D\uDE00');
#\u{1F4A9}

NC='\033[0m' # no colour
BLACK='\033[0;30m' # black
RED='\033[0;31m' # red
GREEN='\033[0;32m' # green
ORANGE='\033[0;33m' # orange
BLUE='\033[0;34m' # blue
PURPLE='\033[0;35m' # purple
CYAN='\033[0;36m' # cyan
LIGHTGREY='\033[0;37m' # light grey
DARKGREY='\033[0;30m' # dark grey
LIGHTRED='\033[0;31m' # light red
LIGHTGREEN='\033[0;32m' # light green
YELLOW='\033[0;33m' # yellow
LIGHTBLUE='\033[0;34m'

#VAL=2B # arrows
#VAL=25 # geometric
#VAL=28 # braille
VAL=25
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
