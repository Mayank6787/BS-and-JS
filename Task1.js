function reverseNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Reverse the string using the split-reverse-join method
  const reversedStr = numStr.split("").reverse().join("");

  // Convert the reversed string back to a number
  const reversedNum = parseFloat(reversedStr);

  // Return the reversed number
  return reversedNum;
}

// Example usage:
const originalNumber = 32243;
const reversed = reverseNumber(originalNumber);
console.log(`Original number: ${originalNumber}`);
console.log(`Reversed number: ${reversed}`);
