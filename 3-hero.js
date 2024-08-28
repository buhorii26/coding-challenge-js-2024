// day 3/366
// link : https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// function hero(bullets, dragons) {
//   //Get Coding!
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

function hero(bullets, dragons) {
  //Get Coding!
  return bullets / 2 >= dragons;
}

// callback function
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
