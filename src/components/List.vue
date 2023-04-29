<template>
  <div v-for="(sheet, i) in spreadSheet?.sheets" :key="i">
    <div>HEADERS</div>
    {{ sheet.headers }}
    <div>ROWS</div>
    {{ sheet.rows }}
    <v-text-field v-model="userInput" label="user input" />
    <v-btn color="primary" @click="handleClick(sheet.name)">SUBMIT</v-btn>
  </div>
</template>

<script setup lang="ts">
import { CFG } from '@/cfg'
import { useSpreadsheet } from '@/composables/useSpreadsheet'
import { ref } from 'vue'
import { watchEffect } from 'vue'

const { get, spreadSheet, addRow } = useSpreadsheet(CFG.spreadSheetIds.gifts)

const userInput = ref('')

watchEffect(() => {
  console.log('aaaaaaaaaaa', spreadSheet.value?.sheets[0]?.rows)
})

get()

const handleClick = (sheetName: string) => {
  addRow(sheetName, [[userInput.value]])
  userInput.value = ''
  get()
}
</script>
