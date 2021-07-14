class Employee:

    def __init__(self, id, name, age):
        # double underscore define the private access specifier
        self.__id = id
        # no underscore -> public access specifier
        self.name = name
        # single underscore -> protected access specifier
        self._age = age

    def print_details(self):
        details = "id: {} Name: {} age: {}".format(
            self.__id, self.name, self._age)
        print(details)

    def get_id(self):
        return self.__id

    def set_id(self, id):
        self.__id = id

    # Getter
    @property
    def id(self):
        return self.__id

    # Setter
    @id.setter
    def id(self, id):
        self.__id = id


if __name__ == "__main__":
    # Class object creation
    e = Employee(1, "JACK", 30)
    e.print_details()

    # setting a value for a private member/ property
    # e._Employee__id = 50

    # accessing private property with setter to set a value
    e.id = 2

    # calling a function -> here function acting like a setter
    e.set_id(5)

    """
    Private properties can not be accessed outside the class,
    if you want to access define a getter or a public method

    e.g. __id is a private property of Employee class, so you can not access this in main method.
    print(e.__id) // Attribute error
    print(e.id) // -> this a getter and the Id value will be printed
    """
    print(e.id)
    # print(dir(e))
