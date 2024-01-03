// const palindrome = (num) => {
//   let str = num.toString();
//   newNum = parseInt(str.split("").reverse().join(""));

//   num === newNum
//     ? console.log(`${newNum} is a palondrome`)
//     : console.log(`${newNum} is not a palindrome`);
// };

// palindrome(10101);

const palindromeLoop = (num) => {
  let temp = num;
  let rev = 0;

  while (num !== 0) {
    let last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }

  temp === rev
    ? console.log(`${temp} is a palindrome`)
    : console.log(`${temp} is not a palindrome`);
};

palindromeLoop(121);
