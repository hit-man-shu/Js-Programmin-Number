const palindrome = (num) => {
  let str = num.toString();
  newNum = parseInt(str.split("").reverse().join(""));

  num === newNum
    ? console.log(`${newNum} is a palondrome`)
    : console.log(`${newNum} is not a palindrome`);
};

palindrome(10101);
