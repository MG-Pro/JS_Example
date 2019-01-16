const sourceObj = {
  prop1: 1
};

Object.defineProperties(sourceObj, {
  prop2: {
    value: {
      name: 'aaaa',
      age: 10
    }
  },
  prop3: {
    value: 3,
    enumerable: true
  },
  prop4: {
    value: function (a) {
      console.log(a);
    }
  }
});

function objectCopy(sourceObj) {
  const targetObj = {};
  const props = Object.getOwnPropertyDescriptors(sourceObj);
  Object.defineProperties(targetObj, props);
  return targetObj;
}

const targetObj = objectCopy(sourceObj);

sourceObj.prop1 = null;
sourceObj.prop2.age = 20;


console.log('sourceObj', sourceObj);
console.log('targetObj', targetObj);
targetObj.prop4(5);






