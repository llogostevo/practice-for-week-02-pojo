/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {}
  // split the string into an array of letters
  let letters = string.split('')
  // loop through array
  // if the element is not in the empty object, then add the key and initialise a value for the object at 0
    letters.forEach(element => {
      if (!(element in obj)){
        obj[element] = 0;
      }
    });

    // cycle through the array
    // if the element is in the object, increment the counter for the object. 
    letters.forEach(element => {
        if ((element in obj)){
          obj[element]++;
        }
        
  });
  return obj;
  
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;