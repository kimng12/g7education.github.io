import { returnAppointmentList } from './mock-data.js';
document.addEventListener('DOMContentLoaded', async function () {
  const appointments = await returnAppointmentList();
  function acceptAppointment(student) {
    //TODO: Implement this function
    console.log(student);
    alert('Appointment Accepted!!!');
    // Implement further actions
  }

  // Function to handle 'Cancel' button click
  function cancelAppointment(student) {
    console.log(student);
    alert('Appointment Denied!!!');
    // Implement further actions
  }

  // Function to handle 'View' button click
  function viewDetails() {
    // Code display modal with appointment details
    $('#appt_details').modal('show');
  }

  // Attaching event listeners to 'View' buttons
  document.querySelectorAll('.bg-info-light').forEach((button) => {
    button.addEventListener('click', viewDetails);
  });
  function createStudentInformationCard(student) {
    const viewDOM = document.createElement('div');
    viewDOM.innerHTML = `
     								<div class="appointment-list">
									<div class="profile-info-widget">
										<a href="Student-profile.html" class="booking-tutor-img">
											<img src=${student.profileImageUrl} alt="User Image">
										</a>
										<div class="profile-det-info">
											<h3><a href="Student-profile.html">${student.studentName}</a></h3>
											<div class="Student-details">
												<h5><i class="far fa-clock"></i>${student.appointmentDate}</h5>
												<h5><i class="fas fa-map-marker-alt"></i>${student.location}</h5>
												<h5><i class="fas fa-envelope"></i>${student.email}</h5>
												<h5 class="mb-0"><i class="fas fa-phone"></i>${student.phoneNumber}</h5>
											</div>
										</div>
									</div>
									<div class="appointment-action">
										<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
											<i class="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
											<i class="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
    `;
    viewDOM
      .querySelector('.bg-success-light')
      .addEventListener('click', () => acceptAppointment(student));
    viewDOM
      .querySelector('.bg-danger-light')
      .addEventListener('click', () => cancelAppointment(student));

    return viewDOM;
  }
  function renderStudentAppointmentsList() {
    console.log('Rendering student appointments list.');
    const studentAppointmentsList = document.querySelector('.appointments');
    console.log(studentAppointmentsList);
    if (studentAppointmentsList) {
      studentAppointmentsList.innerHTML = '';
      appointments.forEach((student) => {
        console.log(student);
        studentAppointmentsList.appendChild(
          createStudentInformationCard(student)
        );
      });
    }
  }

  console.log('Document is ready.');
  renderStudentAppointmentsList();
});
