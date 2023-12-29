const findFactorials = (num) => {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  console.log(`Factorials of ${num} is ${fact}`);
};

findFactorials(5);
