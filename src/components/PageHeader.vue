<template>
  <h1 class="pretty-font font-weight-bold text-primary-light text-center mt-8 mb-3 mb-md-0">
    Mattia e Caterina
  </h1>

  <v-row justify="center">
    <v-col cols="10" class="py-0">
      <v-img src="thread-cropped.png" />
    </v-col>
  </v-row>

  <h2 class="pretty-font text-primary-light text-center mb-8 mt-3 mt-md-0">2 Settembre 2023</h2>

  <v-row justify="center" class="mb-8">
    <v-col cols="10" md="9" class="rounded-lg bg-neutral-lighten-1 elevation-2 pa-0">
      <v-img cover src="heading-image.jpg" aspect-ratio="1.7" class="rounded-lg" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>
