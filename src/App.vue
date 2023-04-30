<template>
  <v-app class="bg-neutral">
    <header></header>

    <v-main>
      <Suspense>
        <List />
      </Suspense>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import List from './components/List.vue'
</script>
