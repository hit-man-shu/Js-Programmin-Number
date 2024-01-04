const findXylemOrPhloem = (num) => {
  let temp = num;
  let last = num % 10;
  num = Math.floor(num / 10);

  let mid = 0;

  while (num != 0) {
    let first = num % 10;

    if (num < 10) {
      last = last + first;
    } else {
      mid += first;
    }

    num = Math.floor(num / 10);
  }

  console.log("mid", mid);
  console.log("first and last", last);

  if (last === mid) {
    console.log(`${temp} is xylem`);
  } else {
    console.log(`${temp} is phylom`);
  }
};

findXylemOrPhloem(1335);
