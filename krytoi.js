// 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2
for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// 3.
for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// 4.
let n = 15;
for (let i = 1; i <= 20; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

// 5.
let j = 1;
while (j <= 20) {
  if (j % 3 === 0) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}
