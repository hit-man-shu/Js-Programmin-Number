const findFactors = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
};

findFactors(28);

const countNumberOfFactors = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
};

// console.log(countNumberOfFactors(28));
