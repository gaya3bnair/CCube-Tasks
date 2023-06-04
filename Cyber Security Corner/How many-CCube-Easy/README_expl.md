Was tasked with finding how many people from a particular region gathered to Janakpur for Sita Mata's swayamvar. This was to be done in an .sh file.
The data could be read from the users.txt file in the same directory. We could use a simple while loop to read the file line by line.
" while read -r line; do " was used for reading line by line
Saved the userId in each line to a variable userId by using the cut command
Then included if -elif ladder for checking various conditions
Finally printed the output using echo

For this to work in terminal we have to give permission using the chmod command
type:    chmod +x users.sh 
