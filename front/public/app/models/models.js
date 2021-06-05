class User {
  constructor() {
    // this.users = [
    //   {
    //     password: "admin",
    //     first_name: "John",
    //     last_name: "Weyn",
    //     email: "admin@admin.com",
    //     sex: "male",
    //     avatar:
    //       "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     overal_learning_time: Date(0, 0, 0, 2, 10),
    //     cards_learned: 234,
    //     cards_flipped: 673,
    //     mothertongue: "Ukrainian",
    //     token: "wqe789qwe978r6df7wdf78rec78",
    //   },
    // ];
    this.users = JSON.parse(sessionStorage.getItem("users"));
    this.changesDetected = false;
    return this.onUsersChange();
  }

  get_users() {
    return this.users;
  }

  add_user(
    first_name,
    last_name,
    email,
    sex,
    mothertongue,
    password,
    avatar = "",
    overal_learning_time = 0,
    cards_learned = 0,
    cards_flipped = 0,
    token = ""
  ) {
    const lettersForTokken = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i <= 10; i++) {
      token +=
        lettersForTokken[Math.floor(Math.random() * lettersForTokken.length)];
    }
    this.users.push({
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email,
      sex: sex,
      avatar: avatar,
      overal_learning_time: overal_learning_time,
      cards_learned: cards_learned,
      cards_flipped: cards_flipped,
      mothertongue: mothertongue,
      token: token,
    });
    this.changesDetected = !this.changesDetected;
  }
  check_user_login(email, password) {
    for (let user of this.users) {
      if (user.email == email) {
        return user.password == password ? user.token : false;
      }
    }
    return false;
  }

  onUsersChange() {
    const handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        sessionStorage.setItem("users", JSON.stringify(this.users));
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
if (!sessionStorage.getItem("users")) {
  sessionStorage.setItem("users", JSON.stringify([]));
}
let users = new User();
if (
  !JSON.stringify(sessionStorage.getItem("user_is_logged")) ||
  !sessionStorage.getItem("curentUser")
) {
  sessionStorage.setItem("user_is_logged", JSON.stringify(false));
}
