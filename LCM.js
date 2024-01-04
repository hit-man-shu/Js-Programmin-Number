const LCM = (num1, num2) => {
  const euclidGcd = (n1, n2) => {
    while (n1 != 0 && n2 != 0) {
      if (n1 > n2) {
        n1 = n1 % n2;
      } else {
        n2 = n2 % n1;
      }
    }

    if (n1 != 0) {
      return n1;
    } else {
      return n2;
    }
  };

  return (num1 * num2) / euclidGcd(num1, num2);
};

// console.log(LCM(5, 10));

function lcmAndGcd(a, b) {
  //code here

  function HCF(n1, n2) {
    while (n1 != 0 && n2 != 0) {
      if (n1 > n2) {
        n1 = n1 % n2;
      } else {
        n2 = n2 % n1;
      }
    }

    if (n1 != 0) {
      return n1;
    } else {
      return n2;
    }
  }

  return (a * b) / HCF(a, b);
}

console.log(lcmAndGcd(2, 5));
