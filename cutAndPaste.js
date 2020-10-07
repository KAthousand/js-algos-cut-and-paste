//  CUT AND PASTE -

const cutAndPaste = (arr, num) => {
  let newArr = arr.splice(num);
  arr.forEach((value) => {
    newArr.push(value);
  });
  return newArr;
};

console.log(cutAndPaste([1, 2, 5, "help", "wow", 3], 1));

module.exports = {
  cutAndPaste,
};
