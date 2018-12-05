function upperCaseStr(strings, ...values) {
  let result = '';
  strings.forEach((str, i) => {
    result += str;
    if (values[i]) {
      result += values[i].toUpperCase();
    }
  });
  return result;
}

const str1 = `god`;
const str2 = `trust`;
const quote = upperCaseStr`In ${str1} we ${str2}`;
document.getElementById('out').textContent = quote;
