const addDigitNum = (num) => {
  let temp = num;
  let sum = 0;

  while (num != 0) {
    let last = num % 10;
    sum += last;
    num = Math.floor(num / 10);
  }

  console.log(`Sum of the digits of ${temp} is ${sum}`);
};

addDigitNum(126);
