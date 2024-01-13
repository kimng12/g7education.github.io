const appointments = [
  {
    studentId: 1,
    studentName: 'Richard Wilson',
    appointmentDate: '14 Nov 2023, 10.00 AM',
    location: 'Newyork, United States',
    email: 'richard@example.com',
    phoneNumber: '+1 923 782 4575',
    profileImageUrl: '../assets/img/Students/Student.jpg',
    age: 20,
  },
  {
    studentId: 2,
    studentName: 'Charlene Reed',
    appointmentDate: '12 Nov 2023, 5.00 PM',
    location: 'North Carolina, United States',
    email: 'charlenereed@example.com',
    phoneNumber: '+1 828 632 9170',
    profileImageUrl: '../assets/img/Students/Student1.jpg',
    age: 21,
  },
  {
    studentId: 3,
    studentName: 'Travis Trimble',
    appointmentDate: '11 Nov 2023, 8.00 PM',
    location: 'Maine, United States',
    email: 'travistrimble@example.com',
    phoneNumber: '+1 207 729 9974',
    profileImageUrl: '../assets/img/Students/Student2.jpg',
    age: 22,
  },
  {
    studentId: 4,
    studentName: 'Carl Kelly',
    appointmentDate: '9 Nov 2023, 9.00 AM',
    location: 'Newyork, United States',
    email: 'carlkelly@example.com',
    phoneNumber: '+1 260 724 7769',
    profileImageUrl: '../assets/img/Students/Student3.jpg',
    age: 24,
  },
  {
    studentId: 5,
    studentName: 'Michelle Fairfax',
    appointmentDate: '9 Nov 2023, 1.00 PM',
    location: 'Indiana, United States',
    email: 'michellefairfax@example.com',
    phoneNumber: '+1 504 368 6874',
    profileImageUrl: '../assets/img/Students/Student4.jpg',
    age: 20,
  },
  {
    studentId: 6,
    studentName: 'Gina Moore',
    appointmentDate: '8 Nov 2023, 3.00 PM',
    location: 'Florida, United States',
    email: 'ginamoore@example.com',
    phoneNumber: '+1 954 820 7887',
    profileImageUrl: '../assets/img/Students/Student5.jpg',
    age: 25,
  },
  {
    studentId: 7,
    studentName: 'Elsie Gilley',
    appointmentDate: '6 Nov 2023, 9.00 AM',
    location: 'Kentucky, United States',
    email: 'elsiegilley@example.com',
    phoneNumber: '+1 315 384 4562',
    profileImageUrl: '../assets/img/Students/Student6.jpg',
    age: 25,
  },
  {
    studentId: 8,
    studentName: 'Joan Gardner',
    appointmentDate: '5 Nov 2023, 12.00 PM',
    location: 'California, United States',
    email: 'joangardner@example.com',
    phoneNumber: '+1 707 2202 603',
    profileImageUrl: '../assets/img/Students/Student7.jpg',
    age: 25,
  },
  {
    studentId: 9,
    studentName: 'Daniel Griffing',
    appointmentDate: '5 Nov 2023, 7.00 PM',
    location: 'New Jersey, United States',
    email: 'danielgriffing@example.com',
    phoneNumber: '+1 973 773 9497',
    profileImageUrl: '../assets/img/Students/Student8.jpg',
    age: 25,
  },
  {
    studentId: 10,
    studentName: 'Walter Roberson',
    appointmentDate: '4 Nov 2023, 10.00 AM',
    location: 'Florida, United States',
    email: 'walterroberson@example.com',
    phoneNumber: '+1 850 358 4445',
    profileImageUrl: '../assets/img/Students/Student9.jpg',
    age: 25,
  },
  {
    studentId: 11,
    studentName: 'Robert Rhodes',
    appointmentDate: '4 Nov 2023, 11.00 AM',
    location: 'California, United States',
    email: 'robertrhodes@example.com',
    phoneNumber: '+1 858 259 5285',
    profileImageUrl: '../assets/img/Students/Student10.jpg',
    age: 25,
  },
];

document.addEventListener('DOMContentLoaded', function () {
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
