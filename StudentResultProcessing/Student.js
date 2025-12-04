class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        const total = this.marks.reduce((sum, x) => sum + x, 0);
        return total / this.marks.length;
    }

    // Grade based on average
    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}



const s1 = new Student("Rahul", [95, 88, 92]);
const s2 = new Student("Anita", [70, 80, 65]);
const s3 = new Student("Mohan", [40, 55, 45]);

console.log(`Student: ${s1.name}, Average: ${s1.calculateAverage()}, Grade: ${s1.getGrade()}`);
console.log(`Student: ${s2.name}, Average: ${s2.calculateAverage()}, Grade: ${s2.getGrade()}`);
console.log(`Student: ${s3.name}, Average: ${s3.calculateAverage()}, Grade: ${s3.getGrade()}`);
