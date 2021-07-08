# To print to console
print("Hello world!")

# Global variable
title = "Welcome to programming"

def print_title():
    """
        Multi line comment:
        Prints the title to the console.
    """
    global title, name
    title = "Welcome to python programming"
    # TO create a global variable inside a function, you can use the global keyword in function.
    name = "Martin"
    print(title)

print('Global variable: '+title)
print_title()
print('Global variable after fun call: '+title)
print("Name: "+ name)

"""
Python Data types:
String  ->   v = "some text"
int     ->   n = 30
float   ->   f = 30.5
list   ->    a = ["A", "B", "C"]
tuple   ->   t = ("A", "B", "C)
set     ->   s = {"Jack", 30}
dict    ->   d = {"Name": "Jack", "Age": 30}
range   ->   r = range(6) -> 0 to 6

n = 30
# type is a predefined function in python to return data type of a variable
print(type(n)) #int

"""

# Casting

n = 40
n1 = str(n)
print(type(n1)) #str

"""
LIST:
- Allows duplicates, since the lists are indexed.
- Access an element -> name_of_list[index] e.g. list1[0]
- When you are trying to access the element beyond the range it will throw 'IndexError: list index out of range'
- length of the list: len(list1)
- Can store multiple data type values e.g. ["A", 30, "B"]
"""
list1 = ["A", 'B', 'C', "A", 60]
# Accessing the list element
print(list1[0])
list1.append("D")
print(list1)
print(type(list1))