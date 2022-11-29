/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])
*/
const removeConsecutiveDuplicates = (s) => {
  let last = "";
  let result = [];
  for (let letter of s.split("")) {
    letter !== last ? result.push(letter) : (last = letter);
    last = letter;
  }
  return result.join("");
};
function dup(arr) {
  return arr.map((s) => removeConsecutiveDuplicates(s));
}
console.log(dup(["abracadabra", "allottee", "assessee"])); // ["abracadabra","alote","asese"]
console.log(dup(["kelless", "keenness"])); // = ["keles","kenes"]
