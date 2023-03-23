//CHALLANGE 1
//marks input
let marks = prompt("Enter marks")
//declaring grading creteria 
 if (marks > 100) 
  alert("Input value cannot be greater than 100.");
else if (marks < 0) 
  alert("Input value cannot be less than 0.");
else if (marks >= 79) {
    console.log('A');
} else if (marks >=60 && marks < 79){
    console,loggg('B');
} else if (marks >= 49 && marks <59){
    console.log('C');
} else if ( marks >= 40 && marks < 49){
    console.log('D');
} else if (marks <40){
    console.log('E');
}
// giving output to the user
console.log(marks);


//CHALLANGE 2
// input speed of car
let speed = prompt("Enter speed")
// speed limit in km/h
const speedLimit = 70; 
// the number of km equivalent to a demerit point
const kmPerDemeritPoint = 5; 
let demeritPoints = 0;
if (speed <= speedLimit) {
  console.log("Ok");
} else {
  // calculating the number of demerit points depending on the speed
  demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Demerit points: ${demeritPoints}`);
  }
}

//CHALLANGE 3
// DefinING the tax, NHIF, and NSSF rates (above 32333 basic salary)
const TAX_RATE = 0.25
const NHIF_RATE = 0.02
const NSSF_RATE = 0.12

//the user's inputs for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefit: "));

//Calculating the gross salary
const grossSalary = basicSalary + benefits;

// Calculating the tax, NHIF, and NSSF deductions 
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculating the net salary 
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

// giving outputs
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${taxDeduction}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Net Salary: ${netSalary}`);