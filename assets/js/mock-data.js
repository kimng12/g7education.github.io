const apiURL = 'http://localhost:3000';
async function returnMockStudentList() {
  const students = await fetch(apiURL + '/students/all')
    .then((response) => response.json())
    .then((data) => data);

  return students;
}
async function returnCourse() {
  const courses = await fetch(apiURL + '/courses/all')
    .then((response) => response.json())
    .then((data) => data);
  return courses;
}
async function returnAppointmentList() {
  const appointments = await fetch(apiURL + '/appointments/all')
    .then((response) => response.json())
    .then((data) => data);
  return appointments;
}
async function returnMockTutorList() {
  const tutors = await fetch(apiURL + '/tutors/all')
    .then((response) => response.json())
    .then((data) => data);
  return tutors;
}
async function returnAppointmentByStudentId(studentId) {
  const result = await fetch(apiURL + '/appointments/student/' + studentId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnAppointmentByTutorId(tutorId) {
  const result = await fetch(apiURL + '/appointments/tutor/' + tutorId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnCoursesByTutorId(tutorId) {
  const result = await fetch(apiURL + '/courses/tutor/' + tutorId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnStudentById(studentId) {
  const result = await fetch(apiURL + '/students/' + studentId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnTutorById(tutorId) {
  const result = await fetch(apiURL + '/tutors/' + tutorId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnCourseById(courseId) {
  const result = await fetch(apiURL + '/courses/' + courseId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function returnAppointmentById(appointmentId) {
  const result = await fetch(apiURL + '/appointments/' + appointmentId)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function createNewCourse(data) {
  const result = await fetch(apiURL + '/courses/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
export {
  returnMockStudentList,
  returnCourse,
  returnAppointmentList,
  returnMockTutorList,
  returnAppointmentByStudentId,
  returnAppointmentByTutorId,
  returnCoursesByTutorId,
  returnStudentById,
  returnTutorById,
  returnCourseById,
  returnAppointmentById,
  createNewCourse,
};
