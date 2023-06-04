#!/bin/bash

# Opening the file in filename variable
filename='users.txt'

# Assigning the number of people who came, to various variables
Kishkindha=0
Madra=0
Usinara=0
Heheya=0
n=1

# Using a while loop to read the file line by line

while read -r line; do

# Making userId variable have the userId part of the lines read
    userId=$(cut -d "=" -f 2 <<< "$line")

    # Comparing the userId with the one asked
    if (( userId == 553)); then

    # Counting
        Kishkindha=$((Kishkindha+1))
    elif (( userId == 828 ));then
        Madra=$((Madra+1))
    elif (( userId == 723 ));then
        Usinara=$((Usinara+1))
    elif (( userId == 698 ));then
        Heheya=$((Heheya+1))
    fi

    # Loop increment
    n=$((n+1))
done < "$filename"

# Printing the output
echo "From Kishkindha Kingdom: $Kishkindha people came"
echo "From Madra Kingdom: $Madra people came"
echo "From Usinara Kingdom: $Usinara people came"
echo "From Heheya Kingdom: $Heheya people came"