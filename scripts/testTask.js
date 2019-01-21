function fn1() { //3
  const INIT = [[1, 2, 3], [4, 5], [6]]
  let res = []
  for (let arr of INIT) {
    for (let item of arr) {
      res.push(item)
    }
  }
  console.log('---fn1---\n', res)
}

function fn2() { //5
  const INIT = [1, 2, 3, 4, 5]

  function _every(arr, cb) {
    for (let item of arr) {
      if (!cb(item)) {
        return false
      }
    }
    return true
  }

  function _some(arr, cb) {
    for (let item of arr) {
      if (cb(item)) {
        return true
      }
    }
    return false
  }

  console.log('---fn2---', 'every if [1..5]>0 ', _every(INIT, item => {
    if (item > 0) return true
  }))
  console.log('---fn2---', 'some if [1..5] item===3 ', _some(INIT, item => {
    if (item === 3) return true
  }))
}

function fn3() {  //3.5

  function _deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }

  let objArr1 = [
    {
      name: 'some111',
      a: -1,
      b: {aa: 'some', bb: ['123', 1, 3, 32], cc: {a: 0, b: 11, c: '22'}},
      c: () => 1
    },
    {
      name: 'some111',
      a: -1,
      b: {aa: 'some', bb: ['123', 1, 3, 32], cc: {a: 0, b: 11, c: '22'}},
      c: () => 2
    },
  ]

  Object.defineProperties(objArr1[0], {
    prop3: {
      value: 3,
      enumerable: false,
      writable: false
    },
  });

  let objArr2 = [
    {
      name: 'some111',
      a: -1,
      b: {aa: 'some', bb: ['123', 1, 3, 32], cc: {a: 0, b: 11, c: '22'}}
    },
    {
      name: null,
      a: -1,
      b: {aa: 'some', bb: ['123', 1, 3, 32], cc: {a: 0, b: 11, c: ''}}},
    {
      'ads': 0
    },
  ]

  console.log('---fn3---',
    '\nequal:', _deepEqual(objArr1[0], objArr1[1]),
    //'\nnot equal:', _deepEqual(objArr1[1], objArr2[1]),
    //'\nequal:', _deepEqual()
  )
}

function fn4() { //5
  const MIN_VALUE = 1,
        MAX_VALUE = 100

  let run = (function () {
    resultArr = []

    function rnd() {
      while (true) {
        if (this.resultArr.length >= MAX_VALUE - MIN_VALUE + 1) return
        let rnd = Math.floor(Math.random() * MAX_VALUE - MIN_VALUE) + 1 + MIN_VALUE
        if (this.resultArr.indexOf(rnd) === -1) {
          this.resultArr.push(rnd)
          break
        }
      }
      return this.resultArr[this.resultArr.length - 1]
    }

    return rnd
  })()

  let r = []
  for (let i = 0; i < 1000; i++) {
    let rr = run();
    if (rr) r.push(rr)
  }
  console.log('---fn4---', 'length=' + r.length, r)
}

function fn5() { //4
  function run(arr) {
    let res = []
    arr.map(item => {
      if (item > 0) res.push(Math.sqrt(item))
    });

    return res
  }

  console.log('---fn5---', run([64, 4, -4, 0, 1, 123]))
}

function fn6() { //5
  function run(str) {
    return str.split('_').map(item => {
      return item[0].toUpperCase() + item.substring(1)
    }).join('')
  }

  console.log('---fn6---', run('hello_world_some_text_input'))
}

function fn7() { //5
  function run(a) {
    return b => {
      return a * b
    }
  }

  console.log('---fn7---', run(12)(2))
}

function fn8() { //5
  var user = {name: 'User', count: 5}
  user.toString = function () {
    return 'name: ' + this.name + ', count: ' + this.count
  }
  console.log('---fn8---', user.toString())
}

function fn9() { //5
  function run(...args) {
    return args.reduce((accum, current) => accum + current, 0)
  }

  console.log('---fn9---', run(1, 1, 2, 3))
}

function fn10() { //5
  let run = (function () {
    var count = 0

    function getCount() {
      return ++count;
    }

    return getCount
  })()

  console.log('---fn10---', run())
  console.log('---fn10---', run())
  console.log('---fn10---', run())
}

fn1()
fn2()
fn3()
fn4()
fn5()
fn6()
fn7()
fn8()
fn9()
fn10()
