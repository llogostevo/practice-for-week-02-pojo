/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  let obj = {}
  // loop through array
  // if the element is not in the empty object, then add the key and initialise a value for the object at 0
    array.forEach(element => {
      if (!(element in obj)){
        obj[element] = 0;
      }
    });

    // cycle through the array
    // if the element is in the object, increment the counter for the object. 
    array.forEach(element => {
        if ((element in obj)){
          obj[element]++;
        }
        
  });
  return obj;
    // if array element is not in object, then add element as object key

  // loop through object

    // loop through array
    // if key matches array then increment value by 1
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;