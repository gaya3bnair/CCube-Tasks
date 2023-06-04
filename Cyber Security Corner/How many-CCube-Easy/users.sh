#!/bin/bash
function users(){
file=users.txt
while IFS= read -r $file; do
    userId=$(tr -cd [:digit:] <<< $line)
    if [ "$userId" = "553" ]||[ "$userId" = "828" ] || [ "$userId" = "723" ] || [ "$userId" = "698" ];
    then
        echo $(cut -d "=" -f 1 $line)
    fi
done < $file

}