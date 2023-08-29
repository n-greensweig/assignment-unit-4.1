console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Noah'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
console.log(multiplyThree(5, 7, 9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isPositive 16', isPositive(16));
console.log('isPositive -16', isPositive(-16));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  let result = array.pop();
  return result;
}
let arr = [0, 1, 2, 3];
console.log(getLast(arr));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let containsValue = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      containsValue = true;
    }
  }
  return containsValue;
}
let strArr = ['dog', 'test', 'cat'];
console.log(find('test', strArr));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstLetter = string.substr(0, 1);
  let letterMatch = false;
  if (letter.toUpperCase() === firstLetter.toUpperCase()) {
    letterMatch = true;
  }
  return letterMatch;
}
console.log(isFirstLetter('h', 'hello'));

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  let sum = 0;
  // TODO: loop to add items
  /* .reduce() version */
  // let newArr = arr.reduce((acc, currentVal) => acc + currentVal, 0);
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    sum += arr[i];
  }
  // TODO: return the sum
  return sum;
}

let nums = [2, 5, 3, 6, 4, 10, 5];
console.log(sumAll(nums));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(arrIn) {
  let posArr = [];
  arrIn.forEach(element => {
    if (element > 0) {
      posArr.push(element);
    }
  });
  return posArr;
}
console.log(allPositive(nums));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
