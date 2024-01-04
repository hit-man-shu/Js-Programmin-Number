// const countZeroFact = (num) => {
//   let fact = 1;

//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }

//   let temp = fact;

//   let count = 0;
//   while (fact != 0) {
//     if (fact % 10 === 0) {
//       count++;
//     }
//     fact = Math.floor(fact / 10);
//   }

//   console.time();
//   console.log(`${temp} has ${count} zeros`);
//   console.timeEnd();
// };

// countZeroFact(10);

const findZeroInFact = (num) => {
  let sum = 0;

  while (num >= 5) {
    // if (num >= 5) {
    sum += Math.floor(num / 5);
    num = Math.floor(num / 5);
    // }
  }

  // console.time();
  console.log(sum);
  // console.timeEnd();
};

findZeroInFact(65);
