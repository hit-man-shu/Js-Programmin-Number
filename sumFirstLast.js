const sumFirstLast = (num) => {
  let sum = num % 10;

  num = Math.floor(num / 10);

  while (num !== 0) {
    if (num < 10) {
      sum = sum + num;
    }

    num = Math.floor(num / 10);
  }
  console.log(sum);
};

sumFirstLast(1226);

