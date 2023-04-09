<template>
  <header></header>

  <main class="h-100">
    <!-- <h2>Nè di Venere nè di Marte...</h2>

    <div v-for="item in CFG.itemsList" :key="item.id">
      <div>
        {{ item.name }}
        -
        {{ item.price }} Euro
      </div>
      <img :src="item.image" :alt="item.name" width="500" />
    </div> -->

    <img class="w-100" src="@/assets/landing_img.jpg" alt="landing" />

    <div class="w-100 py-16 d-flex justify-center align-center">
      <h1 class="text-primary font-weight-bold">...coming soon</h1>
    </div>
  </main>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
// import { useSpreadsheet } from './composables/useSpreadsheet'

// const { get } = useSpreadsheet(CFG.spreadSheetIds.gifts)

// get()
</script>
