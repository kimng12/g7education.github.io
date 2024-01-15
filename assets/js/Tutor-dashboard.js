import {
  returnAppointmentByTutorId,
  returnTutorById,
  returnCourseById,
  returnStudentById,
} from './mock-data.js';

document.addEventListener('DOMContentLoaded', async function () {
  const fetchUser = await returnTutorById('TUT101');
  localStorage.setItem('currentUser', JSON.stringify(fetchUser[0]));
  const tutor = JSON.parse(localStorage.getItem('currentUser'));
  const appointments = await returnAppointmentByTutorId(tutor.tutorId);
  console.log(appointments);
  function renderSidebarData() {
    const sidebarElement = document.querySelector('.profile-sidebar');
    const img = sidebarElement.querySelector('img');
    img.src = tutor.profileImageUrl;
    const name = sidebarElement.querySelector('h3');
    name.innerText = tutor.name;
    const description = sidebarElement.querySelector('h5');
  }
  async function renderUpcomingTableData() {
    const tableElement = document.querySelector('#upcoming-appointments');
    console.log(tableElement);
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';

    for (let i = 0; i < appointments.length; i++) {
      if (getAppointmentStatus(appointments[i]) == 'Upcoming') {
        const course = await returnCourseById(appointments[i].courseId);
        const courseData = course[0];
        const student = await returnStudentById(appointments[i].studentId);
        const row = renderTableRow(
          { student: student[0], course: courseData, filter: appointments },
          i
        );
        tableBody.appendChild(row);
      }
    }
    if (tableBody.innerHTML == '') {
      const row = renderNoAppointmentRow();
      tableBody.appendChild(row);
    }
  }
  function renderTodayTableData() {
    const tableElement = document.querySelector('#today-appointments');
    console.log(tableElement);
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';
    for (let i = 0; i < appointments.length; i++) {
      if (getAppointmentStatus(appointments[i]) == 'Today') {
        const course = returnCourseById(appointments[i].courseId);
        const courseData = course[0];
        const student = returnStudentById(appointments[i].studentId);
        const row = renderTableRow({ student, course: courseData }, i);
        tableBody.appendChild(row);
      }
    }
    if (tableBody.innerHTML == '') {
      const row = renderNoAppointmentRow();
      tableBody.appendChild(row);
    }
  }
  function renderTableRow(data, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
             <td>
                                      <h2 class="table-avatar">
                                        <div
                                          class="avatar avatar-sm mr-2"
                                          ><img
                                            class="avatar-img rounded-circle"
                                            src=${data.student.profileImageUrl}
                                            alt="User Image"
                                        /></div>
                                        <a href="Student-profile.html"
                                          >${data.student.studentName}
                                          <span>${data.student.studentId}</span></a
                                        >
                                      </h2>
                                    </td>
                                    <td>
                                      ${data.filter[index].appointmentDate}
                                    </td>
                                    <td>
                                    ${data.course.courseID}
                                    </td>
                                      <td>
                                    ${data.course.name}
                                    </td>
                                 
                                    
        `;
    return row;
  }
  function renderNoAppointmentRow() {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td colspan="4" style="text-align: center;">No appointments found.</td>
        `;
    return row;
  }

  function getAppointmentStatus(appointment) {
    let currentDate = new Date();
    currentDate.toISOString().split('T')[0];
    const appointmentDate = new Date(appointment.appointmentDate);
    if (appointmentDate > currentDate) {
      return 'Upcoming';
    } else {
      return 'Today';
    }
  }

  renderSidebarData();
  renderUpcomingTableData();
  renderTodayTableData();
});
