import { returnAppointmentByStudentId } from './mock-data.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Document is ready.');
  const student = JSON.parse(localStorage.getItem('student'));
  console.log(student);
  const appointment = returnAppointmentByStudentId(student.studentId);
  console.log(appointment);

  function setStickySidebar() {
    console.log('Setting sticky sidebar.');
    const profileImage = document.querySelector('.booking-tutor-img');
    profileImage.setAttribute('src', student.profileImageUrl);
    const studentName = document.querySelector('.profile-det-info');
    studentName.innerHTML = `
        <h3><a href="Student-profile.html">${student.studentName}</a></h3>
        <div class="Student-details">
                          <h5><b>Student ID :</b> ${student.studentId}</h5>
                          <h5 class="mb-0">
                            <i class="fas fa-map-marker-alt"></i> ${student.location}   
                          </h5>
                        </div>
        `;
    const studentInfo = document.querySelector('.Student-info');
    studentInfo.innerHTML = `
            <ul>
            <li>Phone <span>${student.phoneNumber}</span></li>
            <li>Age <span>${student.age}</span></li>
            </ul>
            `;
  }
  function setAppointmentTableBody() {
    console.log('Setting appointment table body.');
    const appointmentTableBody = document.querySelector('.table-body');
    appointmentTableBody.innerHTML = '';
    appointment.forEach((data) => {
      console.log(data);
      appointmentTableBody.appendChild(createAppointmentTableRow(data));
    });
  }
  function createAppointmentTableRow(data) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log(formattedDate);
    let status = '';
    let className = '';
    if (data.course.startDate > formattedDate) {
      status = 'Upcoming';
      className = 'badge badge-pill bg-warning-light';
    } else if (
      data.course.startDate <= formattedDate &&
      data.course.endDate >= formattedDate
    ) {
      status = 'Ongoing';
      className = 'badge badge-pill bg-primary-light';
    } else {
      status = 'Completed';
      className = 'badge badge-pill bg-success-light';
    }
    console.log(status);
    const viewDOM = document.createElement('tr');
    viewDOM.innerHTML = `
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
                                      <a href="Tutor-profile.html"
                                        >${data.tutor.name} <span>${data.course.courseID}</span></a
                                      >
                                    </h2>
                                  </td>
                                     <td>
                                    ${data.course.startDate}
                                  </td>
                                     <td>${data.course.endDate}</td>
                                     <td>${data.course.courseID}</td>
                                    <td><span class="${className}">${status}</span></td>
        `;
    return viewDOM;
  }
  setStickySidebar();
  setAppointmentTableBody();
});
