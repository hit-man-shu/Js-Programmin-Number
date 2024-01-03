const SumOfEvenDigits = (num) => {
  let temp = num;
  let sum = 0;

  while (num != 0) {
    let last = num % 10;

    if (last % 2 === 0) {
      sum += last;
    }
    num = Math.floor(num / 10);
  }
  console.log(`Sum of Even Number in ${temp} is ${sum}`);
};

SumOfEvenDigits(123441);
