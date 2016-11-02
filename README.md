#npm install
#npm start

#about
  Dumb test to explore holding large numbers of primes to quickly check if any given number is a prime.
  This also involves figuring out the largest number I could feasibly calculate to.

#Conculsion
  in pretty much all cases, especially non-prime numbers, the class primality test of checking for even divisibility below the square of the number is faster.  Importing I believe roughly 50 MB of numbers slows the proccess down considerably and causes this method to occupy an order of seconds instead of milliseconds.  Time may be lost in storing and parsing the numbers as JSON, but not as significant, I believe, as having to import them in the first place.
