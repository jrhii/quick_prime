import fs from 'fs';

const MAX_INT = 3900000000;
const JSON_ARR_SIZE = 100000;
const MAX_ARR_LENGTH = 9500;

console.time("Log Primes")
/*
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
}*/
console.log(isPrime(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
fs.writeFileSync(`files.json`, JSON.stringify(fs.readdirSync("./primes")));
const strArr = fs.readdirSync("./primes");
console.timeEnd("Log Primes");
console.log('finished primeFind');


function isPrime(num) {
    let prime = true;
    let highestLoggedPrime = 0;
    const sqrt = Math.sqrt(num);
    const dirArr = fs.readdirSync("./primes");

    let matchArrArr = new Array();
    for (let fileName of dirArr) {
        const matchArr = fileName.match(/\d*(?=\.json)/);//looks for max limit of file
        matchArrArr.push(matchArr[0]);
    }
    matchArrArr = matchArrArr.sort((a,b) => a-b);
    highestLoggedPrime = matchArrArr[matchArrArr.length - 1];

    if (num < highestLoggedPrime) {
        console.log(`${num} < ${highestLoggedPrime}`);
        for (let fileName of dirArr) {
            const primeArr = fs.readFileSync(`./primes/${fileName}`);

            for (let prime of primeArr) {
                if (prime === num) {
                    return true;
                }
                if (num < prime) {
                    break;
                }
            }
        }

        return false;
    } else {
            console.log(`${num} >= ${highestLoggedPrime}`);
            for (var i = 2; i <= sqrt; i++) {
                if (num % i === 0) {
                    console.log(`${num}/${i} = ${num/i}`);
                    return false;
                }
            }

    }

    return prime;
}
