<template>
  <div class="card-wrapper">
    <div v-if="isGifted" class="gifted-overlay d-flex align-center bg-primary pa-2 rounded-lg">
      <v-icon class="mr-2 font-weight-bold" size="large">mdi-check</v-icon>
      <span class="text-h5 font-weight-bold">Regalato</span>
    </div>
    <v-card rounded class="h-100" :disabled="isGifted" @click="$emit('card-click', gift)">
      <v-img :src="gift.image" cover />
      <v-card-title class="text-center d-flex justify-space-between">
        <span class="font-weight-medium truncate">{{ gift.name }}</span>
        <span v-if="!!gift.price" class="font-weight-medium"> {{ gift.price }}€ </span>
      </v-card-title>

      <v-divider class="mb-2" />

      <v-card-text>
        <v-progress-linear
          v-if="!!gift.price"
          :model-value="gift.donatedPercentage"
          color="primary"
          height="15"
          rounded
          :class="gift.donatedPercentage > 48 ? 'text-neutral' : ''"
          class="mb-4"
        >
          <template v-slot:default="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>

        <div class="d-flex" :class="!!gift.price ? 'justify-space-between' : 'justify-center '">
          <span v-if="!gift.price">Contiributo libero</span>
          <v-spacer v-else />
          <template v-if="!!gift.price">
            <span v-if="gift.availableAmount > 0">Disponibili: {{ gift.availableAmount }}€</span>
            <span v-else>Regalato!</span>
          </template>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { EnrichedGift } from '@/composables/useSpreadsheet'
import { computed } from 'vue'
import { toRefs } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'GiftCard' })

type Props = {
  gift: EnrichedGift
}

type Emits = {
  (e: 'card-click', v: EnrichedGift): void
}

const props = defineProps<Props>()

defineEmits<Emits>()

const { gift } = toRefs(props)

const isGifted = computed(() => !!gift.value.price && gift.value.availableAmount < 0)
</script>

<style scoped>
.card-wrapper {
  position: relative;
  height: 100%;
}

.gifted-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
</style>
