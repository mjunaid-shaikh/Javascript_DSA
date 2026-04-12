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


//#region GET SUM OF TWO ARRAY
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
// console.log('result', result)

//#endregion


//#region remove duplicate element from an arr
let dupArr = [1, 2, 3, 4, 1, 2, 3, 2, 3, 5, 3, 2, 1, 4];
function getUniqueArr(arr) {
    // method one
    // let result = [...new Set(arr)]
    // return result;

    // method two
    let result2 = []
    for (let i = 0; i < arr.length; i++) {
        if (!result2.includes(arr[i])) {
            result2.push(arr[i])
        }
    }
    return result2;
}
// console.log(getUniqueArr(dupArr))

//#endregion


//#region  duplicate count
let dupCountArr = [1, 2, 3, 4, 1, 2, 3, 4, 2, 3, 2, 3, 2, 1, 2, 3]
function findDuplicate(arr) {
    let result = arr.reduce((acc, curr, index) => {
        acc[curr] = (acc[curr] | 0) + 1;
        return acc;
    }, {});

    return result
    // let obj = {}
    // for (let i = 0; i < arr.length; i++) {
    //     obj[arr[i]] = (obj[arr[i]] | 0) + 1
    // }
    // return obj
}
console.log(findDuplicate(dupCountArr));
//#endregion


//#region  Permutation
let str = "CMS"
function getPermutation(str) {
    if (str.length <= 1) return [str]
    let permResult = [];

    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let remainChar = str.slice(0, i) + str.slice(i + 1);
        let permutastions = getPermutation(remainChar);

        for (let P of permutastions) {
            permResult.push(firstChar + P)
        }
    }
    return permResult;
}
// console.log(getPermutation(str))

//#endregion


//#region GET SECOND HIGHEST NUMBER FROM THE ARRAY
let arrSH = [5, 6, 8, 4, 2];
function getSecondHigestNumber(arr) {
    let max = Math.max(...arr)
    let secondHN = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max && arr[i] > secondHN) {
            secondHN = arr[i]
        }
    }
    return secondHN
}
console.log(getSecondHigestNumber(arrSH))

//#endregion


//#region  REMOVE DUPLICATE FROM AN ARRAY
function removeDuplicate(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(removeDuplicate([1, 2, 2, 3, 3, -2, -2, 1, 4, 4, 4].sort((a, b) => a - b)));
//#endregion


//#region  REVERSE THE ARRAY
let reverseArr = ['j', 'u', 'n', 'a', 'i', 'd'];
function getReverse(arr) {
    let result = []

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}
console.log(getReverse(reverseArr))


//#region  CLOSURE
function increment() {
    let count = 0;
    return function () {
        count++
        return count
    }
}
let resultInc = increment()
// console.log(resultInc());
// console.log(resultInc());
// console.log(resultInc());
//#endregion


//#region 
function getStrCount(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i += 2) {
        let char = str[i];
        let count = Number(str[i + 1]);

        // resultStr += count === 0 ? char : char.repeat(count);
        resultStr += char.repeat(count);
    }
    return resultStr;
}

let custStr = "a2b3c1d2";
console.log(getStrCount(custStr));
//#endregion


//#region 
function getStrCount2(str) {
    let resultStr = "";

    for (let i = 0; i < str.length; i += 2) {
        let char = str[i + 1];
        let count = Number(str[i]);

        // resultStr += count === 0 ? char : char.repeat(count);
        resultStr += char.repeat(count);
    }
    return resultStr;
}

let custStr2 = "2a3b1c";
console.log(getStrCount2(custStr2));
//#endregion





