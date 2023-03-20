// // // 'use restric';
// // alert('Hello');
// // // Object data type
// // var myObject = {
// //   name: 'Hieu',
// //   age: 22,
// //   address: 'Lao Cai',
// //   sex: 'male',
// //   hobby: 'programing, singing, reading, researching',
// // };
// // console.log(myObject);
// // //functione
// // let isPrime = function () {};
// // // Rule to set the name of a function
// // // A function's name can contain: a-z, A-Z,.. like C but it can be add $ sign at the first ex: $babe -> similarity with Java

// // // To code more clear -> each function has only 1 mission
// // function showDialog() {
// //   alert('Hi xin chao cac ban');
// // }
// // //() is 'call' operator so when you call a function u must use it
// // showDialog();

// // // function writeLog() {
// // //   var myString = '';
// // //   for (var parem of arguments) {
// // //     myString += `${parem} - `;
// // //   }
// // //   console.log(myString);
// // // }
// // // writeLog('Ha', 'Viet', 'Hieu', 'Dinh Cap Lap Trinh Vien');

// //Working with String
// // // let myString = 'Hoc lap trinh JS tai F8';
// // // let myString2 = 'Hoc lap trinh JS JS tai F8';
// //String methods:
// //1.Length

// //2.Find index -> support to check the first element appearence

// // // console.log(myString.indexOf('JS')); //(1)
// // // console.log(myString2.indexOf('JS'));
// // // console.log(myString.indexOf('JS', 6)); // --> start to find at position 6

// // lastIndexOf find index of last element appearence
// // // console.log(myString.lastIndexOf('JS'));

// //Search doesn't support to set the position to find like ('JS',6)
// // // console.log(myString.search('JS')); // will run like (1)

// //3.Cut String

// //with slice
// //Cut from left-side
// // // console.log(myString.slice(15, 16)); // will cut JS at p15-p16
// // when remove the second parameter -> remove 16 we will cut all elements from 15 to end

// //Cut from right-side using negative position
// // // console.log(myString.slice(-9, -8));

// //4. Replace
// // // console.log(myString.replace('JS', 'Javascript')); //but it only replace 1 JS. If have mutilply JS how to replace?
// //-> solve Proplem: Using 'Bieu thuc chinh quy'
// // // console.log(myString2.replace(/JS/g, 'Javascript'));

// //5. Convert to UPPER and lower case
// // // console.log(myString.toLocaleUpperCase());
// // // console.log(myString.toLocaleLowerCase());

// //6. Trim
// // // let myString3 = '     Hoc JS tai F8      ';
// // // console.log(myString3.length);
// // // console.log(myString3.trim().length);
// // // console.log(myString3.trim());

// //7. Split  --> to tranfer a string list to array
// // // let programingLanguage = 'JS, C, C++, Java';
// // // let programingLanguage2 = 'Javascript'; //split by null
// // // console.log(programingLanguage.split(', ')); //split by using common parameter in the list
// // // onsole.log(programingLanguage2.split(''));

// //8. Get a character by index
// // // let myString4 = 'Ha Viet Hieu';
// // // console.log(myString4.charAt(1));
// // // console.log(myString4.charAt(2));
// // // console.log(typeof myString4.charAt(20)); //check with error case

// // // console.log(myString4[1]);
// // // console.log(typeof myString4[20]); //check with error case

// // // /*
// // // Đối tượng Number
// // // Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

// // // Phương thức	:Vai trò
// // // Number.isFinite():	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// // // Number.isInteger():	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// // // Number.parseFloat():	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// // // Number.parseInt():	Chuyển đổi chuỗi đã cho thành một số nguyên
// // // Number.prototype.toFixed():	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// // // Number.prototype.toString():	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
// // //  */
// // // /*
// // // Number.isFinite(2 / 0); // false
// // // Number.isFinite(20 / 5); // true
// // // Number.isFinite(0 / 0); // false

