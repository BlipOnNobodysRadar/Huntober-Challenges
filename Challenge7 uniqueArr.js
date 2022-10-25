/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4) 1 4 5 - 2 4 5 - 1 4 6 - 2 4 6
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

P an array of subarrays
R a number representing the amount of unique arrays possible when picking one number from subarrays
E above
P convert each subarray into a set,

looking at the test cases, I see a pattern where unique elements * unique elements in each gives the correct result
so, map through array and convert each subarray to a set, then reduce the new array of sets into the correct value by multiplying the length of each set * the accumulator

optimizations: the conversion from subarray to subset could be done inside of the .reduce function, removing the need to use .map() and potentially doubling the speed of the function

2 unique elements, 1 unique, 2 -> 4

*/

function solve(arr) {
  //first pass
  const unique = arr.map((subarr) => new Set(subarr));
  return unique.reduce((total, set) => set.size * total, 1);
}
console.log(solve([[1, 2], [4], [5, 6]])); //,4)
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ])
); //,4)
console.log(
  solve([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); //,8)
console.log(
  solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
  ])
); //,72)
