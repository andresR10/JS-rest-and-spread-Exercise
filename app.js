// ES5
function filterOutOdds(){
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num){
        return num % 2 === 0;
    });
}
// above to ES2015
function filterOutOdds(...nums){
   return nums.filter((num) => num % 2 ===0)
}; 
// or 
const filterOutOdds = (...nums) => nums.filter(num => num % 2 ===0)

//findMin 
const findMin = (...vals) => {
    return Math.min(...vals)
}
//or 
function findMin(...vals){
    return Math.min(...vals);
}


//mergeObjects
const mergeObjects = (firstObj, secondObj) => ({...firstObj, ...secondObj});
// or 
function mergeObjects(firstObj, secondObj){
    return ({...firstObj, ...secondObj});
}


//doubleAndReturnArgs 
const doubleAndReturnArgs = (arr, ...args) => {
    const doubleArgs = args.map((val) => val * 2 );
    return [...arr, ...doubleArgs];
}
//or
function doubleAndReturnArgs(arr, ...args){
    const doubleArgs = args.map((val) => val * 2);
    return [...arr, doubleArgs];
}


//Slice and Dice

//remove a random element in the items array adn return a new array without that item 
const removeRandom = (items) => {
    const randomChar = Math.floor(Math.random() * items.length);
    const result = [...items.slice(0, randomChar), ...items.slice(randomChar + 1)];
    return result;
}

//return a new array with every item in array1 and array2 
const extended = (arr1, arr2) => [...arr1, ...arr2];

//return a new object with all the keys and values from obj and new key/value pair 
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

//return a new object with a key removed 
const removeKey = (obj, key) => {
const newObj = {...obj}
delete newObj[key]
return newObj;
}

//combine two objects and return a new object
const combine = (obj1, obj2) => ({...obj1, ...obj2});

//return a new object with a modified key and value 
const update = (obj, key, val) => {
const updatedObj = {...obj}
updatedObj[key] = val
return updatedObj;
}