const countDigits = (num) => {
  let count = 0;
  let temp = num;

  while (num != 0) {
    count++;
    num = Math.floor(num / 10);
  }

  //   console.log(count);
  console.log(`${temp} has ${count} digits`);
};