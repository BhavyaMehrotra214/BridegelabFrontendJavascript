"use strict";   
const userName = "Bhavya";                // string
const userAge = 21;                       // number
const isStudent = true;                   // boolean
const marksArray = [85, 90, 78];          // array
const userProfile = { city: "Delhi" };    // object
const emptyValue = null;                  // null
let notAssigned;                          // undefined

const report = {
    userName: { value: userName, type: typeof userName },
    userAge: { value: userAge, type: typeof userAge },
    isStudent: { value: isStudent, type: typeof isStudent },
    marksArray: { 
        value: marksArray, 
        type: Array.isArray(marksArray) ? "array" : typeof marksArray 
    },
    userProfile: { 
        value: userProfile, 
        type: typeof userProfile 
    },
    emptyValue: { 
        value: emptyValue, 
        type: emptyValue === null ? "null" : typeof emptyValue 
    },
    notAssigned: { 
        value: notAssigned, 
        type: typeof notAssigned 
    }
};

console.table(report);
