const findOddNum = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(`Odd Num ${i}`);
    }
  }
};

findOddNum(10);