// // // Number.isInteger(999999999); // true
// // // Number.isInteger(0.2);       // false
// // // Number.isInteger(Math.PI);   // false

// // // Number.parseFloat('10') // 10
// // // Number.parseFloat('10.00') // 10
// // // Number.parseFloat('238,21') // 238
// // // Number.parseFloat('237.22') // 237.22
// // // Number.parseFloat('34 56 78') // 34
// // // Number.parseFloat(' 37 ') // 37
// // // Number.parseFloat('18 is my age') // 18

// // // Number.parseInt('10') // 10
// // // Number.parseInt('10.00') // 10
// // // Number.parseInt('238,21') // 238
// // // Number.parseInt('237.22') // 237
// // // Number.parseInt('34 56 78') // 34
// // // Number.parseInt(' 37 ') // 37
// // // Number.parseInt('18 is my age') // 18

// // // var numberObject = 1234.56789;

// // // numberObject.toFixed(); // '1235'
// // // numberObject.toFixed(1); // '1234.6'
// // // numberObject.toFixed(6); // '1234.567890'

// // // (11).toString();    // '11'
// // // (18).toString();     // '18'
// // // (17.3).toString();   // '17.3'
// // // */

// // WORKING with NUMBEZ
// // -To strong
// // -TO fixed

// // // let age = 22;
// // // let PI = 3.14;

// // // let result = 20 / 'AB';
// // // console.log(result);
// // Func to check NaN -> mention that JS not sp to check == and === to check NaN
// // // console.log(isNaN(result));

// // // let myConvert = age.toString();
// // // console.log(PI.toFixed()); // but after fixed PI will convert to string -> u can using typeof to check datatype
// // Note: if you don't input any parameter in toFixed it will be default 0
// // // console.log(PI.toFixed(2));

// // // /*
// // //   WORKING with ARRAY
// // //   1. Create an array
// // //     - How to create
// // //     - The recommend ways to use? Why?
// // //     - Check datatype?
// // //   2. Acess to array
// // //     - length of arr
// // //     - get element by index
// // // */
// //In JS it sp to contain difference datatype in an array
// // // let languages = [
// // //   'Javascript',
// // //   'PHP',
// // //   'Ruby',
// // //   null,
// // //   undefined,
// // //   function () {},
// // //   {},
// // //   123,
// // // ];
// //Or you can create by
// //let languages2 = new Array(); --> Not recommend using this way
// // // console.log(languages);
// // To check an array we can
// // // console.log(Array.isArray(languages));
// // // /*
// // // Outline:
// // // 1.To String
// // // 2. Join
// // // 3. Pop
// // // 4. Push
// // // 5. Shift
// // // 6. Unshift
// // // 7. Splicing
// // // 8. Concat
// // // 9. Slicing
// // // You can learn more by search: JS array methods
// // //  */
// // let languages2 = ['Javascript', 'PHP', 'Ruby'];

// // //1. To String
// // console.log(languages2.toString());

// // //2. Join -> to change ,
// // console.log(languages2.join(' - '));

// // //3. Pop -> delete the last element in arr and return it
// // console.log(languages2.pop());
// // console.log(languages2);
// // //when remove all element by pop if you continue with this null arr it will be returned undefined

// // //4. push
// // languages2.push('Ruby', 'Dart', 'Java');
// // console.log(languages2);

// // //5. Shift like pop but remove and return first element in arr
// // console.log(languages2.shift());
// // console.log(languages2);

// // //6. unshift -> like push but difference position
// // languages2.unshift('JS');
// // console.log(languages2);

// // //7. Splicing -> can remove, cut or insert new element into arr

// // //remove
// // // languages2.splice(1, 1);
// // // console.log(languages2);
// // // languages2.splice(1, 2);
// // // console.log(languages2);
// // // languages2.splice(1, 0);
// // // console.log(languages2);

// // //insert
// // // languages2.splice(1, 0, 'C');
// // // console.log(languages2);
// // // languages2.splice(1, 1, 'C++');
// // // console.log(languages2);

