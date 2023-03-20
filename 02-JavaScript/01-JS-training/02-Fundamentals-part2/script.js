// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest)
//     hasDriversLicense = true;
// if (hasDriversLicense)
//     console.log('I can drive :D');

// function logger() {
//     console.log('My name is Hieu');
// }

// logger();
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

//function declaration:
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// }
//can use this comman before declaration
// const age1 = calcAge1(2000);
// console.log(age1);

//function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }
//cannot use this command before expression
// const age2 = calcAge2(2000);
// console.log(age2);

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2000, 'Hieu'));
// console.log(yearsUntilRetirement(1999, 'Nhat'));
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // let avgDolphins = calcAverage(44, 23, 71);
// // let avgKoalas = calcAverage(85, 54, 41);
// // function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas)
// //         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
// //     else if (avgDolphins * 2 <= avgKoalas)
// //         console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
// //     else
// //         console.log(`No team win (${avgDolphins} vs ${avgKoalas})`);
// // }
// // checkWinner(avgDolphins, avgKoalas);
// // avgDolphins = calcAverage(85, 54, 41);
// // avgKoalas = calcAverage(23, 34, 27);
// // checkWinner(avgDolphins, avgKoalas);

// // const friend1 = 'Thanh';
// // const friend2 = ' Khanh';
// // const friend3 = 'Phuc';

// // const friends1 = { friend1, friend2, friend3 };
// // const friends2 = ['Khanh', 'Thanh', 'Phuc'];
// // console.log(friends1);
// // console.log(friends2);

// // const year = new Array(1991, 1992, 1993, 1994);
// // console.log(year);
// // console.log(year.length);
// // console.log(year[year.length - 1]);
// // const firstName = 'Ha Viet';
// // const hieu = new Array(firstName, 'Hieu', 22, 1.7, 'cyber security engineer', 'Solution Architecture', friends1);
// // console.log(hieu);

// //Add elements push and unshift
// // const friends = ['Khanh', 'Hai', 'Phuc', 'Hieu', 'Tien'];
// // const newLength = friends.push('Binh');
// // friends.push('Dung');
// // friends.unshift('Trang');
// // friends.unshift('PTrang');
// //Remove elements pop and shift
// // const popped = friends.pop();
// // const shirted = friends.shift();

// // console.log(friends);
// //when assign push to a variable it will return length of arr like below
// // console.log(newLength);
// // console.log(popped);
// // console.log(shirted);
// // friends.push(23);
// // located elements: indexOf
// // console.log(friends.indexOf('Phuc'));
// //check elemnts in the Array
// // console.log(friends.includes('Hai'));
// // console.log(friends.includes('Dung'));
// //return false because we push 23 is an number and check a string var
// // console.log(friends.includes('23'));
// // console.log(friends.includes(23));

// // if (friends.includes('Hai'))
// //     console.log("You have a friend called Hai");
// //Step1: Create function
// //Way1: declare a function
// //Reference
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// //Way2:Express func
// // const calcTip = function(bill) {
// //     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }
// //Way3: Arrow func
// // const calcTip = bill =>     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// const total = [];
// or for(let i = 0; i < bills.length; i++){
//     total = bills[i] + tip[i];
// }
// console.log(total);
// //Step2: calculate

// }
// input(n);

// console.log(bills);

// const hieu = {
//     firstName: 'Ha',
//     lastName: 'Hieu',
//     birthYear: 2000,
//     job: 'Cyber security engineer and Solution Architecture ',
//     company: 'Google, TechEyes',
//     friends: ['Hai', 'Lam', 'Thanh', 'Phuc', 'Quang'],

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getData: function () {
//         return `${this.lastName} is a man who is ${this.age} years old. He is a ${this.job} in ${this.company} and have many best friends like ${this.friends}.`;
//     }

// };
// console.log(hieu);
// const nameKey = 'Name';
// console.log(hieu['first' + nameKey]);
// console.log(hieu['last' + nameKey]);
// console.log(typeof hieu['age']);
// console.log(hieu.job);

// const interestedIn = prompt('What is the information of Hieu you want to know: firstName, lastName, age, job,company.Choose one?');
// console.log(hieu[interestedIn]);

// console.log(`Hieu have ${hieu.friends.length} friend and his best friend is ${hieu.friends[4]}`);
// console.log(hieu.calcAge());
// console.log(hieu.age);
// console.log(hieu.getData());

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Killer',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// };
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// };
// if (mark.calcBMI() >= john.calcBMI())
//     console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})`);
// else
//     console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s (${mark.calcBMI()})`);
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`you roll a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
// console.log(`Congatulation you roled ${dice}`);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
