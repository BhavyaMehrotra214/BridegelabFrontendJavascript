// Parent Class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in the ${this.department} department.`;
    }
}

// Child Class
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return `${this.name} is managing the ${this.department} team.`;
    }
}


const e1 = new Employee("Rahul", "Sales");
const m1 = new Manager("Anita", "HR");

console.log(e1.work());   // Employee version
console.log(m1.work());   // Manager version (overrides)
