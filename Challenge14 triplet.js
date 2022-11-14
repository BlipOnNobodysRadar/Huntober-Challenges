/* 

You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
// p: an array of 3 distinct numbers
// r: the index of the number whose value is between the other two numbers
// e: above
/* p: for(let i = 0; i < triplets.length; i++) {
  if(triplets[i] != Math.min(triplets) && triplets[i] != Math.max(triplets)) {
    return i;
  }
}*/

function gimme(triplet) {
  for (let i = 0; i <= triplet.length; i++) {
    if (
      triplet[i] != Math.min(...triplet) &&
      triplet[i] != Math.max(...triplet)
    ) {
      return i;
    }
  }
}
console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
