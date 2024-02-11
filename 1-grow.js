/*
link source : 
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

1. Question : 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

/* 
Jawaban cara pertama
-----------------------
function grow(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}
console.log(grow([2, 2, 2, 2, 2, 2]));
*/
/*
Jawaban cara kedua menggunakan fungsi reduce
---------
function grow(x) {
  const result = x.reduce((accumulator, current) => accumulator * current, 1);
  return result;
}
--------
 */

//dibawah ini arrow function
const grow = (x) => x.reduce((accumulator, current) => accumulator * current, 1);
console.log(grow([2, 2, 2, 2, 2, 2]));
