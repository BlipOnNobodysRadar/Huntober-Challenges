/*
Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
*/

// n^2
function arrayDiff(a, b) {
  let newArr = [];
  for (let val of a) {
    if (b.includes(val)) {
      continue;
    }
    newArr.push(val);
  }
  return newArr;
}
// concise
function arrayDiff(a, b) {
  return a.filter((v) => !b.includes(v));
}

// set can find value in const time
function arrayDiff(a, b) {
  let newSet = new Set(b); // O(n)
  a.filter((v) => !newSet.has(v)); // O(n) rather than O(n^2) becuase Set.prototype.has() is O(1) rather than O(n)
}
