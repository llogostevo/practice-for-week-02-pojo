/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function breakDownObj(obj, key) {
  // set an empty array, then use the spread syntax to append the key to the new array on each passing. 
  let values = [];
  for (const objKey in obj){
    if (objKey === key){
      values = [...values, obj[key]];
    }
  }
  return values;
}

function valuePair(obj1, obj2, key) {
  /* function returns the result of the two function calls
  these are both put into a new array
  as the funciton returns an array then the use of spread ... 
  will put all the elements from the results of these two functions into a new array 
  with each element as an individual element in the array  
  
  */
  return [...breakDownObj(obj1, key), ...breakDownObj(obj2, key)];

}

let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;