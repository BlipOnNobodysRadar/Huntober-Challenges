/*
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, 
print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("Fizz Buzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
}

//P: A number.
// R: console log every integer up to that number or Fizz when divisible by 3 or Buzz when divisible by 5 or Fizz Buzz when divisible by both
// E
/*
E:
  FizzBuzz(5) -> 
  1
  2
  Fizz
  4
  Buzz
*/
//P
fizzBuzz(15);
fizzBuzz(5);
