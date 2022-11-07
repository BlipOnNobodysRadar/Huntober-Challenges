/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

p: an array that is a mixed ordered sequence of numbers missing one number
r: If missing a number, the missing number, else 0

p: n^2 solution 
function findDeletedNumber(arr, mixArr) {
  for(let num of arr) {
    if (!mixArr.includes(num)) return num;
  }
  return 0;
}
works but n squared is bad. Since arr of full seq is provided, can find the difference between the two
by using .reduce() to sum the values in each and subtracting the sum of the mixedArr from the original arr

*/
// O(2n) solution
function findDeletedNumber(arr, mixedArr) {
  return (
    arr.reduce((sum, num) => sum + num, 0) -
    mixedArr.reduce((sum, num) => sum + num, 0)
  );
}
