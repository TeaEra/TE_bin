/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let concatArr = [];
  words.forEach((word, index) => {
    let currStr = '';
    word.split('').forEach(currChr => {
      currStr += morseCode[currChr.charCodeAt(0) - 97];
    });
    if (concatArr.indexOf(currStr) === -1) {
      concatArr.push(currStr);
    }
  });
  return concatArr.length;
};
