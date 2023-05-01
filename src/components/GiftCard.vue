<template>
  <v-card rounded class="h-100" :disabled="gift.availableAmount < 0">
    <v-img :src="gift.image" cover />
    <v-card-title class="text-center d-flex justify-space-between">
      <span class="font-weight-medium">{{ gift.name }}</span>
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
</template>

<script setup lang="ts">
import type { EnrichedGift } from '@/composables/useSpreadsheet'
import { toRefs } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'GiftCard' })

type Props = {
  gift: EnrichedGift
}

const props = defineProps<Props>()

const { gift } = toRefs(props)
</script>
