const findPower = (botNum, topNum) => {
  let power = 1;

  for (let i = 1; i <= topNum; i++) {
    power *= botNum;
  }

  console.log(`Power of ${botNum} is ${power}`);
};

findPower(5, 4);
