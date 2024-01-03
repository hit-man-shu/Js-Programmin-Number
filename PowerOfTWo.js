const isPowerOfTwo = (num) => {
  if (num < 1) return "No";

  while (num != 1) {
    if (num % 2 === 1) {
      return "No";
    }

    num = Math.floor(num / 2);
  }

  return "Yes";
};
console.log(isPowerOfTwo(21));
