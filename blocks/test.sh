#!/bin/bash

#color=220
#fgbg=48
#printf "\e[${fgbg};5;%sm  %3s  \e[0m" $color $color
#echo
#echo -e "\033[38;5;200mTEST\033[0m"
#echo -e "\033[38;10mTEST\033[0m"
echo -e "\033[34mHello World\033[0m"
echo

echo -e "\033[38;5;82mHello \033[38;5;198mWorld"

# 48 Background
# 38 Foreground
printf "\e[38;5;200m\e[48;5;10m TEST \e[0m"
echo

#printf "\u001b[102mHello world!\u001b[49m\r\n"
#printf "\u001b[38;5;165mHello world!\u001b[39m\r\n"
#printf "\u001b[38;2;171;205;239mHello world!\u001b[39m\r\n"
printf "\e[102mHello world!\e[49m\r\n"
#printf "\e[38;5;165mHello world!\u001b[39m\r\n"
#printf "\e[38;2;171;205;239mHello world!\u001b[39m\r\n"
