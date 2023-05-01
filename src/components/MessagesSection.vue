<template>
  <v-container>
    <v-row align="center" class="mb-4">
      <v-col>
        <v-divider />
      </v-col>
      <v-col cols="auto">
        <h2 id="messaggi" class="font-weight-medium">Messaggi</h2>
      </v-col>
      <v-col>
        <v-divider />
      </v-col>
    </v-row>

    <v-row>
      <pre>{{ donations }}</pre>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useSpreadsheet } from '@/composables/useSpreadsheet'
import { computed } from 'vue'
import { defineComponent } from 'vue'

defineComponent({ name: 'MessagesSection' })

const { spreadSheet } = useSpreadsheet()

const donations = computed(() =>
  spreadSheet.value?.sheets.flatMap((s) => s.rowsData).filter((r) => !!r.message)
)
</script>
