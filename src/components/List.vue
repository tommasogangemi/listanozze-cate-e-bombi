<template>
  <v-container style="border: 1px solid red">
    <h1>LIST</h1>

    <v-row>
      <v-col v-for="gift in gifts" cols="12" md="6" lg="4" :key="gift.id">
        <GiftCard :gift="gift" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
import GiftCard from './GiftCard.vue'

// import { CFG } from '@/cfg'
// import { useSpreadsheet } from '@/composables/useSpreadsheet'
// import { ref } from 'vue'

// const { get, spreadSheet, addRow } = useSpreadsheet(CFG.spreadSheetIds.gifts)

// const userInput = ref('')

// get()

const gifts = CFG.itemsList
</script>
