/////////////////////////////////////////////
const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-140%";
}
/////////////////////////////////////////////
// Account Password Toggler

const togglePassword = document.querySelector("#eyes");
const password = document.querySelector("#id_password");

if (password) {
  togglePassword.addEventListener("click", function (e) {
    //Toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    //Toggle eye slash icon
    this.classList.toggle("fa-eye-slash");
  });
}

// Middle divider toggler
function toggle() {
  var x = document.getElementById("togglerdiv");
  //Conditions placed
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
