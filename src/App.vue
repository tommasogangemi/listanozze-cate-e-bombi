<template>
  <header></header>

  <main class="h-100">
    <Suspense>
      <List />
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import List from './components/List.vue'
</script>
