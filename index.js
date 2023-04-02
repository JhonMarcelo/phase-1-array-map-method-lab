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

const titleCased = () => {
  const allSentences = Object.assign({},tutorials);

  return tutorials.map((allSentences)=> {
   const dividedSentence = allSentences.split(' ')
   
    const wordSplitter = dividedSentence.map(capitalizeString);
   
    const combineSplitWords = wordSplitter.join(' ')

    return combineSplitWords
  }
  
  
  )
}

const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1);
