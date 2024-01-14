const apiURL = 'http://localhost:3000';
function returnMockStudentList() {
  const students = fetch(apiURL + '/students/all');

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
  const result = await fetch(apiURL + '/appointments/student/' + studentId);
  return result;
}
async function returnAppointmentByTutorId(tutorId) {
  const result = await fetch(apiURL + '/appointments/tutor/' + tutorId);
  return result;
}
async function returnCoursesByTutorId(tutorId) {
  const result = await fetch(apiURL + '/courses/tutor/' + tutorId);
  return result;
}
async function returnStudentById(studentId) {
  const result = await fetch(apiURL + '/students/' + studentId);
  return result;
}
async function returnTutorById(tutorId) {
  const result = await fetch(apiURL + '/tutors/' + tutorId);
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
};
