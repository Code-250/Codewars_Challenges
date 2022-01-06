function palindrome(string) {
  const isPalindrome = string.split("").reverse().join("");
  if (isPalindrome === string) {
    return "is palindrome";
  } else {
    return "is not a palindrome";
  }
}

const string = "Richard";
console.log(palindrome(string));
