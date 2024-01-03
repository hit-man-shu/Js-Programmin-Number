// const reverNum = (num) => {
//   let str = num.toString();
//   newStr = str.split("").reverse().join("");
//   return parseInt(newStr);
// };

// console.log(reverNum(2325));

const reverseNumLoop = (num) => {
  let temp = num;
  let rev = 0;

  while (num !== 0) {
    let last = num % 10;

    rev = rev * 10 + last;

    num = Math.floor(num / 10);
  }

  console.log(`Reverse of ${temp} is ${rev}`);
};

reverseNumLoop(566);