// // //8. concat -> to concentrate arr

// // let languages3 = ['Golang', 'C#', 'Python'];
// // console.log(languages2.concat(languages3));

// // //9. Slicing -> to cut elements
// // languages2.splice(1, 3);
// // languages3.splice(0); // in advance it is copy this arr

// //Object trong JS

// let sexKey = 'sex';
// let myInfo = {
//   name: 'Hieu',
//   age: 22,
//   [sexKey]: 'male', //or can use sex directly
//   address: 'Lao Cai',
//   major: 'SE',
//   getName: function () {
//     return this.name;
//   },
// };

// myInfo['my-email'] = 'hieuhvhe176256@fpt.edu.vn'; //to set an illegal name

// myInfo.id = 'hvhe176256';

// //the first way below cannot be used in some cases
// console.log(myInfo.name);
// console.log(myInfo['age']);

// let myKey = 'address';
// //-> cannot use dot operator with myKey so use second way
// console.log(myInfo[myKey]);

// //Object constructor

// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.getName = function () {
//     return `${this.firstName}  ${this.lastName}`;
//   };
// }

// //gan new property cho object
// let author = new User('Son', 'Dang', 'Avatar');
// let user = new User('Hieu', 'Ha', 'Avatar');

// author.title = 'Chia se tai F8';
// user.comment = 'Thanks ad';

// //check ham nguyen mau
// console.log(author);
// console.log(author.constructor);
// console.log(author.constructor === User);

// console.log(user);

// console.log(author.getName());
// console.log(user.getName());

// /*
// Object prototype - Basic
//   1. what is prototype?
//   2. when do we use this?
//   If we want to add more new property into the constructor after it declared
//  Note: when we use prototype it will save in _protp_ when we read in console tab
//   */

// // Example:
// /* function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
//   this.getName = function () {
//     return `${this.firstName}  ${this.lastName}`;
//   };
// }*/

// User.prototype.className = 'F8';
// User.prototype.getClassName = function () {
//   return this.className;
// };
// console.log(author.getClassName());
// console.log(user.className);

//Object: Date
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();
// console.log(date);
// console.log(`${day}/${month}/${year}`);

// // /* Math Object
// // - Math.PI
// // -math.round()
// // -math.abs()
// // -math.ceil()
// // -math.floor()
// // -math.random()
// // -math.min()
// // -math.max()

// // */

// let date = 2;
// if (date === 2) {
//   console.log('Today is Monday');
// } else if (date === 3) {
//   console.log('Today is Tuesday');
// } else if (date == 4) {
//   console.log('Today is Wednesday');
// }

// function run(a) {
//   if (a % 3 === 0 && a % 15 !== 0) {
//     return 1;
//   } else if (a % 5 === 0 && a % 15 !== 0) {
//     return 2;
//   } else if (a % 15 === 0) {
//     return 3;
//   }
// }

// // Kỳ vọng
// console.log(run(3)); // 1
// console.log(run(5)); // 2
// console.log(run(15)); // 3

//Ternary Operator

// let course = {
//   name: 'JavaScript',
//   coin: 250,
// };
// if (course.coin > 0) {
//   console.log(`${course.coin} Coins`);
// } else {
//   console.log('Free');
// }

// let result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result);

// let i;
// let arr = [];
// function getRandNumbers(min, max, length) {
//   for (i = 0; i < length; i++) {
//     arr[i] = Math.random() * (max - min) + min;
//   }
//   return arr;
// }
// console.log(getRandNumbers(5, 20, 8));

// function getTotal(arr) {
//   let i;
//   let sum = 0;

//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// Expected results
// console.log(getTotal([1, 2, 3])); // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

// let arr = ['JavaScripts', 'PHP', 'Python', 'Java', 'C', 'Golang'];
// // Assign in this way will Optimize to the browser faster than acess arr.length each loop
// let arrayLength = arr.length;

