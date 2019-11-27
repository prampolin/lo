/* start const of the config.json */

let totalDozens = 25;

/* end const of the config.json */

/* return odd */
let isOdd = (n) => n % 2 == 0 ? false : true; 

/* count array */
let totalArr = (arr) => arr.length;

/* part function addArray */
let addArr = (a, b) => a + b;

/* sum array */
let sumArr = (arr) => arr.reduce(addArr);

/* return true else number is prime number */
let isPrime = (prime, n) => arrExist(prime, n);

/* return true else number is frame board */
let isFrame = (frame, n) => arrExist(frame, n);

/* verify if value exist in array */
let arrExist = (arr, exist) => arr.includes(exist);