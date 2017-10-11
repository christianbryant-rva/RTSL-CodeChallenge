/**=================================================================================
 *  <Author:> Christian Bryant || <Desc.:> RTS Code Challenge || <Date:> 10.11.17
 *  1.  Print the number of integers in an array 
 *      that are above the given input and the number that are below, 
 *      e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4
 *  2.  Rotate the characters in a string by a given input and have the overflow 
 *      appear at the beginning,
 *      e.g. "MyString" rotated by 2 is "ngMyStri"
 ===================================================================================*/

// 1. Printing numbers in an Array

// - Let's change the input to 5;  
var input = 5
let array = [1,8,7,5,3,9]

let over5 = function(elem, index, myArray) {
        // log and tidy up in DevTools
        console.log(elem + " - " + " - " + "-" + index + " -" + " - " + myArray);
    return elem > 1; 
    }; 
    console.log(array.findIndex(over5));
// - TODO: Arrow pointer equivolent and added logic 
//   --   1.1: Extra Credit: Using find method, and pass in an anonymous function 
let result = array.find(function(elem) {
    return elem > 1 && elem < 5; 
})