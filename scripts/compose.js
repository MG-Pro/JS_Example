const f1 = (e) => e + 1
const f2 = (e) => e + 2
const f3 = (e) => e + 3
const f4 = (e) => e + 4

const funcs = [f1, f2, f3, f4]

const res = funcs.reduce((a, b) => {
  return (...args) => {
    return a(b(...args))
  }
})

console.log(res(1))

