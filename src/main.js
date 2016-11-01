import fs from 'fs';

const MAX_INT = 1000000;
const JSON_ARR_SIZE = 100000;
const MAX_ARR_LENGTH = 9500;

console.time("Log Primes")

for (let i = 0; i <= MAX_INT; i++) {
    const startPos = i;
    const primeArr = new Array();

    while (primeArr.length < MAX_ARR_LENGTH) {
        if (isPrime(i)) {
            primeArr.push(i);
        }
        if (i + 1 > MAX_INT) {
            break;
        }
        i += 1;

    }

    console.log(`Writing primes_${startPos}-${i}.json.  Length: ${primeArr.length}`);
    fs.writeFileSync(`./primes/primes_${startPos}-${i}.json`, JSON.stringify(primeArr));
}

console.timeEnd("Log Primes");
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
