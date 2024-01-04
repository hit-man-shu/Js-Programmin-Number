const GCD = (num1, num2) => {
  let result = Math.min(num1, num2);

  while (result != 0) {
    if (num1 % result === 0 && num2 % result === 0) {
      return result;
    }

    result--;
  }
};
// console.time();
// console.log(GCD(28, 6));
// console.timeEnd();

const euclidGcd = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  if (num1 != 0) {
    return num1;
  } else {
    return num2;
  }
};
console.time();
console.log(euclidGcd(34, 26));
console.timeEnd();
