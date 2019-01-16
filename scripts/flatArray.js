const arr = [1, 2, [3, 2, [3, 5], 10], 20];
// [1, 2, 3, 2, 3, 5, 10, 20]

// closures
const deepFlatten1 = () => {
  const newArr = [];
  const a = (arr) => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        a(item);
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  };
  return a;
};


console.log(deepFlatten1()(arr));

// es6
function deepFlatten2(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      var el = deepFlatten2(val);
      return acc.concat(el);
    } else {
      return acc.concat(val);
    }
  }, []);
}

// es5
function deepFlatten3(arr) {
  return arr.reduce(function (acc, val) {
    if(typeof val === 'object' && val.length !== undefined) {
      return acc.concat(deepFlatten3(val))
    } else {
      return acc.concat(val);
    }
  }, [])
}

console.log(deepFlatten3(arr));
