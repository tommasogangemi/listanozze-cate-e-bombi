<template>
  <v-card rounded>
    <v-img :src="gift.image" cover />
    <v-card-title class="text-center d-flex justify-space-between">
      <span class="font-weight-medium">{{ gift.name }}</span>
      <span class="font-weight-medium"> {{ gift.price }}€ </span>
    </v-card-title>

    <v-divider class="mb-2" />

    <v-card-text>
      <v-progress-linear :model-value="25" color="primary" height="15" rounded class="mb-4">
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <div class="d-flex justify-space-between">
        <span>Contiributo libero</span>
        <span>Disponibili: TBD€</span>
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