function sortStringAlphabetically(str) {
  // Convert the string to an array of characters, sort them, and join them back
  const sortedStr = str.split("").sort().join("");
  return sortedStr;
}

// Example usage:
const originalString = "webmaster";
const sortedString = sortStringAlphabetically(originalString);
console.log(`Original string: ${originalString}`);
console.log(`String in alphabetical order: ${sortedString}`);
