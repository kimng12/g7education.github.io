import {
  returnAppointmentByStudentId,
  returnStudentById,
  returnTutorById,
  returnCourseById,
} from './mock-data.js';
document.addEventListener('DOMContentLoaded', async function () {
  const fetchUser = await returnStudentById('STU101');
  console.log(fetchUser);
  localStorage.setItem('currentUser', JSON.stringify(fetchUser[0]));
  const student = JSON.parse(localStorage.getItem('currentUser'));
  console.log(student);
  const appointments = await returnAppointmentByStudentId(student.studentId);

  function renderSidebarData() {
    const sidebarElement = document.querySelector('.profile-sidebar');
    const img = sidebarElement.querySelector('img');
    img.src = student.profileImageUrl;
    const name = sidebarElement.querySelector('h3');
    name.innerText = student.studentName;
    const description = sidebarElement.querySelector('h5');
    description.innerText = student.location;
  }

  async function renderUpcomingTableData() {
    const tableElement = document.querySelector('#appointments');
    console.log(tableElement);
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';
    console.log(appointments);
    for (let i = 0; i < appointments.length; i++) {
      const course = await returnCourseById(appointments[i].courseId);
      const courseData = course[0];
      const tutor = await returnTutorById(appointments[i].tutorId);
      const row = renderTableRow(
        { tutor: tutor[0], course: courseData, filter: appointments },
        i
      );
      tableBody.appendChild(row);
    }
    if (tableBody.innerHTML == '') {
      const row = renderNoAppointmentRow();
      tableBody.appendChild(row);
    }
  }
  function renderNoAppointmentRow() {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td colspan="4">No appointments found</td>
        `;
    return row;
  }
  function renderTableRow(data, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
                                    <td>
                                    <h2 class="table-avatar">
                                      <div
                                        class="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          class="avatar-img rounded-circle"
                                          src=${data.tutor.profileImageUrl}
                                          alt="User Image"
                                        />
                                      </div>
                                      <div
                                        >${data.tutor.name}<span>${data.tutor.tutorId}</span></div
                                      >
                                    </h2>
                                  </td>
                                  <td>
                                    ${data.filter[index].appointmentDate}
                                  </td>
                                  
                                  <td>${data.course.courseID}</td>
                                  <td>${data.course.name}</td>
            `;
    return row;
  }
  renderSidebarData();
  renderUpcomingTableData();
});
