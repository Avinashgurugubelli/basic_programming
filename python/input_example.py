# Filling dynamic values using named index
msg3 = "His My Name is {name}. and i am working in {company}"

if __name__ == "__main__":
    # User input
    name = input("please enter your name: ")
    password = input("please enter your password: ")
    if name and password:
       print(msg3.format(name= "Avinash", company="XYS"))