<template>
  <header></header>

  <main style="height: 100%">
    <!-- <h2>Nè di Venere nè di Marte...</h2>

    <div v-for="item in CFG.itemsList" :key="item.id">
      <div>
        {{ item.name }}
        -
        {{ item.price }} Euro
      </div>
      <img :src="item.image" :alt="item.name" width="500" />
    </div> -->

    <img id="landing-img" src="@/assets/landing_img.jpg" alt="landing" />

    <div class="footer">
      <h1 class="footer-text">...coming soon</h1>
    </div>
  </main>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
// import { useSpreadsheet } from './composables/useSpreadsheet'

// const { get } = useSpreadsheet(CFG.spreadSheetIds.gifts)

// get()
</script>

<style scoped>
#landing-img {
  width: 100%;
}

.footer {
  width: 100%;
  padding: 36px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