// for (let i = 0; i < arrayLength; i++) {
//   console.log(arr[i]);
// }
// var orders = [
//   {
//     name: 'Khóa học HTML - CSS Pro',
//     price: 3000000,
//   },
//   {
//     name: 'Khóa học Javascript Pro',
//     price: 2500000,
//   },
//   {
//     name: 'Khóa học React Pro',
//     price: 3200000,
//   },
// ];

// function getTotal(arr) {
//   let i;
//   let total = 0;
//   let arrayLength = arr.length;
//   for (i = 0; i < arrayLength; i++) {
//     total += arr[i].price;
//   }
//   return total;
// }

// // Expected results:
// getTotal(orders); // Output: 8700000
// console.log(getTotal(orders));

//For - in
// let myInfo = {
//   name: 'Hieu Ha',
//   age: 22,
//   address: 'Lao Cai',
//   major: 'SE',
// };

// for (let key in myInfo) {
//   console.log(myInfo[key]);
// }
// let subjects = ['JavaScripts', 'PHP', 'Python', 'Java', 'C', 'Golang'];

// for (var key in subjects) {
//   console.log(key);
//   console.log(subjects[key]);
// }
// function run(object) {
//   let arr = [];
//   for (let key in object) {
//     let log = `Thuộc tính ${key} có giá trị ${object[key]}`;
//     arr.push(log);
//   }
//   return arr;
// }
// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

//For/of loop

// let subjects = ['JavaScripts', 'PHP', 'Python', 'Java', 'C', 'Golang'];

// for (let value of subjects) {
//   console.log(value);
// }

// let subject1 = 'Javascript';
// for (let value of subject1) {
//   console.log(value); //Will be seperate the string contain in subject1
// }

// //with Object you cannot using for of like arr so you can using for-of by some ways below
// let myInfo = {
//   name: 'Ha Hieu',
//   age: 22,
// };

// for (let value of Object.keys(myInfo)) {
//   console.log(value);
//   console.log(myInfo[value]);
// }
// //Or
// for (let value of Object.values(myInfo)) {
//   console.log(value);
// }

//do-while

// let i = 0;
// let isSuccess = false;

// do {
//   i++;

//   console.log('Enter passwords ' + i + ' time');
//   if (true) {
//     isSuccess = true;
//   }
// } while (!isSuccess && i <= 3);

// let myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j++) {
//     console.log(myArray[i][j]);
//   }
// }

// for (let i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

// // /*
// // object 'Set' in JS

// // Set has unique element -> element cannot duplicate
// // */
//Problem: Delete duplicate elements then print array after solve without loop
// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
//... is solve operator -> this syntax below convert object Set to be an array
// console.log([...new Set(array)]);

// Mention:
// // /*
// // Loop -> CPU
// // Recursion -> RAM
// //     Recursion:
// //         Step1: Define stop point
// //         Step2: Logic handle -> create a stop point
// // */

//Recursion

//ex: Create a countdown application
// function countDown(num) {
//   if (num >= 0) {
//     console.log(num);
//     return countDown(num - 1);
//   }
//   return num;
// }

// countDown(10);

// function loop(start, end, cb) {
//   if (start <= end) {
//     cb(start);
//     return loop(start + 1, end, cb);
//   }
// }

// let array = ['JS', 'Java', 'C', 'Python'];
// loop(0, array.length - 1, function (index) {
//   console.log('index: ', index);
//   console.log(array[index]);
// });

//Build a function to calculate factorial
//First way
// let fact = 1;
// function factorial_1(num) {
//   if (num > 0) {
//     fact = num * factorial_1(num - 1);
//   }
//   return fact;
// }
// //Second way
// function factorial_2(num) {
//   if (num > 0) {
//     return num * factorial_2(num - 1);
//   }
//   return 1;
// }
// console.log(factorial_2(5));
// console.log(factorial_1(3));

