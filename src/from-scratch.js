//1
const helloWorldRegex = (str) => {
  const regex = /hello\s+world/i; // Case-insensitive regex pattern
  return regex.test(str);
};

// Test cases
console.log(helloWorldRegex("Hello world")); // true
console.log(helloWorldRegex("Hello world?")); // true
console.log(helloWorldRegex("Hello world, are you there?")); // true
//2
const hasAVowel = (str) => {
  const regex = /[aeiou]/i; // Regular expression to match any vowel (case-insensitive)
  return regex.test(str);
};

// Test cases
console.log(hasAVowel("a")); // true
console.log(hasAVowel("AHHHHHH!")); // true
console.log(hasAVowel("HEY")); // true
//3
const hasCatsOrDogs = (str) => {
  const regex = /\b(?:cats|dogs)\b/i; // Regular expression to match "cats" or "dogs" (case-insensitive)
  return regex.test(str);
};

// Test cases
console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); // true
console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); // true
console.log(hasCatsOrDogs("Cats rule!")); // true
//4
const hasVowelStart = (str) => {
  if (str.length === 0) return false; // Return false if the string is empty

  const firstChar = str.charAt(0).toLowerCase(); // Get the first character of the string in lowercase
  return ['a', 'e', 'i', 'o', 'u'].includes(firstChar); // Check if the first character is a vowel
};

// Test cases
console.log(hasVowelStart("a")); // true
console.log(hasVowelStart("A")); // true
console.log(hasVowelStart("ab")); // true
//5
const hasPunctuationEnd = (str) => {
  if (str.length === 0) return false; // Return false if the string is empty

  const lastChar = str.charAt(str.length - 1); // Get the last character of the string
  return /[.!?]/.test(lastChar); // Check if the last character is a period, exclamation mark, or question mark
};

// Test cases
console.log(hasPunctuationEnd("a.")); // true
console.log(hasPunctuationEnd("a!")); // true
console.log(hasPunctuationEnd("a?")); // true
//6
const hasNothingOrDigits = (str) => {
  // Use a regular expression to check if the string is either empty or contains only digits
  return /^$|^\d+$/.test(str);
};

// Test cases
console.log(hasNothingOrDigits(""));      // true
console.log(hasNothingOrDigits("123"));   // true

//7
const hasNoFlippers = (str) => {
  // Define the set of flippable letters
  const flippableLetters = new Set(['B', 'C', 'c', 'D', 'E', 'H', 'I', 'K', 'O', 'o', 'X', 'x', 'l']);
  
  // Iterate through each character in the string
  for (let char of str) {
    // If the character is a flippable letter, return false
    if (flippableLetters.has(char)) {
      return false;
    }
  }
  
  // If no flippable letters are found, return true
  return true;
};

// Test cases
console.log(hasNoFlippers("Z")); // true
console.log(hasNoFlippers("Zabdabbq")); // true
console.log(hasNoFlippers("")); // true
//8
const isValidEmail = (str) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(str);
};
console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("notavalidemail@")); // false
//9
const isValidPhoneNumber = (str) => {
  // Regex pattern for basic phone number format validation
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(str);
};
console.log(isValidPhoneNumber("1234567890")); // true
console.log(isValidPhoneNumber("123456"));    // false
//10
const matchAllNumbers = (str) => {
  // Use a regular expression to match all numbers in the string
  const matches = str.match(/\d+/g);
  
  // If matches is null (no numbers found), return an empty array, otherwise return the matches
  return matches ? matches : [];
};

//11
const matchAllNumbersAsNumbers = (str) => {
  // Use a regular expression to match all numbers in the string
  const matches = str.match(/\d+/g);
  
  // If matches is null (no numbers found), return an empty array
  if (!matches) {
    return [];
  }
  
  // Convert each matched number from string to number format using the map method
  return matches.map(match => parseInt(match, 10));
};
//12
const matchAllWords = (str) => {
  // Use a regular expression to match all words in the string
  const matches = str.match(/[a-zA-Z']+/g);
  
  // If matches is null (no words found), return an empty array
  if (!matches) {
    return [];
  }
  
  // Return the array of matched words
  return matches;
};
//13
const replaceAllNumbers = (str) => {
  // Use a regular expression to replace all numbers with "???"
  return str.replace(/\d+/g, "???");
};
//14
const fixFileName = (str) => {
  // Use a regular expression to replace all spaces with underscores
  return str.replace(/\s+/g, "_");
};
//15
const nameRedacter = (str) => {
  // Use a regular expression to match names in ALL capitals (excluding "I" and "A")
  // Replace the matched names with "REDACTED"
  return str.replace(/\b(?!(?:I|A)\b)[A-Z]+\b/g, "REDACTED");
};
//16
const camelToSnakeCase = (str) => {
  // Use a regular expression to match capital letters and replace them with underscore + lowercase letter
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
