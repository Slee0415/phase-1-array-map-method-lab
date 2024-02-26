const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Define a function to convert each title to title case
function titleCased() {
  // Use the map function to loop through each title in the tutorials array
  return tutorials.map(title => {
    // Split the title into individual words using the split method
    const words = title.split(' ');

    //Use the map function to loop through each word in the words array
    const titleCasedWords = words.map(word => {

      // Capitalize the first latter of each word
      return word.charAt(0).toUpperCase() + word.slice(1);

    });

   // Join the titleCasedWords array into a sing;e string seperated by spaces
   return titleCasedWords.join(' ');

  });
}
