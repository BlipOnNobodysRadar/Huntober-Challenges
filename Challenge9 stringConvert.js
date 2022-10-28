/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
P: a string of characters, some duplicate, some not
R: a new string in the order of the recieved characters with character replaced by '(' if it appears only once, and '(' if multiple. Case does not matter.
E: RyanNa -> "(())))"
P: Info needed: is character duplicate (across case)? Could do a dictionary, key is letter. convert string to lowercase first. loop through string,
object stores count. Then one more loop (map) to convert, if[key] > 1 ')' else '('
*/

function convert(str) {
  let count = {};
  const splitStr = str.toLowerCase().split("");
  splitStr.forEach((letter) =>
    count[letter] ? (count[letter] = count[letter] + 1) : (count[letter] = 1)
  );
  return splitStr.map((letter) => (count[letter] > 1 ? ")" : "(")).join("");
}
console.log(convert("RyanNa")); // "(())))"
console.log(convert("din")); // "((("
console.log(convert("recede")); // "()()()"
console.log(convert("Success")); // ")())())"
console.log(convert("(( @")); // "))(("
