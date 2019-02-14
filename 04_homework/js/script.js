'use strict'

// let myArray = [4, 12, 3,-32];
let myArray = [];
let newArray = [];

function validateString(str){
  let check = (str === '') ? false : true;
  return check;
}

function push() {
  let value = document
  .querySelector('#myId')
  .value;

  if (validateString(value)) {
    myArray.push(value);
    showArray();
    document.getElementById('myId').value = '';
  }else{
    document.getElementById("userMessage").innerHTML = "No empty string. Try to enter something at least!";
  }
}

function showArray(){
  showFancyArray();
  document.querySelector('#myList')
    // .innerHTML = myArray.toString(); // whatever what in the .innerHTML will be rewritten

    // .innerHTML = myArray.join('---');

    // if I want to show it as an array
    .innerHTML =
    '[' + myArray.join(',') + ']';
}


function pop() { // popping the last element of the array
  let value = document
  .querySelector('#myId')
  .value;
  // console.log(value);
  myArray.pop(value);
  // console.log(myArray);
  showArray();
}


function shift() {
    myArray.shift();
    showArray();
}


//   unshift --> Add new items to the beginning of an array
function unshift() {
  let value = document
  .querySelector('#myId')
  .value;
  if (validateString(value)){
    myArray.unshift(value);
    showArray();
    document.getElementById('myId').value = '';
  } else{
    document.getElementById("userMessage").innerHTML = "No empty string. Try to enter something at least!";
  }
}


function reverse(){
  myArray.reverse();
  showArray();
}

// TEACHER ANSWER:
function slice(){
  let secondArray = myArray.slice(1, myArray.length - 1);
  showSecondArray(showSecondArray);
}


function showSecondArray (input){
  document.querySelector('#mySubArray')
    .innerHTML =
    '[' + input.join(',') + ']';
}

// pass 1 and -1
// myArray.lenght - 1

function sort(){
  myArray.sort(compareNumbers);
  showArray();
}


function compareNumbers (a, b){
  if (a < b) {
    return -1;
  }


  if (a > b) {
    return 1;
  }
  return 0;
}

showArray(); // that way everytime I refresh my array it will show it.


// function sortMyFancyList() {
//   document.querySelector('#myFancyList')
//     .innerHTML =
//     '<li>'
//     + for
//     + '<li>';
//   for(#)
//   myArray.sort(compareNumbers);
//   showArray();
//   }
// }


function showFancyArray(){
  // HARD CODED VALUES
  // document.querySelector('#myFancyList')
  // .innerHTML = text;
  let text = '';
  for (let i = 0; i < myArray.length; i++) {
    // myArray[i];
    text += '<li>' + myArray[i] + '</li>\n';
    console.log(text);
  }
}
showArray();
showFancyArray();


// DEMO
var array1 = ['a', 'b', 'c'];
var str = '';

function create(element){
  str += '<li>' + element + '</li>';
}

array1.forEach(create);

console.log(str);
