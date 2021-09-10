
# predefined in Python
from _typeshed import Self
from abc import ABC, abstractmethod
from typing import List

class EmployeeBluePrint(ABC):

    @abstractmethod
    def get_total_salary(self):
        print("Abstract Total salary method called")
        pass

    @abstractmethod
    def print_details(self):
        pass

class Skill:
    def __init__(self, name: str, proficiency_level: int, last_used: int) -> None:
        self.name = name
        self.proficiency_level =proficiency_level
        self.last_used = last_used

    def __str__(self) -> str:
        return "{skill: {name: {}, proficiency_level: {}, last_used: {}}}".format(self.name, str(self.proficiency_level, self.last_used))


class EmployeeBase(EmployeeBluePrint):
    # static member
    __employee_counter = 0

    def __init__(self, name: str, skills: List[Skill] = None) -> None:
        self.id = EmployeeBase.get_employee_id()
        self.name = name
        self.skills = skills

        """
        * Aggregation -> HAS A Relation ship
        In Opps it is possible to derive a relationship b/w the classes when an OBJ of a class becomes the instance variable of another class.
        * ex: Employee HAS A skills
        * ex: Employee HAS A Bank account
        * ex: Car HAS A music player
        *
        """
        self.skills = skills

    @staticmethod
    def get_employee_id():
        EmployeeBase.__employee_counter += 1
        return EmployeeBase.__employee_counter

    def get_details(self):
        return "id: {}, Name: {}".format(self.id, self.name)

    def print_details(self):
        print(self.get_details())

    def get_total_salary(self):
        print("Abstract Total salary method called")
    
    """
     * Association: USES-A relationship
     When a OBJ of a class becomes the local variable or argument
     * ex: Employee USES an skill ob to add skillSet of employee.
     * ex: ATM USES an Account
     *
    """
    def add_skill(self, skill: Skill):
       self.skills.append(skill)
    
     

# Inheritance
class ContractEmployee(EmployeeBase):

    def __init__(self, name, skills: List[Skill] = None,   hourly_salary = 1000) -> None:
        super().__init__(name, skills)
        self.hourly_salary = hourly_salary

    def get_total_salary(self):
        return 30*self.hourly_salary*5
    
    # Method Over riding
    def print_details(self):
        details = super().get_details() + ", salary: {}, skills {}".format(self.get_total_salary(), self.skills)
        print(details)


class PerminantEmployee(EmployeeBase):

    def __init__(self, name, basic_salary = 5000) -> None:
        super().__init__(name)
        self.basic_salary = basic_salary

    def get_total_salary(self):
        return 30*self.basic_salary
    
     # Method Over riding
    def print_details(self):
        details = super().get_details() + ", salary: {}".format(self.get_total_salary())
        print(details)


if __name__ == "__main__":
    # e = EmployeeBase("Jack")
    # e.print_details()
    # e1 = EmployeeBase("Roy")
    # e1.print_details()
    pe_1 = PerminantEmployee("Martin")
    print("Perminant Employee 1 details: ")
    pe_1.print_details()

    pe_2 = PerminantEmployee("Max")
    print("Perminant Employee 2 details: ")
    pe_2.print_details()

    ce_1 = ContractEmployee("Raj")
    print("ContractEmployee Employee 1 details: ")
    ce_1.print_details()


    ce_2_skills = [Skill("Python", 4, 2021), Skill("C#", 3, 2019), Skill("Javascript", 5, 2021)]
    ce_2: ContractEmployee = ContractEmployee("santosh", ce_2_skills)
    print("ContractEmployee Employee 2 details: ")
    ce_2.print_details()
    ce_2.add_skill(Skill("Ruby", 4, 2021))

    # TypeError: Can't instantiate abstract class EmployeeBluePrint with abstract method get_total_salary
    # x: EmployeeBluePrint = EmployeeBluePrint()
    # x.get_total_salary()

    e: EmployeeBluePrint = ContractEmployee("Killer")
    e.get_total_salary()
    e.print_details()


