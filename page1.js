<label id='page1.js'>JS4-Week 7</label>





/* Question 1:Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
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