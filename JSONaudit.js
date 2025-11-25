"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

class InvalidJSONError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidJSONError";
  }
}
class MissingKeyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingKeyError";
  }
}
class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

// Results containers
const cleanArray = [];       
const errorLog = [];         

// Audit loop
rawData.forEach((lineText, idx) => {
  const lineNumber = idx + 1;
  try {
    let obj;
    try {
      obj = JSON.parse(lineText);
    } catch (parseErr) {
      throw new InvalidJSONError("Invalid JSON format");
    }

    if (!obj.hasOwnProperty("user") || !obj.hasOwnProperty("age")) {
      throw new MissingKeyError("Missing required key(s): 'user' and/or 'age'");
    }

    // 3) Normalize age: convert to Number
    const ageNum = Number(obj.age);
    if (!Number.isFinite(ageNum) || Number.isNaN(ageNum)) {
      throw new InvalidAgeError(`Invalid age value: ${obj.age}`);
    }
    obj.age = ageNum;

    // Filter under-18 users (bonus)
    if (obj.age < 18) {
      console.log(`Line ${lineNumber}: user "${obj.user}" is under 18 (age=${obj.age}) — skipped.`);
      return;
    }

    // 5) If all good, push to cleanArray
    cleanArray.push(obj);
    console.log(`Line ${lineNumber}: Parsed OK →`, obj);

  } catch (err) {
    errorLog.push({
      line: lineNumber,
      raw: lineText,
      errorName: err.name || "Error",
      message: err.message
    });
    console.log(`Line ${lineNumber}: ERROR [${err.name}] → ${err.message}`);
  }
});

// Final summary report
console.log("\n===== JSON AUDIT SUMMARY =====");
console.log("Total lines processed:", rawData.length);
console.log("Valid entries (cleanArray):", cleanArray.length);
console.log("Errors found:", errorLog.length);

if (cleanArray.length) {
  console.log("\nClean entries:");
  cleanArray.forEach((e, i) => {
    console.log(`${i + 1}. user: ${e.user}, age: ${e.age}`);
  });
}

if (errorLog.length) {
  console.log("\nError log (with line numbers):");
  errorLog.forEach(err => {
    console.log(
      `Line ${err.line} → ${err.errorName}: ${err.message} -- raw: ${err.raw}`
    );
  });
}
console.log("===== END SUMMARY =====\n");
