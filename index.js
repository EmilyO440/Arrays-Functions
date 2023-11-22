

/* 
Question 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages [0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.
*/

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
const resultBeforeAddition = ages[ages.length - 1] - ages[0];
console.log("Result before addition:", resultBeforeAddition);
ages.push(34);
const resultAfterAddition = ages[ages.length - 1] - ages[0];
console.log("Result after addition:", resultAfterAddition);
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const averageAge = sum / ages.length;
console.log("Average age:", averageAge);
//

/* Question 2:Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
const averageLettersPerName = totalLetters / names.length;
console.log("Average number of letters per name:", averageLettersPerName);
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i];

  if (i < names.length - 1) {
    concatenatedNames += ' ';
  }
}

console.log("Concatenated names:", concatenatedNames);
//

/*
Question 3:How do you access the last element of a array?
*/
console.log("To access the last element of an Array, you can input various methods such as the length property, the slice() method, or the pop() method. With the pop() method, you must be careful because this command also removes the last element of the array and returns that element to the console." );
//

/*
Question 4: How do you access the first element of a array?
*/

console.log("To access the first element of an array, you can input various methods/ commads such as using array_values(), the reset() command, or the array_pop() command.");
//

/*
Question 5 & 6:Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
let nameLengths=[];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log("Name lengths:", nameLengths);
//

/*
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/


function concatenatedWord(word,n){
return word.repeat(n);
}

const result = (concatenatedWord('USA',3));
console.log(result);
//

/*
Question 8:Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/

function createFullName(firstName,lastName){
  const fullName = firstName + ' ' + lastName;
  return fullName;
}
const results = createFullName('Emily','OBrien');
console.log(results);
//

/*
Question 9:Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
*/
function isSumGreaterThan100(numbers) {

  const sum = numbers.reduce((acc, current) => acc + current, 0);


  return sum > 100;
}
const numberssArray = [30, 40, 35];
const resultss = isSumGreaterThan100(numberssArray);
console.log(resultss);
//

/*
Question 10:Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/
function calculateAverage(numbers){
  if(numbers.length===0){
    return 0;
  }
  const sum = numbers.reduce((acc, current) => acc + current, 0);

  const average = sum / numbers.length;

  return average;
}
const numbersArray = [10, 20, 30, 40, 50];
const resultsss = calculateAverage(numbersArray);
console.log(resultsss);
//

/*
Question 11:Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
*/
function compareAverages(array1, array2) {

  const average1 = array1.length > 0 ? array1.reduce((acc, current) => acc + current, 0) / array1.length : 0;
  const average2 = array2.length > 0 ? array2.reduce((acc, current) => acc + current, 0) / array2.length : 0;

  return average1 > average2;
}

const array1 = [10, 20, 30, 40, 50];
const array2 = [5, 15, 25, 35, 45];
const resultssss = compareAverages(array1, array2);
console.log(resultssss);
//

/*
Question 12:Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/
function willBuyDrink(isHotOutside, moneyInPocket){
  return isHotOutside && moneyInPocket > 10.50;
  isHot = True
  money = 15.75
}

result = willBuyDrink(isHot, money);

result(("I won't buy a drink."))