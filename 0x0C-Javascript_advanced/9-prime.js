'use strict';

function countPrimeNumbers() {

    function checkPrimeNumber(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function primeNumbers() {
        let arr = [];
        for (let j = 2; j < 101; j++) {
            if (checkPrimeNumber(j) === 1) {
                arr[j] = j;
            }
        }
        return arr;
    }
    let result = primeNumbers();
    return result.length;
}

let a = performance.now();
countPrimeNumbers();
let b = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (b - a) + ' milliseconds.');