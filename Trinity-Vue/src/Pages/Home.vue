<template>
  <v-skeleton-loader
    v-bind="attrs"
    type="card-avatar, article, actions"
  ></v-skeleton-loader>
</template>

<script lang="ts" setup>
let attrs: {
  class: "mb-6";
  boilerplate: true;
  elevation: 2;
};
</script>

<style scoped></style>
