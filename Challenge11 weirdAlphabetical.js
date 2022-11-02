/*
function last(x){
  if(x.trim() === '') return x.split(' '); // edge case if only spaces
  return x.split(' ').sort((a,b) => a[a.length-1].localeCompare(b[b.length-1]))
}
*/
/*
PREP
P: a string of words, space separated
R: an array containing the words, sorted alphabetically by the final char in each. If two have the same last letter, should be in order given in the string.
E: given
P:

str.split(' ').sort((a,b) => a[a.length-1].compare(b[b.length-1]));
*/
function last(x) {
  if (x.trim() === "") return x.split(" "); // edge case if only spaces
  return x
    .split(" ")
    .sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}
