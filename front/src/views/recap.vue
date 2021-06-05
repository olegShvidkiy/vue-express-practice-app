<template>
  <div class="page">
    <nav
      class="container-xxl navbar navbar-expand-lg navbar-light bg-transparent"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <h1>
            Manki <span class="fs-4 text-muted fw-light">focuse mode</span>
          </h1>
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
          <div class="navbar-nav">
            <a class="nav-link fs-5" href="/">Exit</a>
          </div>
        </div>
      </div>
    </nav>

    <main class="container-xxl px-4">
      <div class="row justify-content-center" id="app">
        <div class="col-lg"></div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="card stack">
            <item
              v-bind:item="
                $store.state.model.items[$store.state.model.curentItem]
              "
            />
          </div>
          <div class="mt-5">
            <button
              @click="changeStatus('#198754')"
              class="btn btn-success w-100 mb-1"
              id="#198754"
            >
              Remember well
            </button>
            <button
              @click="changeStatus('#ffc107')"
              class="btn btn-warning w-100 mb-1"
              id="#ffc107"
            >
              Kinda remember
            </button>
            <button
              @click="changeStatus('#dc3545')"
              type="button"
              class="btn btn-danger w-100 mb-1"
              id="#dc3545"
            >
              Can't remember
            </button>
          </div>
        </div>
        <div class="col-lg"></div>
      </div>
    </main>
    <div class="container-xxl mt-1">
      <footer class="text-muted text-center text-small">
        <p class="mb-1">© 2021 Alex Khaustovych Lab</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>
<script>
import item from "../components/item.vue";
export default {
  components: { item },
  name: "recap",
  created() {
    //  this.$store.dispatch("CREATE_ITEMS");
  },
  mounted() {},
  methods: {
    changeStatus(status) {
      this.$store.commit("CHANGE_STATUS", status);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(0, 0, 0, 0);
}
</style>