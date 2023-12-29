const findEvenNum2Range = (num1, num2) => {
  let count = 0;

  for (i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
};

console.log(findEvenNum2Range(10, 200));