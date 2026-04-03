//#region 
let oddEvenPrimeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function getOddEvenPrimeNum(arr) {
    let odd = [];
    let even = [];
    let prime = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
        if (getPrime(num)) {
            prime.push(num);
        }
    }

    return { odd, even, prime }
}
console.log(getOddEvenPrimeNum(oddEvenPrimeArr))
//#endregion