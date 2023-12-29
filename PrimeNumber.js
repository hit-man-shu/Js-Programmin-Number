const findPrieNumber = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  count === 2
    ? console.log(`Prime Number ${num}`)
    : console.log(`Not a Prime Number ${num}`);
};

findPrieNumber(5);
