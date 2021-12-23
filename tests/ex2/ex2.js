/*
Given a text string check if it is a palindrome or not
*/

function checkPalindrome(word) {
  let reverseWord = [...word].reverse();
  reverseWord = reverseWord.join("");
  return word === reverseWord;
}

module.exports = checkPalindrome;
