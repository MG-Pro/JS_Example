
function digitsSum(value) {
    let arr = value.toString().split('')
    let sum = Infinity;

    while(sum > 9) {
        sum = arr.reduce((acc, num) => acc + +num, 0)
        arr = sum.toString().split('')
    }

    return sum
}

console.log(digitsSum(5)); // 5
console.log(digitsSum(57)); // 3
console.log(digitsSum(876512938058305804852849285028502850820689793745834768347497357287n)); // 2

