console.log("Works");
const nav = document.getElementsByClassName("nav-link");
if (JSON.parse(sessionStorage.getItem("user_is_logged"))) {
  nav[1].setAttribute("href", "./app/profile/profile.html");
  nav[1].innerHTML = "Profile";
  nav[2].setAttribute("href", "index.html");
  nav[2].innerHTML = "Log Out";
  nav[2].onclick = () => {
    sessionStorage.setItem("user_is_logged", JSON.stringify(false));
  };
  document.querySelector("#start").onclick = () => {
    location.replace("../../app/recap/recap.html");
  };
} else {
  document.querySelector("#start").onclick = () => {
    location.replace("../../app/login/login.html");
  };
}
