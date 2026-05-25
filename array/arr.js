const arr = [1, 2, 2, 3, 4, 4, 5];
function removeDupliate(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
// console.log(removeDupliate(arr))

const nested = [1, [2, [3, [4]]], 5];
let flatArr = [];
function flatArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArray(arr[i])
        } else {
            flatArr.push(arr[i])
        }
    }
    return flatArr
}
// console.log(flatArray(nested))

const people = [
    { name: 'Alice', dept: 'HR' },
    { name: 'Bob', dept: 'IT' },
    { name: 'Charlie', dept: 'HR' }
];

function groupPeople(arr) {
    let group = {};

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name;
        let dept = arr[i].dept;

        if (!group[dept]) {
            group[dept] = []
        }
        group[dept].push({ name: name, dept: dept })
    }
    return group
}
// console.log(groupPeople(people))

const users = [
    { name: 'Charlie', age: 25 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 }
];

function sortingObject(arr) {
    let result = users.sort((a, b) =>
        a.age - b.age || a.name.localeCompare(b.name)
    );
    return result
}
// console.log(sortingObject(users))


const nums = [1, 2, 3, 4, 5];
function sumNumbers(arr) {
    let sum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }

    sum = arr.reduce((acc, curr) => {
        return acc + curr
    })
    return sum
}
console.log(sumNumbers(nums))

const flatSortArr = [1, [2, [2, 3]], [3, 4, [4, 5]]];
let flatSortArrList = []
function getFlatSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            if (!flatSortArrList.includes(arr[i])) {
                flatSortArrList.push(arr[i])
            }
        } else {
            getFlatSort(arr[i])
        }
    }
    return flatSortArrList
}
// console.log(getFlatSort(flatSortArr))

//#region Combine two arrays element-by-element into pairs (like Python zip).


function combineArr() {
    const keys = ['a', 'b', 'c'];
    const vals = [1, 2, 3];

    let result = {}
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = vals[i]
    }
    return result
}
console.log(combineArr())

//#endregion

