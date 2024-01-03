const findFactorials = (num) => {
  let fact = 1;

  for (let i = 2; i <= num; i++) {
    fact *= i;
  }

  console.log(`Factorials of ${num} is ${fact}`);
};

findFactorials(5);

// let arr = [11, 32, 14, 14, 5, 26, 67];

// let filterArr = arr.filter((item) => item > 18);

// console.log(filterArr);

// let findArr = arr.find((item) => item > 18);
// console.log(findArr);

// let findIndex = arr.findIndex((item) => item === 14);
// console.log(findIndex);

// console.log(arr[arr.indexOf(14)]);
