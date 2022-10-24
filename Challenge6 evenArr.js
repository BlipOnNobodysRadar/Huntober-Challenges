/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

P array of numbers containing some even and some odd numbers, and another number specifying the size of the array to return
R an array of size n containing the -last- even values in the original array
E given above
P filter original array into evens, return this array sliced at its length minus n
For more performance, loop through original array with a decrement beginning at the last index
let evenCounts = 0;
let evens = [];
for(let i = arr.length -1, i > 0; i--) {
  if(arr[i] % 2 === 0) {
    evens.push(arr[i]);
    evenCounts++
  }
  if(evenCounts = n) break;
}
return evens.reverse();
*/
function evenArr(arr, n) {
  // const evens = arr.filter((num) => num % 2 === 0);
  // return evens.slice(evens.length - n);
  let evenCounts = 0;
  let evens = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
      evenCounts++;
    }
    if (evenCounts === n) break;
  }
  return evens.reverse();
}
console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenArr([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenArr([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
