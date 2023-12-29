const findEven = (num) => {
  //   if (num % 2 === 0) {
  //     console.log(`Even Number ${num}`);
  //   }

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`Even Number ${i}`);
    }
  }
};

findEven(10);
