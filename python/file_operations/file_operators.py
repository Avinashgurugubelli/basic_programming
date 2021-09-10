import os
import json

from pathlib import Path


"""
    Open text modes:
    r - (READ) default value - open file for reading - it will throw an error
    a - (Append) - open file for appending - creates a new file if not exists
    w - (WRITE) - open file for writing, creates the file if not exists 
    x - (CREATE) - create a file in the path specified. -> throws an if the file exists already
"""

def delete(file_path):
    # One way using path lib module
    path = Path(file_path)
    if path.exists():
        path.rmdir()
    else:
        print('file not exists')

    # Second way using OS module.

    # if os.path.exists(file_path):
    #     os.remove(file_path)
    # else:
    #     print('file not exists')

def write(file_path, data, mode='a'):
    # file = open(file_name, mode=mode)
    # try:
    #     file.write(data)
    # except:
    #     file.close()
    dir_path = os.path.dirname(file_path)
    path = Path(dir_path)
    path.mkdir(parents=True, exist_ok=True)
    with open(file_path, mode=mode) as file:
        file.write(data)

    # if path.exists():
    #     with open(file_path, mode=mode) as file:
    #         file.write(data)
    # else:
    #     path.mkdir(parents=True)
    #     with open(file_path, mode=mode) as file:
    #         file.write(data)


def read(file_path):
    with open(file_path, 'r') as file:
        data = file.read()
        try:
            obj = json.loads(data)
            print(obj)
        except json.decoder.JSONDecodeError:
            print('Invalid file')
        except Exception as ex:
            print('some other exception occurred: '+ str(ex))

        # read line
        # data = file.readlines()
        # for line in data:
        #     print(line)


if __name__ == "__main__":
    # write("sample_file.txt", "Hello world ! ", 'w')
    # write("sample_file.txt", "welcome to programming world ! ", 'w')
    # write("..\\data\\sample_file.txt", "python is Awesome ! ")
    # read("..\\data\\sample_file.txt")
    # read("..\\data\\test.json")
    delete("..\\data\\test.json")


