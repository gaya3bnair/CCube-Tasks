import random
name=input("How may I address you?\t")
lower_limit=int(input("Would you mind telling me the lower limit of the range where you want the number to be present?\n"))
upper_limit=int(input("What about the upper limit?\n"))
number=random.randint(lower_limit,upper_limit)
points=100
print("You have 100 points currently")
flag=0
while(points!=0):
    guess=int(input("What do you think the random number is?\t"))
    if(guess==number):
        flag=1
        print("Congrats you have guessed the right number! You have scored "+str(points)+" points")
        break
    else:
        points-=5
        if(guess>number):
            indication="too high"
        else:
            indication="too low"
        print("The guess is "+indication+". The points you have remaining are: "+str(points))
if(flag==0):
    print("You have zero points left and hence you have lost. The correct answer was "+str(number))
