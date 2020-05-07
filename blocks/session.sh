#!/bin/bash

while true; do
	p1=$p2;
	p2=$(clear; netstat -n -a);
	dwdiff -y "\010" -1 -c <(echo "$p1") <(echo "$p2");
	sleep 1;
done
