<template>
  <div class="home">
    <nav
      class="container-xxl navbar navbar-expand-lg navbar-light bg-transparent"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href=".index.html">
          <h1>Manki</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav" v-if="userIsLogged == false">
            <a class="nav-link fs-5" href="./app/about/about.html">About</a>
            <a class="nav-link fs-5" href="./app/login/login.html">Log In</a>
            <a class="nav-link fs-5" href="./app/sign_up/sign_up.html"
              >Sign Up</a
            >
          </div>
          <div class="navbar-nav" v-else>
            <a class="nav-link fs-5" href="./app/about/about.html">About</a>
            <a class="nav-link fs-5" href="./app/profile/profile.html"
              >Profile</a
            >
            <a @click="logout()" class="nav-link fs-5" href="/">Log Out</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="container-xxl px-4">
      <div class="row g-5">
        <div class="col-lg">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title pb-2">
                Easy way to memorise word meanings, formulas, deffenitions and a
                lot more!
              </h2>
              <p class="card-text">
                Cillum quis dolore nulla sunt ad. Officia ullamco quis et magna
                ullamco. Adipisicing ullamco anim officia duis esse in eu culpa.
                Eiusmod laborum esse ex aute deserunt.
              </p>
              <p class="card-text">
                Nulla commodo Lorem ipsum sint eiusmod esse. Ad non cupidatat
                aliqua aliqua dolor sunt adipisicing tempor amet ea laborum.
                Lorem tempor pariatur elit veniam ex tempor. Enim duis
                consectetur eu sint anim est pariatur ut laborum.
              </p>
              <p class="card-text">
                Lorem id quis duis exercitation occaecat consequat tempor in
                ipsum do. Elit proident occaecat fugiat sit et. Incididunt
                tempor eiusmod laborum id consequat aute occaecat quis occaecat
                nisi anim magna. Amet sit dolor culpa sit ullamco officia sit
                velit culpa do tempor proident excepteur. Fugiat pariatur do
                amet ea labore esse enim anim voluptate anim veniam laborum ad.
                Consequat ut sunt consequat reprehenderit proident enim ea. Et
                tempor in duis esse minim et sint enim.
              </p>
              <router-link
                v-if="userIsLogged"
                to="/recap"
                class="btn btn-primary"
                id="start"
              >
                Start memorising!
              </router-link>
              <a
                v-else
                href="../../../app/sign_up/sign_up.html"
                class="btn btn-primary"
                id="start"
              >
                Start memorising!
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="wrapper">
            <div class="card lang1">
              <div class="card-body">
                <h5 class="card-title lang">Terve</h5>
              </div>
            </div>
            <div class="card lang2">
              <div class="card-body">
                <h5 class="card-title lang">今日は</h5>
              </div>
            </div>
            <div class="card lang3">
              <div class="card-body">
                <h5 class="card-title lang">Hola</h5>
              </div>
            </div>
            <div class="card lang4">
              <div class="card-body">
                <h5 class="card-title lang">নমস্কাৰ</h5>
              </div>
            </div>
            <div class="card lang5">
              <div class="card-body">
                <h5 class="card-title lang">Привіт</h5>
              </div>
            </div>
            <div class="card lang6">
              <div class="card-body">
                <h5 class="card-title lang">Hi</h5>
              </div>
            </div>
            <div class="card lang7">
              <div class="card-body">
                <h5 class="card-title lang">Bonjour</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="app"></div>
    </main>
    <div class="container-xxl">
      <div class="row">
        <div class="col-lg">
          <footer class="text-muted text-center text-small">
            <p class="mb-1">© 2021 Example App</p>
          </footer>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userIsLogged: false,
    };
  },
  components: {},
  created() {
    if (!sessionStorage.getItem("user_is_logged")) {
      sessionStorage.setItem("user_is_logged", JSON.stringify(false));
    }
    this.userIsLogged = JSON.parse(sessionStorage.getItem("user_is_logged"));
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((result) => this.$store.dispatch("CREATE_ITEMS", result))
      .catch((error) => console.log("error", error));

    console.log(this.userIsLogged);
  },
  methods: {
    logout() {
      sessionStorage.setItem("user_is_logged", JSON.stringify(false));
    },
  },
};
</script>