//Working with array part 2
// // /*
// //     Array methods:
// //         forEach() - using to traversal
// //         every() - to check all elements with condiction
// //         some()
// //         find()
// //         filter()
// //         map()
// //         reduce()
// // */

// // let courses = [
// //   {
// //     id: 1,
// //     name: 'Javascript',
// //     coin: 250,
// //   },
// //   {
// //     id: 2,
// //     name: 'HTML, CSS',
// //     coin: 0,
// //   },
// //   {
// //     id: 3,
// //     name: 'Ruby',
// //     coin: 0,
// //   },
// //   {
// //     id: 4,
// //     name: 'Python',
// //     coin: 350,
// //   },
// //   {
// //     id: 5,
// //     name: 'ReactJS',
// //     coin: 500,
// //   },
// //   {
// //     id: 6,
// //     name: 'ReactJS',
// //     coin: 500,
// //   },
// // ];
// //forEach
// courses.forEach(function (course, index) {
//   console.log(index, course);
// });

//every() - check from first if true -> continue to check next element if false -> return the boolean value --> The course list of F8 follow this rule

// let isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);

//some - when every is check for all(true) -> some check for only 1 element if it true (gap phan tu dau tien bang true thi stop luon k giong every se kiem tra tat ca co true khong)

// let isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);

//find - tim thay phan tu se gan nguoc vao course - chi tim dc 1 thoi(tuc la trong truong hop nay neu co 2 Ruby thi chi tra ve phan tu dau tien no tim thay)
// let course = courses.find(function (course, index) {
//   return course.name === 'Ruby';
// });
// console.log(course);

//filter - giong find nhung tim kiem duoc nhieu phan tu hon
// let course = courses.filter(function (course, index) {
//   return course.name === 'ReactJS';
// });
// console.log(course);

//Excersice:
// const sports = [
//   {
//     name: 'Bóng rổ',
//     like: 6,
//   },
//   {
//     name: 'Bơi lội',
//     like: 5,
//   },
//   {
//     name: 'Bóng đá',
//     like: 10,
//   },
// ];

// function getMostFavoriteSport(sports) {
//   return sports.filter(function (sports) {
//     return sports.like > 5;
//   });
// }

// // Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

//Array map() - trong map phai truyen vao 1 doi so neu khong se bi loi like below:
// let newCourses = courses.map(fun);
// console.log(newCourses);
//Similarity:  undefined();
// function courseHandler(course) {
//   console.log(course);
// }

// function courseHandler(course) {
//     return 123;
//   }
// function courseHandler(course) {
//     return course;
// }
// function courseHandler(course, index) {
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: course,
//   };
// }
// let newCourses = courses.map(courseHandler);
// console.log(newCourses);

//Trong thuc te thi map() co the su dung de view cho nguoi dung bang cach nhung HTML

// function courseHandler(course) {
//   return `<h2>${course.name}</h2>`;
// }

// let newCourses = courses.map(courseHandler);
// console.log(newCourses.join(''));

//Aray - reduce() - su dung khi muon nhan ve gia tri duy nhat vi du nhu trong course de tim tong so coin
// xu li = for -> thuc te tat ca cac method arr su dung tren deu su dung for tuy nhien su dung method giup code ngan gon hon
// // /*
// // Compare:
// // 1. Easy to understand
// //     for win
// // 2. Shorter
// //     method win
// // 3. Performence
// //     for win
// // However we using method to save time because it shorter than for and don't effect to much on performance
// //  */
// let totalCoin = 0;
// for (let course of courses) {
//   totalCoin += course.coin;
// }
// console.log(totalCoin);

//function la doi so bat buoc phai co neu k se loi
// let i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   i++;

//   let total = accumulator + currentValue.coin;
//   console.table({
//     'Luot chay: ': i,
//     'Bien tich tru: ': accumulator,
//     'Gia khoa hoc: ': currentValue.coin,
//     'Tich tru duoc': total,
//   });
//   //   console.log(currentValue);
//   return accumulator + currentValue.coin;
// }

