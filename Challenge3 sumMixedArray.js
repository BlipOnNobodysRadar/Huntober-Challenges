/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
*/

/* PREP
  Parameters: an array containing entries that are either numbers OR string representation of numbers
  Return: a single number representing the sum of all the numerical values of elements in the array
  Example: ['5',6,'8'] should sum up to 19.
  Psuedocode:
    reduce the initial array to a single sum, within the reduce function coerce each value to a number,
    return the sum
*/

function sumMix(array) {
  return array.reduce((sum, value) => Number(value) + sum, 0);
}
console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix(["5", 6, "8"]));
