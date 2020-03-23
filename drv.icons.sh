#!/bin/bash

# find out about extended scii in nodejs
# console.log('\uD83D\uDE00');
#\u{1F4A9}
# COLOURS

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
LIGHTBLUE='\033[0;34m' # light blue
LIGHTPURPLE='\033[0;35m' # light purple
LIGHTCYAN='\033[0;36m' # light cyan
WHITE='\033[0;37m' # white

function corange {
	local STRING=${1}
	printf "${ORANGE}${STRING}${NC}"
}
function cgreen {
	local STRING=${1}
	printf "${GREEN}${STRING}${NC}"
}
function ccyan {
	local STRING=${1}
	printf "${CYAN}${STRING}${NC}"
}

function square3 {
	local A="\u250F"
	local B="\u2513"
	local D="\u2517"
	local C="\u251B"
	local H="\u2501"
	local V="\u2503"
	local S=" "
	#local X=$1
	#local Y=$2
	local X=$(($1 - 2))
	local Y=$(($2 - 2))

	local COUNTX=0
	local COUNTY=0
	Y=$(($Y + 1))
	while [ $COUNTY -le $Y ]; do
		case $COUNTY in
			0)
				printf "$A"
			;;
			${Y})
				printf "$D"
			;;
			*)
				printf "$V"
			;;
		esac
		while [[ $COUNTX -lt $X ]]; do
			printf "$H"
			COUNTX=$(($COUNTX + 1))
		done
		case $COUNTY in
			0)
				printf "$B"
			;;
			${Y})
				printf "$C"
			;;
			*)
				printf "$V"
			;;
		esac
		printf "\n"
		COUNTX=0
		COUNTY=$(($COUNTY + 1))
	done
}

function thin {
	TL="\u256D"
	TR="\u256E"
	BL="\u2570"
	BR="\u256F"
	H1="\u2500"
	V1="\u2502"
	printf "${TL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${TR}"
	echo
	printf "${V1}"
	printf "${V1}"
	printf "${V1}"
	printf "${V1}"
	printf "${V1}"
	echo
	printf "${BL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${BR}"
	echo
}

function thick1 {
	TL="\u256D"
	TR="\u256E"
	BL="\u2570"
	BR="\u256F"
	H1="\u2501"
	V1="\u2503"
	printf "${TL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${TR}"
	echo
	printf "${V1}"
	printf "${LIGHTRED}"
	printf "${V1}"
	printf "${V1}"
	printf "${V1}"
	printf "${NC}"
	printf "${V1}"
	echo
	printf "${BL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${BR}"
	echo
}

function thick2 {
	TL="\u250F"
	TR="\u2513"
	BL="\u2517"
	BR="\u251B"
	H1="\u2501"
	#V1="\u2503"
	V1="\u250B"
	printf "${TL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${TR}"
	echo
	printf "${V1}"
	printf "${GREEN}"
	printf "${V1}"
	printf "${V1}"
	printf "${V1}"
	printf "${NC}"
	printf "${V1}"
	echo
	printf "${BL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${BR}"
	echo
}
function thick3 {
	TL="\u256D"
	TR="\u256E"
	BL="\u2570"
	BR="\u256F"
	H1="\u2501"
	V1="\u2503"
	printf "${TL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${TR}"
	echo
	printf "${V1}"
	printf "${LIGHTRED}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${NC}"
	printf "${V1}"
	echo
	printf "${BL}"
	printf "${H1}"
	printf "${H1}"
	printf "${H1}"
	printf "${BR}"
	echo
}

function arrows1 {
	A1="\u2B9C"
	A2="\u2B9D"
	A3="\u2B9E"
	A4="\u2B9F"
	printf "${BLUE}"
	printf "  ${A2}  "
	echo
	printf "${A1}   ${A3}"
	echo
	printf "  ${A4}  "
	printf "${NC}"
	echo
}

function arrows2 {
	A1="\u2B9C"
	A2="\u2B9D"
	A3="\u2B9E"
	A4="\u2B9F"
	printf "${BLUE}"
	printf "  ${A4}  "
	echo
	printf "${A3}   ${A1}"
	echo
	printf "  ${A2}  "
	printf "${NC}"
	echo
}

function ethernet {
	TL="\u250F"
	TR="\u2513"
	BL="\u2517"
	BR="\u251B"
	H1="\u2501"
	V1="\u2503"
	V2="\u250B"
	SP=" "
	printf "${TL}${H1}${H1}${H1}${H1}${TR}${SP}"
	echo
	printf "${V1}${V2}${SP}${SP}${V2}${BL}${TR}"
	echo
	printf "${V1}${V2}${SP}${SP}${V2}${TL}${BR}"
	echo
	printf "${BL}${H1}${H1}${H1}${H1}${BR}${SP}"
	echo
}

function square1 {
	local A="\u250F"
	local B="\u2513"
	local D="\u2517"
	local C="\u251B"
	local H="\u2501"
	local V="\u2503"
	local S=" "
	printf "$A$H$B\n"
	printf "$D$H$C\n"
}

function square2 {
	local A="\u250F"
	local B="\u2513"
	local D="\u2517"
	local C="\u251B"
	local H="\u2501"
	local V="\u2503"
	local S=" "
	printf "$A$H$H$H$B\n"
	printf "$V$S$H$S$V\n"
	printf "$D$H$H$H$C\n"
}

function router {
	local A="\u250F"
	local B="\u2513"
	local D="\u2517"
	local C="\u251B"
	local H="\u2501"
	local V="\u2503"
	local RS="\u002F"
	local FS="\u005C"
	local S=" "
	printf "$A$H$H$H$H$H$B\n"
	printf "$V$FS$S$S$S$RS$V\n"
	printf "$V$RS$S$S$S$FS$V\n"
	printf "$D$H$H$H$H$H$C\n"
}

function shader {
	local A="\u2588"
	local B="\u2592"
	local C="\u2593"
	local S=" "
	printf "$A$A$A$A$A$A$A$A\n"
	printf "$A$B$B$B$B$B$B$A\n"
	printf "$A$B$B$B$B$B$B$A\n"
	printf "$A$B$B$B$B$B$B$A\n"
	printf "$A$A$A$A$A$A$A$A\n"
}

