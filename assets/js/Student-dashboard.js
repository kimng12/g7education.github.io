import {
  returnAppointmentByStudentId,
  returnStudentById,
} from './mock-data.js';
document.addEventListener('DOMContentLoaded', async function () {
  const fetchUser = await returnStudentById('STU101');
  localStorage.setItem('currentUser', JSON.stringify(fetchUser));
  const student = JSON.parse(localStorage.getItem('currentUser'));
  const appointments = returnAppointmentByStudentId(student.studentId);

  function renderSidebarData() {
    const sidebarElement = document.querySelector('.profile-sidebar');
    const img = sidebarElement.querySelector('img');
    img.src = student.profileImageUrl;
    const name = sidebarElement.querySelector('h3');
    name.innerText = student.studentName;
    const description = sidebarElement.querySelector('h5');
    description.innerText = student.location;
  }

  function renderUpcomingTableData() {
    const tableElement = document.querySelector('#appointments');
    console.log(tableElement);
    const tableBody = tableElement.querySelector('tbody');
    tableBody.innerHTML = '';

    for (let i = 0; i < appointments.length; i++) {
      const row = renderTableRow(appointments[i], i);
      tableBody.appendChild(row);
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
