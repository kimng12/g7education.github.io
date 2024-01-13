document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem(
    'currentUser',
    JSON.stringify({
      studentId: 'STU101',
      studentName: 'Richard Wilson',
      location: 'Newyork, United States',
      email: 'richard@example.com',
      phoneNumber: '+1 923 782 4575',
      profileImageUrl: '../assets/img/Students/Student.jpg',
      age: 20,
    })
  );
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  function renderProfile() {
    document.querySelector('#name').value = currentUser.studentName;
    document.querySelector('#email').value = currentUser.email;
    document.querySelector('#mobile').value = currentUser.phoneNumber;
    document.querySelector('#address').value = currentUser.location;
    document.querySelector('#age').value = currentUser.age;
  }
  function getData() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let address = document.querySelector('#address').value;
    let age = document.querySelector('#age').value;
    let data = {
      studentId: currentUser.studentId,
      studentName: name,
      location: address,
      email: email,
      phoneNumber: mobile,
      profileImageUrl: currentUser.profileImageUrl,
      age,
    };
    return data;
  }
  const button = document.querySelector('.submit-btn');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    let data = getData();
    localStorage.setItem('currentUser', JSON.stringify(data));
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    renderPage();
  });
  function renderSidebar() {
    const sidebar = document.querySelector('.profile-sidebar');
    const img = sidebar.querySelector('img');
    img.src = currentUser.profileImageUrl;
    const name = sidebar.querySelector('h3');
    name.textContent = currentUser.studentName;
    const age = sidebar.querySelector('.age-sidebar');
    age.textContent = currentUser.age;
    const location = sidebar.querySelector('.location-sidebar');
    location.textContent = currentUser.location;
  }
  function renderPage() {
    renderProfile();
    renderSidebar();
  }
  renderPage();
});
