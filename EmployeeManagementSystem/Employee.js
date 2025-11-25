class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; 
    }

    // Annual salary = monthly salary × 12
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus % to monthly salary
    applyBonus(percent) {
        const bonusAmount = this.salary * (percent / 100);
        this.salary = this.salary + bonusAmount;
    }
}
const employees = [
    new Employee(1, "Aarav", "HR", 35000),
    new Employee(2, "Bhavya", "Engineering", 65000),
    new Employee(3, "Riya", "Marketing", 42000),
    new Employee(4, "Kabir", "Finance", 50000),
    new Employee(5, "Manya", "Sales", 30000),
];

// Apply bonus to all employees (optional demo)
employees.forEach(emp => emp.applyBonus(10)); // 10% bonus


console.log("Annual Salaries of Employees:");
employees.forEach(emp => {
    console.log(
        `ID: ${emp.id}, Name: ${emp.name}, Annual Salary: ₹${emp.getAnnualSalary()}`
    );
});


const totalPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log("\nTotal Annual Payout of the Company: ₹" + totalPayout);
