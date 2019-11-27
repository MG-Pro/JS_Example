const a = [1, 3, 7]

delete a[1]
a[100] = 7
for(var i = 0; i < a.length; i++) {
  
  console.log(a[i])
}

a.forEach((it, i) => console.log(i))
