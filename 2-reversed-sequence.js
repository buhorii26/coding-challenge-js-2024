/*
Day 2/366
Link https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
Question
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
 */
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

/*
Menggunakan fungsi fill
const reverseSeq = (n) => {
  return Array(n) //bikin array kosong
    .fill()
    .map((el, i) => i + 1)
    .reverse();
};
*/
//menggunakan destructuring
// const reverseSeq = (n) =>[...Array(n)].map((el, i) => i+1).reverse();

//cara ke 4
const reverseSeq = (n) =>[...Array(n)].map((el, i) => n-i);

 console.log(reverseSeq(5));
