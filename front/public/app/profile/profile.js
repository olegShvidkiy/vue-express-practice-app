if (JSON.parse(sessionStorage.getItem("user_is_logged"))) {
  const curentUser = JSON.parse(sessionStorage.getItem("curentUser"));
  document.querySelector("#name").innerHTML =
    curentUser.first_name + " " + curentUser.last_name;
  document.querySelector("#learned").innerHTML = curentUser.cards_learned;
  document.querySelector("#flipped").innerHTML = curentUser.cards_flipped;
}
