/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/
const removeConsecutiveDuplicates = (s) => {
  let last = "";
  let result = [];
  for (let word of s.split(" ")) {
    word !== last ? result.push(word) : (last = word);
    last = word;
  }
  return result.join(" ");
};
