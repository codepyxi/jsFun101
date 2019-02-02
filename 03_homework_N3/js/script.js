'use strict';

// Function to get salary
function getSalary (){
  let salarytStr = document.getElementById('salary').value;
  let salary = Number(salaryStr);
  if (salaryCheck(salary)){
    return salary;
  }
  return 0;
}


// This function is called when the user clicks on the button
function calculate (){
  let salary = getSalary();
  if (salary > 0) {
    // return calculateTax(salary);
  }
  // return 0;
}


// Function to validate the type of salary
function salaryCheck (salary){
  if (salary === 'undefined') {
    alert('Please input a salary');
    return false;
  } else if (salary <= 0 || salary > 99999999) {
    alert('Please input a salary from 0 until $99,999,999');
    return false;
  } else if (salary === 'NaN'){
    alert('Please input a rational number');
    return false;
  }
  return true;
}

// This fuctions does the logical calculation
function calculateTax (salary) {
  let tax;

  if (salary >= 42705 && sal < 85405){
    tax = (salary - 42705) * 0.2;
  }
  else if (salary >= 85405 &&  salary < 103915) {
    tax = (salary - 85405) * 0.24 + (85405 - 42705) * 0.2;
  }
  else if (salary >= 103915) {
    tax = (85405 - 42705) * 0.2 +(103915 - 85405) * 0.24 + (salary - 103915) * 0.2575;
  }
  return tax;
}


function netIncome(salary, deductions){
  return salary - deductions;
}


let deductions = calculate();
document.getElementById("deductions").innerHTML = deductions;


let netIncome = getSalary() > 0 ? netIncome(getSalary(), deductions) : 0;
document.getElementById("net").innerHTML = netIncome;


// console.log(salary - deductions);
