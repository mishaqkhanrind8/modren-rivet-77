  // Sidebar open on mobile
  const btnToggler = document.querySelector('.btn-toggler');
  const btnClose = document.querySelector('.btn-close');
  const sidebar = document.getElementById('mySidebar');

  btnToggler.addEventListener('click', () => {
    sidebar.style.display = 'block';
  });

  btnClose.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });

  const myBtn = document.getElementById("myBtn");
const demoAcc = document.getElementById("demoAcc");

myBtn.addEventListener("click", () => {
  demoAcc.style.display = demoAcc.style.display === "block" ? "none" : "block";
});