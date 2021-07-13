# Python function

def print_welcome():
    print("Welcome to programming")

# Function with parameters


def print_name(name, age=None):
    if age:
        print("Hi my name is: " + name + " and my age is: " + str(age))
    else:
        print("Hi my name is: " + name)


def print_values(*args):
    print(args[2])

# pass is a predefined key word used to suppress empty function error
def some_function():
    pass

# Return type function
def my_func():
    return "ABC"



"""
Anonymous function / Lambda functions

Syntax:
-------
lambda arguments : expresssion

ex: v = lambda a,b : a+b

which is equivalent to

def v(a, b): a+b

"""
v = lambda a,b : a+b 

print(v(5, 2))

def fun(n):
    return lambda i: n*i

print(fun(10)(2))

# String formatting

age = 50
msg = "Hi my name is {} and My age is {}"
print(msg)
print(msg.format("Avinash", ""))

# Filling dynamic values using index numbers
msg2 = "His My Name is {0}. {0} is {1} years old"
print(msg2.format("Jack", 30))

# Filling dynamic values using named index
msg3 = "His My Name is {name}. and i am working in {company}"
print(msg3.format(name= "Avinash", company="XYS"))

       
