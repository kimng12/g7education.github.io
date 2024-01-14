import { returnCoursesByTutorId, returnTutorById } from './mock-data.js';
document.addEventListener('DOMContentLoaded', async function () {
  const fetchUser = await returnTutorById('TUT101');
  localStorage.setItem('currentUser', JSON.stringify(fetchUser));
  const tutor = JSON.parse(localStorage.getItem('currentUser'));
  const courses = returnCoursesByTutorId(tutor.tutorId);
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
  renderSidebarData();
  renderCoursesTableData();
});
