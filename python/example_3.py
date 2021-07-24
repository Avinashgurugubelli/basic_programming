def xyz(x: int = None):
    try:
        if x < 0:
            raise Exception("Only Positive numbers allowed")
        if x == 0:
            raise Exception("Zero not allowed")
        print(x)
    except TypeError:
        print("Type error occurred")
    except:
        raise Exception("Some Exception occurred")
    finally:
        print("Finally executed")

# xyz(10)
# xyz(-20)
# xyz(0)
# xyz("sdsd")

# LIST comprehension


names = ["a", "b", "c", "d"]

new_names = []

# for name in names:
#     if "a" not in name:
#         new_names.append(name)

# print(new_names)

# The same above thing (extracting new names) can be done using list comprehension
# List comprehension: [expression for item in [iteratable list] if condition]

new_names = [name for name in names if name != "a"]

print(new_names)