// let totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);

//Final function - Vanila JS

// let totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }, 0);
// console.log(totalCoin);

// Final function - ES6
// let totalCoin = courses.reduce((a, b) => a + b.coin, 0);
// console.log(totalCoin);

//Excercise:
// var sports = [
//   {
//     name: 'Bơi lội',
//     gold: 11,
//   },
//   {
//     name: 'Boxing',
//     gold: 3,
//   },
//   {
//     name: 'Đạp xe',
//     gold: 4,
//   },
//   {
//     name: 'Đấu kiếm',
//     gold: 5,
//   },
// ];

// function getTotalGold(sports) {
//   return sports.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.gold,
//     0
//   );
// }

// // Expected results:
// console.log(getTotalGold(sports)); // Output: 23

// let totalCoin = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0); //initial value -> unnecessary but when we don't declare initial value the progress will be changed -> progress 5 time

// //with initial value the acumulator start by 0

// //without initial value the acumulator start by first object and currentValue will be second object -> progress 4 time

// //initial value will be delacred depend on datatype of result we want
// //In the case we don't need to set initital value to get result we don't need to intialize it like this case bellow

// let numbers = [1, 2, 3, 5, 8, 9];
// let sumNum = numbers.reduce(function (total, num) {
//   return total + num;
// });
// console.log(sumNum);

//Flat - "Lam phang mang tu Dept array" - Mang sau(tranform to same level to work)
// let deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// let flatArray = deptArray.reduce(function (flatOutput, deptItem) {
//   return flatOutput.concat(deptItem);
// }, []);
// console.log(flatArray);

// // let topics = [
// //   {
// //     topic: 'Front-end',
// //     courses: [
// //       {
// //         id: 1,
// //         title: 'HTML, CSS',
// //       },
// //       {
// //         id: 2,
// //         title: 'Javascript',
// //       },
// //     ],
// //   },
// //   {
// //     topic: 'Back-end',
// //     courses: [
// //       {
// //         id: 1,
// //         title: 'PHP',
// //       },
// //       {
// //         id: 2,
// //         title: 'NodeJS',
// //       },
// //     ],
// //   },
// // ];

// // let newCourses = topics.reduce(function (course, topic) {
// //   return course.concat(topic.courses);
// // }, []);
// // console.log(newCourses);

//Using map() to render course to HTML
// // let htmls = newCourses.map(function (course) {
// //   return `
// //         <div>
// //             <h2>${course.title}</h2>
// //             <p>${course.id}</p>
// //         </div>
// //             `;
// // });
// // console.log(htmls.join(''));

// var watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
//     Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//   },
// ];

// // FIRST-way: Create 3 mini function to calculate

// function calculateRating(watchList) {
//   let movieList = watchList.filter(function (watchList) {
//     return watchList.Director === 'Christopher Nolan';
//   });

//   let IMDBSum = movieList.reduce(function (imdb, movieList) {
//     return imdb + parseFloat(movieList.imdbRating);
//   }, 0);

//   let averageIMDB = IMDBSum * (1 / movieList.length);
//   //   console.log(averageIMDB);
//   return averageIMDB;
// }

// //Second-way:
// function calculateRating(watchList) {
//   var chirstopherList = watchList.filter(function (movie) {
//     return movie.Director === 'Christopher Nolan';
//   });
//   return (
//     chirstopherList.reduce(function (totalRating, movie) {
//       return totalRating + parseFloat(movie.imdbRating);
//     }, 0) *
//     (1 / chirstopherList.length)
//   );
// }

// // Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

