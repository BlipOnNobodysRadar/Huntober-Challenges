/* 
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
*/
// P array of odd and even numbers mixed
// R array with even numbers in same index, odd numbers sorted ascending
// E above
// P filter a new array of odd numbers, sort that array, map over original array, if odd replace with sorted value popped

function sortArray(arr) {
  const oddNums = arr.filter((val) => val % 2 !== 0);
  oddNums.sort((a, b) => b - a);
  return arr.map((val) => (val % 2 === 0 ? val : oddNums.pop()));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
