<template>
  <h1 class="pretty-font font-weight-bold text-primary-light text-center">Mattia e Caterina</h1>

  <h2 class="pretty-font text-primary-light text-center mt-2 mb-8">2 Settembre 2023</h2>

  <v-img src="thread.png" class="thread-icon" />

  <v-row justify="center" class="mb-8">
    <v-col cols="10" md="9" class="rounded-lg bg-neutral-lighten-1 elevation-2">
      <v-img cover src="heading-image.jpg" aspect-ratio="1.7" class="rounded-lg" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>

<style scoped>
.thread-icon {
  position: absolute;
  transform: rotate(43deg);
  pointer-events: none;
  top: -150px;
  left: 18%;
  right: 18%;
}

h1 {
  margin-top: 80px;
}

@media screen and (min-width: 600px) {
  .thread-icon {
    top: -450px;
    left: 20%;
    right: 20%;
  }

  h1 {
    margin-top: 140px;
  }
}
</style>
