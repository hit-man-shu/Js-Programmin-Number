const strongNumber = (num) => {
  const factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };

  let temp = num;
  let sum = 0;

  while (num !== 0) {
    let last = num % 10;
    sum = sum + factorial(last);
    num = Math.floor(num / 10);
  }

  temp === sum
    ? console.log(`${temp} is a strong number`)
    : console.log(`${temp} is not a strong number`);
};

strongNumber(1);
