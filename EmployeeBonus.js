"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonuses(empList) {
  try {
    empList.forEach((emp, index) => {
      // Debug check – ensure required properties exist
      if (!emp.name || !emp.salary || !emp.years) {
        throw new Error(`Missing property in employee at index ${index}`);
      }

      const salary = Number(emp.salary);
      const years = Number(emp.years);

      // Debug logs for checking conversions
      console.log(`Converted Salary:`, salary, `Converted Years:`, years);

      // Validation – check if conversion failed
      if (isNaN(salary) || isNaN(years)) {
        throw new Error(`Invalid number conversion for ${emp.name}`);
      }

      // Bonus calculation
      let bonus;
      if (years > 3) {
        bonus = salary * 0.10;
      } else {
        bonus = salary * 0.05;
      }

      console.log(
        `Employee: ${emp.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus}`
      );
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Run the function
calculateBonuses(employees);
