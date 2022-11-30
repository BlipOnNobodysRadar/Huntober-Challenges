/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

// first pass, pretty slow. Could have just used .indexOf() to write less code. Could be 2x faster by not checking for case, which isn't tested.
function absentVowel(x) {
  //total: O(8n)
  const dict = { a: 0, e: 1, i: 2, o: 3, u: 4 }; // O(1)
  if (!x.toLowerCase().includes("a")) return dict["a"]; // O(n) + O(n)
  if (!x.toLowerCase().includes("e")) return dict["e"]; // O(n) + O(n)
  if (!x.toLowerCase().includes("i")) return dict["i"]; // O(n) + O(n)
  if (!x.toLowerCase().includes("o")) return dict["o"]; // O(n) + O(n)
  return 4; // O(1)
}

// 8x faster but more effort to write
function absentVowel(x) {
  // total: O(n) -- one pass only
  const dict = { a: 0, e: 1, i: 2, o: 3, u: 4 }; // O(1)
  let a = true; // O(1)
  let e = true; // O(1)
  let i = true; // O(1)
  let o = true; // O(1)
  let u = true; // O(1)
  for (letter of x) {
    // loop is O(n)
    if (letter === "a" || letter === "A") a = false; // O(1)
    if (letter === "e" || letter === "E") e = false; // O(1)
    if (letter === "i" || letter === "I") i = false; // O(1)
    if (letter === "o" || letter === "O") o = false; // O(1)
    if (letter === "u" || letter === "U") u = false; // O(1)
  }
  if (a) return dict["a"]; // O(1)
  if (e) return dict["e"]; // O(1)
  if (i) return dict["i"]; // O(1)
  if (o) return dict["o"]; // O(1)
  if (u) return dict["u"]; // O(1)
}
