console.log("Works");
if (JSON.parse(sessionStorage.getItem("user_is_logged"))) {
  location.replace("../profile/profile.html");
}

const form = document.querySelector("form");
form.onsubmit = () => {
  let input_fields = form.querySelectorAll("input");
  let first_name = input_fields[0].value;
  let last_name = input_fields[1].value;
  let email = input_fields[2].value;
  let sex = input_fields[3].checked ? "male" : "female";
  let mothertongue = form.querySelectorAll("select").value;
  let password = input_fields[5].value;
  users.add_user(first_name, last_name, email, sex, mothertongue, password);
};
