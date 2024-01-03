const amstrongNumber = (num) => {
  const countDigit = (n) => {
    let count = 0;
    while (n !== 0) {
      count++;
      n = Math.floor(n / 10);
    }
    return count;
  };

  const findSquare = (n, m) => {
    let square = 1;

    for (let i = 1; i <= m; i++) {
      square = square * n;
    }

    return square;
  };

  let temp = num;
  let Sum = 0;

  let digit = countDigit(num);

  while (num !== 0) {
    let last = num % 10;
    Sum = Sum + findSquare(last, digit);
    num = Math.floor(num / 10);
  }

  temp === Sum
    ? console.log(`${temp} is a amstrong number`)
    : console.log(`${temp} is not a strong number`);
};

amstrongNumber(1634);
