class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);  
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const s1 = new Student("Bhavya", "Computer Science");

s1.showName();   
s1.showBranch(); 




// Showing SAME behavior using Prototype Version

// Parent constructor
function PersonProto(name) {
    this.name = name;
}

PersonProto.prototype.showName = function() {
    console.log("Name:", this.name);
};

function StudentProto(name, branch) {
    PersonProto.call(this, name); 
    this.branch = branch;
}

// Inherit prototype
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

const s2 = new StudentProto("Devanshi", "IT");

s2.showName();    
s2.showBranch();  
