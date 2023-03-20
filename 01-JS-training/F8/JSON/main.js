/*
1. JSON là một định dạng dữ liệu (chuỗi) -> tuyệt đối lưu ý nó là định dạng chứ không phải kiểu dữ liệu
2. JSON - JavaScript Object Notation 
và được sử dụng ở bất cứ ngôn ngữ lập trình nào chứ k ràng buộc trong mỗi JS 
3. JSON: number,boolean, null, array, object
JSON bao gồm cả encode and decode hoặc chính xác hơn là Stringify and Parse
Stringigy: JS types -> JSON
Parse: revert with stringify
prototype: content of JSON between ''
*/
// let json = '1',
//   json2 = 'nul',
//   json3 = '"abc"'; //string type
// let jsonArr = '["JS","OP"]';
// let jsonObj = '{"name":"Javascript","price":50}';
// console.log(JSON.parse(json));
// console.log(JSON.parse(json3));
// console.log(JSON.parse(jsonObj));

// console.log(JSON.stringify(true));
// console.log(typeof JSON.stringify(true));
// console.log(
//   JSON.stringify({
//     name: 'Hieu',
//     age: 22,
//     test: function () {}, //JSON k nhan kieu function
//   })
// );

/* Promise
là khái niệm để sử lý các thao tác bất đồng bộ, có từ phiên bản es6 để giải quyết tình trạng callback hell

- Sync
- Async: setTimeout, setInterval, fectch, XMLHttpRequest, file reading, request animation frame
1. new Promise
2. Excutor
When we run promise code if we don't status success or failure it will be pending -> cause memory leak
Three status of promise:
1.Pending
2.rejected
3. fulfilled
*/

// let promise = new Promise(
//   //Executor
//   function (resolve, reject) {
//     // Logic
//     //Success: resolve()
//     //fail: reject()
//     resolve();
//   }
// );

// promise
//   .then(function () {
//     console.log('Successfuly');
//   })
//   .catch(function () {
//     console.log('Failure');
//   })
//   .finally(function () {
//     console.log('Done');
//   });

//Promise (chain)
// promise
//   .then(function () {
//     return 1;
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   }) //theo tính chất của promise chain thì các khối code sẽ chạy theo tuần tự(đồng bộ) kể cả có sử dụng setTimeout thì nó vẫn tuần tự
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log('Failure');
//   })
//   .finally(function () {
//     console.log('Done');
//   });

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }

// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(3);
//     return sleep(1000);
//   });

// function hell(value, cb) {
//   cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell
// hell(1, function (valueFromA) {
//   hell(valueFromA + 1, function (valueFromB) {
//     hell(valueFromB + 1, function (valueFromC) {
//       hell(valueFromC + 1, function (valueFromD) {
//         console.log(valueFromD + 1);
//       });
//     });
//   });
// });

// // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//   return new Promise(function (resolve) {
//     resolve(value);
//   });
// }

// notHell(1)
//   .then(function (value) {
//     return value + 1;
//   })
//   .then(function (value) {
//     return value + 1;
//   })
//   .then(function (value) {
//     return value + 1;
//   })
//   .then(function (value) {
//     console.log(value + 1);
//   });

//Promise example
let users = [
  {
    id: 1,
    name: 'Ha Hieu',
  },
  {
    id: 2,
    name: 'Thu Thuy',
  },
  {
    id: 3,
    name: 'Thu Phuong',
  },
];

let comments = [
  {
    id: 1,
    user_id: 1,
    content: 'Hieu yeu Thuy',
  },
  {
    id: 2,
    user_id: 2,
    content: 'Thuy yeu Hieu',
  },
  {
    id: 3,
    user_id: 3,
    content: 'Phuong la ban than Hieu',
  },
];

//1. Get  comments
//2. Get user_id from comments
//3. Take approciate users from user_id

// Fake API - simulator you have API to get information in this situation
// function getComments() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(comments);
//     }, 1000);
//   });
// }

// function getUsersByIds(userIds) {
//   return new Promise(function (resolve) {
//     let result = users.filter(function (user) {
//       return userIds.includes(user.id);
//     });
//     resolve(result);
//   });
// }

// getComments()
//   .then(async function (comments) {
//     let userIds = comments.map(function (comment) {
//       return comment.user_id;
//     });
//     const users = await getUsersByIds(userIds);
//     return { users: users, comments: comments };
//   })
//   .then(function (data) {
//     let commentBlock = document.getElementById('comment-block');
//     let html = '';
//     data.comments.forEach(function (comment) {
//       let user = data.users.find(function (user) {
//         return user.id === comment.user_id;
//       });
//       html += `<li>${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
//   });

/*
*Fetch:
- JSON server: API server
-CRUD: Create - Read - Update - Delete
Follow REST API standart : CRUD apperociate with methods: Post - get - put/patch - delete
- Postman
*/

// let postApi = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(postApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (posts) {
//     // let htmls = posts.map(function (post) {
//     //   return `<li>${post.title}</li>`;
//     // });
//     // let html = htmls.join('');
//     // document.getElementById('post-block').innerHTML = html;
//     console.log(posts);
//   })
//   .catch(function (err) {
//     alert('Have error');
//   });

//JSON server - through fake server we install
//JSON server: API server (fake) / Mock API
// let courseApi = ' http://localhost:3000/course';
// fetch(courseApi).then(function (response) {
//   return response.json().then(function (courses) {
//     console.log(courses);
//   });
// });

//Using Postman to work with REST API
