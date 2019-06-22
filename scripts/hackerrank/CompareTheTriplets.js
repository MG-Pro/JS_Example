//const a = [17, 28, 30];
//const b = [99, 16, 8];

const a = [5, 6, 7];
const b = [3, 6, 10];

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  const res = [0, 0];

  a.forEach((val, i) => {
    if (a[i] > b[i]) {
      res[0]++;
    }
    if (a[i] < b[i]) {
      res[1]++;
    }
  });

  return res;
}


console.log(compareTriplets(a, b));
