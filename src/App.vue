<template>
  <header></header>

  <main>
    <h2>Nè di Venere nè di Marte...</h2>

    <div v-for="item in CFG.itemsList" :key="item.id">
      <div>
        {{ item.name }}
        -
        {{ item.price }} Euro
      </div>
      <img :src="item.image" :alt="item.name" width="500" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
// import { useSpreadsheet } from './composables/useSpreadsheet'

// const { get } = useSpreadsheet(CFG.spreadSheetIds.gifts)

// get()
</script>
