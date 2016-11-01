import fs from 'fs';

const MAX_INT = 9007199254740991;
const JSON_ARR_SIZE = 100000;

for (let p = 0; p < 1000000/JSON_ARR_SIZE; p++) {
    const primeArr = new Array();

    for (let i = p * JSON_ARR_SIZE; i < JSON_ARR_SIZE * (p + 1); i++) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
    }

    fs.writeFileSync(`./primes/primes_${JSON_ARR_SIZE * (p)}-${JSON_ARR_SIZE * (p + 1)}.json`, JSON.stringify(primeArr));
}

console.log('finished primeFind');

//From: "https://www.codewars.com/kumite/55f54dd5cb6fff701600007b?sel=55f54e1acb6fff701600007d"
function isPrime(num) {
  let prime = true
  const sqrt = Math.sqrt(num);
  for (var i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  return (num < 2) ? false : prime;
}
