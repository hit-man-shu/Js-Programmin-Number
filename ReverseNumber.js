const reverNum = (num) => {
  let str = num.toString();
  newStr = str.split("").reverse().join("");
  return parseInt(newStr);
};

console.log(reverNum(2325));
