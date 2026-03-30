/////////////////////////////////////////////////////////////////////////////////////////
// TWO POINTER - array should be sorted ( left + right );
let arr1 = [4, 5, 8, 6, 3,];
let target = 13;

function getTarget(arr, target) {
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
    return null;
}

// console.log(getTarget(arr1.sort((a, b) => a - b), target))



/////////////////////////////////////////////////////////////////////////////////////////
// reverse an array
let arr2 = [1, 2, 6, 4];
// let arr2 = ['a', 'b', 'c', 'd'];
// let arr2 = 'junaid'
function reverseArr(arr) {
    let result = [...arr];
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        result[left] = result[right];
        result[right] = temp;

        left++;
        right--;
    }
    return result
}
// console.log(reverseArr(arr2))



/////////////////////////////////////////////////////////////////////////////////////////
//remove duplicate from an array
let arr3 = [1, 1, 2, 2, 3];
function removeDup(arr) {
    let result = [];
    // let left = 0

    while (left < arr.length) {
        if (arr[left] === 0 || arr[left] !== arr[left - 1]) {
            result.push(arr[left])
        }
        left++
    }

    // //////////////////////////// using for loop
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0 || arr[i] !== arr[i - 1]) {
    //         result.push(arr[i])
    //     }
    // }

    return result
}
console.log(removeDup(arr3));

