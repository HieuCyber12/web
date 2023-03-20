// let js = 'amazing';
// if (js === 'amazing')
//     alert('JavaScript is FUN!');
// console.log(40 + 2 + 23 + 5 - 10);

// let, const and var?

//let age = 30;
//age = 31; //re_assigning

//const PI = 3.14;
//const birthYear = 2000;
// It is cannot legal if we declar like
// const job; because const declaration need intialize

// var is old way to declare varialbe like let but we should avoid it

//var job = 'programmer';
//job = 'teacher';
// let is block scoped
//var is function scoped
// this command below not get error because instead create a var it create an property for global object so we must avoid this using of command. So must declare or intialize with data type

// lastName = 'Hieu';
// console.log(lastName);

//Assignment operators +,-,*,/,++,--,**
//const ageHieu = 2022 - 2000;
//const ageLinh = 19;
//console.log(ageHieu);
//console.log(ageHieu * 2, ageHieu / 2, 5 * 6, 2 ** 3);
// 2**3 means 2 to the power of 3: 2*2*2

//const firstName = 'Ha';
//const lastName = 'Hieu';
//console.log(firstName + ' ' + lastName);
//let x = 15;
//x += 10;
//x *= 4;

//console.log(x);
//Comparision operator: > < >= <=
//console.log(ageHieu > ageLinh);
// const lastName = 'Hieu';
// const job = 'Developer';
// const birthYear = 2000;
// const year = 2022;
// const hieu = "I'm " + lastName + ', a ' + (year - birthYear) + ' years old ' + job;
// console.log(hieu);

// const hieuNew = `I'm ${lastName}, a ${year - birthYear} years old ${job}!`;
// console.log(hieuNew);
// console.log(`Just a regular string...`);
// console.log(`String with \n\
// multiple\n\
// line`);

// console.log(`String
// multiple
// lines`);

//const age = 17;
//const isOldEnough = age >= 18;
//if (isOldEnough) {
//    console.log('Hieu can start driving license ');
//}
//else {
//    const yearsLeft = 18 - age;
//    console.log(`Hieu cannot start driving license. Pls wait ${yearsLeft} years`);
//}
// const inputYear = '1991';
// console.log(Number(inputYear) + 20);
// console.log(Number('Hieu'));
// console.log(typeof Number('Hieu'));
//output will be NaN(Not a Number) --> an invalid number
// console.log('I am' + 23 + 'years old');
// console.log('23' + '10' + 3);
// console.log(typeof ('23' + '10' + 3));
// console.log('23' + '10' - 3);
// console.log(typeof ('23' + '10' - 3));

// 5 falsy values: 0,undefined,NaN, null, ''
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Hieu'));
// console.log(Boolean({}));
// console.log(Boolean(''));

//const age = 18;
//if (age === 18) {
//    console.log("You just became an adult :D (strict)");
//}
//if (age == 18)
//    console.log('You just became an udult :D (loose)');
// One thing you must to remember that you should use strict comparision to avoid bug when coding because reason below

//const age1 = '18';
//if (age1 === 18) {
//    console.log("You just became an adult :D (strict)");
//}
//if (age1 == 18);
//console.log(`You just became an aldult when you are ${age1} (loose)`);
// bug logic because == will automatic tranfer string 18 to number and compare so we will hard to find bug logic

//const favourite = prompt("What's your favourite number?");
//console.log(favourite);
//console.log(typeof favourite);
//bcs when we input by promt it will be a string so we must
//if (Number(favourite) === 23) {
//    console.log('Cool! 23 is an amazing number!');
//}//or
//if (number == 25)
//    console.log('Cool! 25 is an amazing number!');
// or we can covert on variable
//const favourite2 = Number(prompt("What's your favourite number?"));
//console.log(favourite2);
//console.log(typeof favourite2);
//if (Number(favourite2) === 23) {
//    console.log('Cool! 23 is an amazing number!');
//}

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)
//     console.log('Dolphins win');
// else if (dolphinsAverage < koalasAverage && koalasAverage >= 100)
//     console.log('Koalas win');
// else if (dolphinsAverage === koalasAverage && dolphinsAverage + koalasAverage >= 200)
//     console.log('Dolphins and Koalas are draw');
// else
//     console.log('No team win');

// const day = 'monday';
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekedn :D');
//         break;
//     default:
//         console.log('Not a valid day');
// }
// let bill = 430;
// const tip = (bill >= 50 && bill <= 300) ? bill * 15 / 100 : bill * 20 / 100;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

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

//This is arrow function
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
