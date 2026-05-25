//#region  Swap every key-value pair so keys become values and values become keys.
function getSwapKeyValue() {
    const obj = { a: 1, b: 2, c: 3 };
    let result = {};

    result = Object.fromEntries(
        Object.entries(obj).map(([a, b]) => [b, a]))
    return result
}
// console.log(getSwapKeyValue())

//#endregion    

//#region  Convert an array into an object that counts how many times each value appears.
function convertArraytoObject() {
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    let result = {}
    // for (let i = 0; i < fruits.length; i++) {
    //     result[fruits[i]] = (result[fruits[i]] | 0) + 1
    // }
    result = fruits.reduce((acc, curr) => {
        acc[curr] = (acc[curr] | 0) + 1
        return acc
    }, {})
    return result
}
// console.log(convertArraytoObject())
//#endregion

//#region  Given an array of objects, return counts grouped by a property.
function groupCount() {
    const orders = [
        { status: 'pending' }, { status: 'done' },
        { status: 'pending' }, { status: 'done' }, { status: 'pending' }
    ];

    let object = {}
    for (let i = 0; i < orders.length; i++) {
        object[orders[i].status] = (object[orders[i].status] | 0) + 1
    }
    return object
}
console.log(groupCount())

//#endregion