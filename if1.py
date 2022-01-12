from cs50 import get_int, get_string
username = get_string("what's your name? :")
x = get_int(f"{username} , please inter a number as 'x' :")
y = get_int(f"{username} , please inter a number as 'y' :")
if x<y :
    print(f"dear {username} ; 'x' is less than 'y', on the other hand 'y' is bigger than 'x'!")
elif y>x :
    print(f"dear {username} ; 'y' is less than 'x', on the other hand 'x' is bigger than 'y'!")
else :
    print(f"dear {username} ; 'y' & 'x' are equal!")
