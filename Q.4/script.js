'use strict';

// Question Four

// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calcSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calcSalary() {
    return super.calcSalary() + super.calcSalary() * 0.2;
  }
}

const managerName = prompt('Input the managers name');
const managerDepartment = prompt(
  'From which department does the said manager work'
);
const basicSalary = Number(prompt('Input his basic salary'));

const manager = new Manager(managerName, basicSalary, managerDepartment);

const manager_salary = manager.calcSalary();

console.log(`${manager.name}'s annual salary is $${manager_salary}`);
