<template>
  <v-container>
    <v-row align="center" class="mb-4">
      <v-col>
        <v-divider />
      </v-col>
      <v-col cols="auto">
        <h2 id="lista-nozze" class="font-weight-medium">Lista nozze</h2>
      </v-col>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="gift in gifts" cols="12" md="6" lg="4" :key="gift.id">
        <GiftCard :gift="gift" @click="focusedGift = gift" />
      </v-col>
    </v-row>

    <GiftModal :show="!!focusedGift" :gift="focusedGift" @close-modal="focusedGift = undefined" />
  </v-container>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
import GiftCard from './GiftCard.vue'
import { ref } from 'vue'
import GiftModal from './GiftModal.vue'
import type { EnrichedGift } from '@/composables/useSpreadsheet'

// import { CFG } from '@/cfg'
// import { useSpreadsheet } from '@/composables/useSpreadsheet'

// const { get, spreadSheet, addRow } = useSpreadsheet(CFG.spreadSheetIds.gifts)

// const userInput = ref('')

// get()

const gifts = CFG.itemsList

const focusedGift = ref<EnrichedGift>()
</script>
