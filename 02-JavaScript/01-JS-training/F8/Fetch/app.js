let courseApi = ' http://localhost:3000/course';
function start() {
  getCourses(renderCourses);
  handleCreateForm();
}

start();

//Functions
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  let listCoursesBlock = document.querySelector('#list-courses');
  let htmls = courses.map(function (course) {
    return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">delete</button>
        </li>
        `;
  });
  listCoursesBlock.innerHTML = htmls.join('');
}

function createCourse(data, callback) {
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleCreateForm() {
  let createBtn = document.querySelector('#create');
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('input[name="description"]').value;
    let formData = {
      name: name,
      description: description,
    };
    createCourse(formData);
  };
}

function handleDeleteCourse(id) {
  let options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(courseApi + '/' + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      let courseItem = document.querySelector('.course-item-' + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
