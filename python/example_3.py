def xyz(x:int = None):
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
xyz("sdsd")