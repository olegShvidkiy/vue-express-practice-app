<template>
  <div
    class="card-body d-flex flex-column justify-content-between"
    v-bind:style="{ background: item.status }"
  >
    <div class="card-title text-center word">{{ item.word }}</div>
    <div class="fs-1 text-center">
      {{ item.transcr }}
    </div>
    <small class="text-muted text-center">Recaped 2 days ago</small>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.card-body {
  transition: 0.4s;
  border-radius: 10px;
  padding: 20px;
}
</style>