//Logic of array-reduce() - thong qua build lai nguyen mau reduce de hieu cach hoat dong
// Array.prototype.reduce2 = function (callback, initialValue) {
//   let i = 0;
//   // kiem tra xem users co truyen arguments vao khong neu co truyen thi arguments == 2
//   if (arguments.length < 2) {
//     i = 1;
//     initialValue = this[0];
//   }
//   for (; i < this.length; i++) {
//     initialValue = callback(initialValue, this[i], i, this);
//   }
//   return initialValue;
// };
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce2((total, number) => {
//   return total + number;
// });

// console.log(result);
//Know this progress through the prototype you rebuild in the last lesson of MR Son
// function arrToObj(arr) {
//   return arr.reduce((obj, curr) => {
//     obj[curr] = curr;
//     // initial value {} to transfer mini arr in arr to become an object    //InitialValue = {} -> In obj ={} :<- assign first curr {name: 'Son Dang} <--> curr[0] is element like 'name' or 'age' and curr[1] is element like 'Son Dang' and '18'

//     return obj;
//     //for continue to run then assign the second curr to obj -> get {name: 'Sơn Đặng', age: 18} -> end loop -> return obj
//   }, {});
// }
// // Expected results:
// var arr = [
//   ['name', 'Sơn Đặng'],
//   ['age', 18],
// ];

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//String/Array includes() method: use to check element in arr an str
//1-String
// let title = 'The Necromancer';
// console.log(title.includes('Necro'));
// console.log(title.includes('Necro', 2)); //2 is start position to check
// //2-array
// let oldGirlFriend = ['Lan Anh', 'Thao', 'Phuong Anh', 'Quynh Trang', 'P.L.Anh'];
// console.log(oldGirlFriend.includes('Quynh Trang'));
// console.log(oldGirlFriend.includes('Quynh Trang',-1)); //-1 = length - 1 -> = 4
// function sumCb(a, b) {
//   return a + b;
// }
// function subCb(a, b) {
//   return a - b;
// }
// function multiCb(a, b) {
//   return a * b;
// }
// function divCb(a, b) {
//   return a / b;
// }
// function caculate(a, b, cb) {
//   console.log(cb(a, b));
// }

// // Expected results
// caculate(1, 2, sumCb); // Output: 3
// caculate(1, 2, subCb); // Output: -1
// caculate(1, 2, multiCb); // Output: 2
// caculate(3, 1, divCb); // Output: 3

//Re_build map function
// let courses = ['Javascript', 'PHP', 'C', 'C++', 'Python'];
// Array.prototype.map2 = function (callback) {
//   let ouput = [];
//   arrayLength = this.length;

//   for (let i = 0; i < arrayLength; i++) {
//     let result = callback(this[i], i);
//     ouput.push(result);
//   }
//   return ouput;
// };
// let htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));

// //Re_build forEach
// let courses = ['Javascript', 'PHP', 'C', 'C++', 'Python'];
// Array.prototype.forEach2 = function (callback) {
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     } // hasOwnProperty to check PropertyKey. Bcs for_in traverse all element in this, with above situation is prototype. You can run code below to check if you forgot
//     /*Array.prototype.forEach2 = function (callback) {
//   for (let index in this) {
//    console.log(index)
//   }
// }); */
//   }
// };

// courses.forEach2(function (course, index, array) {
//   console.log(course, index, array);
// });

//Rebuild filter()

let courses = [
  {
    name: 'Javascript',
    coin: 680,
    isfinish: true,
  },
  {
    name: 'PHP',
    coin: 860,
    isfinish: false,
  },
  {
    name: 'C',
    coin: 980,
    isfinish: false,
  },
];
//Bonus: You can deep learn by seaching key "value types and reference type"
// Array.prototype.filter2 = function (callback) {
//   let output = [];
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       let result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };
// let filterCourses = courses.filter2(function (course, index, array) {
//   return course.coin > 700;
// });
// console.log(filterCourses);

//Rebuild some()
// Array.prototype.some2 = function (callback) {
//   for (let index in this) {
//     if (this.hasOwnPropety(index)) {
//       if (callback(this[index], index, this)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

//Rebuild every()
// Array.prototype.every2 = function (callback) {
//   let output = true;
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       let result = callback(this[index], index, this);
//       if (!result) {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// };
