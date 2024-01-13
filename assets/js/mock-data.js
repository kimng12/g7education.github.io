function returnMockStudentList() {
  const students = [
    {
      studentId: 'STU101',
      studentName: 'Richard Wilson',
      location: 'Newyork, United States',
      email: 'richard@example.com',
      phoneNumber: '+1 923 782 4575',
      profileImageUrl: '../assets/img/Students/Student.jpg',
      age: 20,
    },
    {
      studentId: 'STU102',
      studentName: 'Charlene Reed',
      location: 'North Carolina, United States',
      email: 'charlenereed@example.com',
      phoneNumber: '+1 828 632 9170',
      profileImageUrl: '../assets/img/Students/Student1.jpg',
      age: 21,
    },
    {
      studentId: 'STU103',
      studentName: 'Travis Trimble',
      location: 'Maine, United States',
      email: 'travistrimble@example.com',
      phoneNumber: '+1 207 729 9974',
      profileImageUrl: '../assets/img/Students/Student2.jpg',
      age: 22,
    },
    {
      studentId: 'STU104',
      studentName: 'Carl Kelly',
      location: 'Newyork, United States',
      email: 'carlkelly@example.com',
      phoneNumber: '+1 260 724 7769',
      profileImageUrl: '../assets/img/Students/Student3.jpg',
      age: 24,
    },
    {
      studentId: 'STU105',
      studentName: 'Michelle Fairfax',
      location: 'Indiana, United States',
      email: 'michellefairfax@example.com',
      phoneNumber: '+1 504 368 6874',
      profileImageUrl: '../assets/img/Students/Student4.jpg',
      age: 20,
    },
    {
      studentId: 'STU106',
      studentName: 'Gina Moore',
      location: 'Florida, United States',
      email: 'ginamoore@example.com',
      phoneNumber: '+1 954 820 7887',
      profileImageUrl: '../assets/img/Students/Student5.jpg',
      age: 25,
    },
    {
      studentId: 'STU107',
      studentName: 'Elsie Gilley',
      location: 'Kentucky, United States',
      email: 'elsiegilley@example.com',
      phoneNumber: '+1 315 384 4562',
      profileImageUrl: '../assets/img/Students/Student6.jpg',
      age: 25,
    },
    {
      studentId: 'STU108',
      studentName: 'Joan Gardner',
      location: 'California, United States',
      email: 'joangardner@example.com',
      phoneNumber: '+1 707 2202 603',
      profileImageUrl: '../assets/img/Students/Student7.jpg',
      age: 25,
    },
    {
      studentId: 'STU109',
      studentName: 'Daniel Griffing',
      location: 'New Jersey, United States',
      email: 'danielgriffing@example.com',
      phoneNumber: '+1 973 773 9497',
      profileImageUrl: '../assets/img/Students/Student8.jpg',
      age: 25,
    },
    {
      studentId: 'STU110',
      studentName: 'Walter Roberson',
      location: 'Florida, United States',
      email: 'walterroberson@example.com',
      phoneNumber: '+1 850 358 4445',
      profileImageUrl: '../assets/img/Students/Student9.jpg',
      age: 25,
    },
    {
      studentId: 'STU111',
      studentName: 'Robert Rhodes',
      location: 'California, United States',
      email: 'robertrhodes@example.com',
      phoneNumber: '+1 858 259 5285',
      profileImageUrl: '../assets/img/Students/Student10.jpg',
      age: 25,
    },
  ];

  return students;
}
function returnCourse() {
  const courses = [
    {
      courseID: 'COURSE101',
      startDate: '2024-02-01',
      endDate: '2024-06-30',
      name: 'Mathematics',
    },
    {
      courseID: 'COURSE102',
      startDate: '2024-03-15',
      endDate: '2024-08-15',
      name: 'Physics',
    },
    {
      courseID: 'COURSE103',
      startDate: '2024-05-01',
      endDate: '2024-09-30',
      name: 'Chemistry',
    },
    {
      courseID: 'COURSE104',
      startDate: '2024-07-10',
      endDate: '2024-12-10',
      name: 'Biology',
    },
    {
      courseID: 'COURSE105',
      startDate: '2024-09-05',
      endDate: '2025-01-05',
      name: 'English',
    },
  ];
  return courses;
}
function returnAppointmentList() {
  const appointments = [
    {
      studentId: 'STU101',
      tutorId: 'TUT101',
      courseId: 'COURSE101',
      appointmentDate: '2024-02-01',
    },
    {
      studentId: 'STU101',
      tutorId: 'TUT102',
      courseId: 'COURSE102',
      appointmentDate: '2024-02-01',
    },

    {
      studentId: 'STU102',
      tutorId: 'TUT102',
      courseId: 'COURSE102',
      appointmentDate: '2024-02-12',
    },
    {
      studentId: 'STU103',
      tutorId: 'TUT103',
      courseId: 'COURSE103',
      appointmentDate: '2024-02-20',
    },
    {
      studentId: 'STU104',
      tutorId: 'TUT104',
      courseId: 'COURSE104',
      appointmentDate: '2024-03-01',
    },
    {
      studentId: 'STU105',
      tutorId: 'TUT105',
      courseId: 'COURSE105',
      appointmentDate: '2024-02-11',
    },
    // ... you can add more appointments as needed
  ];
  return appointments;
}
function returnMockTutorList() {
  const tutors = [
    {
      tutorId: 'TUT101',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '+1 234 567 8901',
      profileImageUrl: '../assets/img/Tutors/Tutor.jpg',
    },
    {
      tutorId: 'TUT102',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phoneNumber: '+1 234 567 8902',
      profileImageUrl: '../assets/img/Tutors/Tutor.jpg',
    },
    {
      tutorId: 'TUT103',
      name: 'Emily Johnson',
      email: 'emilyjohnson@example.com',
      phoneNumber: '+1 234 567 8903',
      profileImageUrl: '../assets/img/Tutors/Tutor.jpg',
    },
    {
      tutorId: 'TUT104',
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      phoneNumber: '+1 234 567 8904',
      profileImageUrl: '../assets/img/Tutors/Tutor.jpg',
    },
    {
      tutorId: 'TUT105',
      name: 'Sarah Davis',
      email: 'sarahdavis@example.com',
      phoneNumber: '+1 234 567 8905',
      profileImageUrl: '../assets/img/Tutors/Tutor.jpg',
    },
    // ... more tutors can be added as needed
  ];
  return tutors;
}
function returnAppointmentByStudentId(studentId) {
  const appointments = returnAppointmentList();
  const courses = returnCourse();
  const tutors = returnMockTutorList();
  const students = returnMockStudentList();
  const result = [];
  const filter = appointments.filter(
    (appointment) => appointment.studentId === studentId
  );
  filter.forEach((appointment) => {
    const tutor = tutors.find((tutor) => tutor.tutorId === appointment.tutorId);
    const course = courses.find(
      (course) => course.courseID === appointment.courseId
    );
    const student = students.find(
      (student) => student.studentId === appointment.studentId
    );
    result.push({
      tutor,
      course,
      student,
      filter,
    });
  });
  return result;
}
function returnAppointmentByTutorId(tutorId) {
  const appointments = returnAppointmentList();
  const courses = returnCourse();
  const tutors = returnMockTutorList();
  const students = returnMockStudentList();
  const result = [];
  const filter = appointments.filter(
    (appointment) => appointment.tutorId === tutorId
  );
  filter.forEach((appointment) => {
    const tutor = tutors.find((tutor) => tutor.tutorId === appointment.tutorId);
    const course = courses.find(
      (course) => course.courseID === appointment.courseId
    );
    const student = students.find(
      (student) => student.studentId === appointment.studentId
    );
    result.push({
      tutor,
      course,
      student,
      filter,
    });
  });
  return result;
}
export {
  returnMockStudentList,
  returnCourse,
  returnAppointmentList,
  returnMockTutorList,
  returnAppointmentByStudentId,
  returnAppointmentByTutorId,
};
