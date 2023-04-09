<template>
  <div v-for="(row, i) in data.sheets?.[0]?.data?.[0]?.rowData" class="text-neutral" :key="i">
    {{ row.values }}
  </div>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
import { useSpreadsheet } from '@/composables/useSpreadsheet'

const { get } = useSpreadsheet(CFG.spreadSheetIds.gifts)

const data = await get()
</script>
