/*
1. let,const
2. template, literals
3. multi-line string
4. arrow function 
5. classes
6. default parameter values
7. destructuring
8. rest parameters
9. spread
10. enchanced object literals
11. tagged template literal
12. modules
*/

//1. var/let,const
//differenct: scope, hosting
//const/ var,let: assignment

//Code block: if else, loop, {}, ...
// if (true) {
//   var course = 'JS basic!';
//   let test = 123;
// }
// console.log(course);
// console.log(test); // we can acess variable in the scope with var but cannot applie with let and const

// //var  ho tro hosting trong khi let va const thi k
// //const k the thay doi gia tri
// //luu y voi object
// const a = {
//   name: 'JS',
// };
// a.name = 'C'; // cho phep thay doi property

//template literals
// const courseName = 'JS';
// const description = `Course Name: ${courseName}`;
// console.log(description);

//arrow function
//neu viet code k co code block thi sau arrow function => thi se mac dinh la return
// const sum = (a, b) => a + b;
// const obj = (a, b) => ({ a: a, b: b });
// const logger = log => console.log(log); //neu chi co 1 variable thi co the viet k can ()
// // k the su dung arrow function de lam constructors

//default parameters values

function logger(log = 'Gia tri mac dinh!') {
  console.log(log);
}
logger(undefined);

//Enhanced object lierals
let name = 'JS';
let price = 100;

let courseName = {
  name,
  price,
  getName() {
    return name;
  },
};
console.log(courseName);
