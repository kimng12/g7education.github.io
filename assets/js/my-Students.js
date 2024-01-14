//Comment: This is the javascript file for the my-Students.html page.
import { returnMockStudentList } from './mock-data.js';

document.addEventListener('DOMContentLoaded', async function () {
  const students = await returnMockStudentList();
  console.log('Document is ready.');
  console.log(students);
  function createStudentCard(student) {
    const viewDOM = document.createElement('div');
    viewDOM.className = 'col-md-6 col-lg-4 col-xl-3';
    viewDOM.innerHTML = `                
                  <div class="card widget-profile pat-widget-profile">
                    <div class="card-body">
                      <div class="pro-widget-content">
                        <div class="profile-info-widget">
                          <a class="booking-tutor-img">
                            <img
                              src=${student.profileImageUrl}         
                              alt="User Image"
                            />
                            </a >
                          <div class="profile-det-info">
                            <h3>
                              <a href="Student-profile.html">${student.studentName}</a>
                            </h3>

                            <div class="Student-details">
                              <h5><b>Student ID :</b> ${student.studentId}</h5>
                              <h5 class="mb-0">
                                <i class="fas fa-map-marker-alt">${student.location}</i> 
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="Student-info">
                        <ul>
                          <li>Phone <span>${student.phoneNumber}</span></li>
                          <li>Age <span>${student.age}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
               `;
    const viewClick = viewDOM.querySelector('.profile-info-widget');
    viewClick.addEventListener('click', () => toStudentProfile(student));
    return viewDOM;
  }
  function renderStudentList() {
    console.log('Rendering student list.');
    const studentList = document.querySelector('.student-container');
    console.log(studentList);
    if (studentList) {
      studentList.innerHTML = '';
      console.log(students);
      students.forEach((student) => {
        console.log(student);
        studentList.appendChild(createStudentCard(student));
      });
    }
  }
  function toStudentProfile(student) {
    console.log('Navigating to student profile.');
    localStorage.setItem('student', JSON.stringify(student));
    window.location.href = `Student-profile.html`;
  }
  renderStudentList();
});
