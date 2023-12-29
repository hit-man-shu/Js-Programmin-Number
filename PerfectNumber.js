const findPerfectNumber = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  sum === num
    ? console.log(`${num} is a perfect number`)
    : console.log(`${num} is not a perfect number`);
};

findPerfectNumber(28);
