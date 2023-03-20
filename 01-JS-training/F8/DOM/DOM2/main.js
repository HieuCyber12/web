// let boxNode = document.querySelector('.box1');
// console.log(boxNode);
// console.log(boxNode.getElementsByTagName('li'));
// console.log(boxNode.querySelector('p'));

//innerText and textContent
//textContent
// let headingElement = document.querySelector('#heading');
// //check console to see the different between innerText and textContent Output
// console.log(headingElement.innerText);
// // headingElement.innerText = 'New heading';
// // console.log(headingElement.innerText);
// console.log(headingElement.textContent);
// headingElement.textContent = '<i>New heading </i>';

//innerHTML and outerHTML -> 2 properties of elementNode
// let boxElement = document.querySelector('.box');
// console.log(boxElement);
// boxElement.innerHTML = '<i>New heading </i>';
// console.log(document.querySelector('i').innerText);
// console.log(boxElement.innerHTML);

//neu su dung boxElement.outerHTML = '<span> Test </span>'; thi span se ghi de len class ='box' va box se khong con ton tai trong DOM nua
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     let myCourses = courses.map(function(course){
//         return `<li>${course}</li>`
//     });
//     document.querySelector('ul').innerHTML = myCourses.join('/n');
// }

//DOM style

// let boxElement = document.querySelector('.box');
// // boxElement.style = '100px';
// // boxElement.style = '200px';
// // boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.getElementsByClassName, {
//   width: '200px',
//   height: '100px',
//   backgroundColor: 'green',
// });
// console.log(boxElement.style);

//ClassList property
/*
add
contains
remove
toggle
....
*/

// let boxElement = document.querySelector('.box');

// console.log(boxElement.classList);

// boxElement.classList.add('red', 'blue');
// function setTimeout de set thoi gian vi du duoi la sau 3s thi chay command
// setTimeout(() => {
//   boxElement.classList.toggle('red');
// }, 3000);

//DOM events
//1. Attribute events - see in the index html to check code (at h1)
//2. Assign event using the element node
// let h2Element = document.querySelector('h2');

// h2Element.onclick = function (mouseEvent) {
//   console.log(mouseEvent.target.innerText);
// };

// let h3Elements = document.querySelectorAll('h3');
// for (let i = 0; i < h3Elements.length; ++i) {
//   h3Elements[i].onclick = function (e) {
//     // console.log(h3Elements[i]); se bi loi neu set variable la var
//     console.log(e.target);
//   };
// }

//DOM event continue
/*
 1.input / select
 2. key up / down
 */

// let inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function (e) {
//   console.log(e.target.value);
// };
// let inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function (e) {
//   console.log(e.target.checked);
// };
// let inputElement = document.querySelector('select');
// inputElement.onchange = function (e) {
//   console.log(e.target.value);
// };
// let inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function (e) {
//   console.log(e.target.value);
// };

/**
 1. preventDefault
 2. stopPropagation
 */
// let aElements = document.links;
// for (let i = 0; i < aElements.length; ++i) {
//   aElements[i].onclick = function(e){
//     if(!e.target.href.startsWith('https://f8.edu.vn')){
//         e.preventDefault();
//     }
//   }
// document.querySelector('div').onclick = function () {
//   console.log('DIV');
// };

// document.querySelector('button').onclick = function (e) {
//   e.stopPropagation();
//   console.log('Click me');
// };

/*Event listener */
// let btn = document.querySelector('#btn');
// console.log(btn);

// btn.addEventListener('click', function (e) {
//   console.log(Math.random());
// });

// function viec1() {
//   console.log('viec1');
// }
// btn.addEventListener('click', viec1);

// setTimeout(function () {
//   btn.removeEventListener('click', viec1);
// }, 5000);
