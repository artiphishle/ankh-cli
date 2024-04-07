#!/bin/bash

# $(shopt -s glob)

function clearLogs(){
printf "\n 🚮 1. Clear\n"

# Clear ASL logs
printf "\n1.1 Clear ASL"

local ASL_DIR="/private/var/log/asl/"
$(sudo rm -f /private/var/log/asl/*.asl)
}

clearLogs

exit 0
