const arr = [1, 2, [3, 2, [3, 5], 10], 20];
// [1, 2, 3, 2, 3, 5, 10, 20]

const newArr = [];
const flatArray = (arr) => {
  arr.forEach(item => {
    if(Array.isArray(item)) {
      flatArray(item);
    } else {
      newArr.push(item);
    }
  });
};
flatArray(arr);
console.log(newArr);
