import {
  returnCoursesByTutorId,
  returnTutorById,
  createNewCourse,
} from './mock-data.js';
document.addEventListener('DOMContentLoaded', async function () {
  const fetchUser = await returnTutorById('TUT101');
  localStorage.setItem('currentUser', JSON.stringify(fetchUser[0]));
  const tutor = JSON.parse(localStorage.getItem('currentUser'));
  const courses = await returnCoursesByTutorId(tutor.tutorId);
  console.log(courses);
  function renderCoursesTableData() {
    const tableElement = document.querySelector('#courses');
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';
    for (let i = 0; i < courses.length; i++) {
      const row = renderTableRow(courses[i]);
      tableBody.appendChild(row);
    }
    if (tableBody.innerHTML == '') {
      const row = renderNoCourseRow();
      tableBody.appendChild(row);
    }
  }
  function renderTableRow(data) {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${data.courseID}</td>
            <td>${data.name}</td>
            <td>${data.startDate}</td>
            <td>${data.endDate}</td>
        `;
    return row;
  }
  function renderNoCourseRow() {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td colspan="4">No courses found</td>
      `;
    return row;
  }
  function renderSidebarData() {
    const sidebarElement = document.querySelector('.profile-sidebar');
    const img = sidebarElement.querySelector('img');
    img.src = tutor.profileImageUrl;
    const name = sidebarElement.querySelector('h3');
    name.innerText = tutor.name;
    const phoneNumber = sidebarElement.querySelector('h5');
    phoneNumber.innerText = tutor.phoneNumber;
  }
  function renderPage() {
    renderSidebarData();
    renderCoursesTableData();
    setFields();
  }
  function setFields() {
    document.querySelector('#name').value = tutor.name;
    document.querySelector('#mobile').value = tutor.phoneNumber;
    document.querySelector('#address').value = tutor.location;
    document.querySelector('#age').value = tutor.age;
  }
  async function addCourse() {
    const name = document.querySelector('#create-course-name').value;
    const startDate = document.querySelector('#create-course-startDate').value;
    const endDate = document.querySelector('#create-course-endDate').value;
    const tutorId = tutor.tutorId;
    const startDateYYYYMMDD = changeDateFormatToYYYYMMDD(startDate);
    const endDateYYYYMMDD = changeDateFormatToYYYYMMDD(endDate);
    const data = {
      name,
      startDate,
      endDate,
      tutorId,
    };
    const newCourse = await createNewCourse(data);
    courses.push(newCourse);
    clearFields();
    renderCoursesTableData();
  }
  function clearFields() {
    document.querySelector('#create-course-name').value = '';
    document.querySelector('#create-course-startDate').value = '';
    document.querySelector('#create-course-endDate').value = '';
  }

  const button = document.querySelector('#create-course-btn');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    addCourse();
  });
  renderPage();
});
