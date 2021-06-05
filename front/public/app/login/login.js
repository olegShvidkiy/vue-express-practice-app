let form = document.querySelector("form");
form.onsubmit = (event) => {
  event.preventDefault();
  let input = form.querySelectorAll("input");
  let email = input[0];
  let password = input[1];
  let log_info = users.check_user_login(email.value, password.value);
  // console.log(log_info);
  if (!log_info) {
    // false
    let allert = document.createElement("div");
    allert.classList = ["alert alert-danger mt-4"];
    allert.setAttribute("role", "alert");
    allert.innerText = "Incorrect email or password";
    form.append(allert);
    password.value = "";
    setTimeout(() => (allert.style.display = "none"), 5000);
  } else {
    /* token
        todo save token to session storrage
        location replace profile
        in profilr validate token
        add profile editor
        add stack creation
        add card adding
        add stack and card delete
        add main page functionality
        */
    let curentUser;
    JSON.parse(sessionStorage.getItem("users")).forEach((item) => {
      // console.log(item);
      if (item.token == log_info) {
        curentUser = item;
        sessionStorage.setItem("curentUser", JSON.stringify(curentUser));
        sessionStorage.setItem("user_is_logged", JSON.stringify(true));
        location.replace("../profile/profile.html");
      }
    });

    console.log(curentUser);
  }
};
