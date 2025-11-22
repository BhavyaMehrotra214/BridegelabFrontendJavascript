function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);   
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const s1 = new Student("Bhavya", "Computer Science");

s1.showName();    
s1.showBranch();  
