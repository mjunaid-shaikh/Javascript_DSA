//#region. find odd even & Prime numbers
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
// console.log(getOddEvenPrimeNum(oddEvenPrimeArr))



//#endregion


//#region find two element whose sum equal to target
let sumElementAArr = [10, 12, 14, 16, 18, 20];
let target = 34;
function getSumElement(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]]
        }
        if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return null
}
// console.log(getSumElement(sumElementAArr, target))

//#endregion


//#region get flat Array
let flatArr = [1, 2, [3, 4, [5, 6], 7], 8, 9]
let result = []
function getFlatArray(arr) {
    // const result = arr.flat(Infinity);
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            getFlatArray(arr[i]);
        }
    }
}
getFlatArray(flatArr);
console.log('result', result)

//#endregion


//#region remove duplicate element from an arr
let dupArr = [1, 2, 3, 4, 1, 2, 3, 2, 3, 5, 3, 2, 1, 4];
function getUniqueArr(arr) {
    // method one
    // let result = [...new Set(arr)]
    // return result;

    //method two
    // let result2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (!result2.includes(arr[i])) {
    //         result2.push(arr[i])
    //     }
    // }
    // return result2;
}
// console.log(getUniqueArr(dupArr))

//#endregion


//#region  duplicate count
let dupCountArr = [1, 2, 3, 4, 1, 2, 3, 4, 2, 3, 2, 3, 2, 1, 2, 3]
function findDuplicate(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] | 0) + 1
    }
    return obj
}
console.log(findDuplicate(dupCountArr));

//#endregion

























