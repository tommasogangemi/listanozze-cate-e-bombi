import { appendToSpreadSheet } from '@/api/appendToSpreadsheet'
import { loadSpreadsheet } from '@/api/loadSpreadsheet'
import type { SpreadSheet } from '@/api/utils'
import { ref } from 'vue'

export const useSpreadsheet = (spreadsheetId: string) => {
  const spreadSheet = ref<SpreadSheet>()

  const get = async () => {
    spreadSheet.value = await loadSpreadsheet(spreadsheetId)
  }

  const addRow = async (sheetName: string, values: string[][]) =>
    appendToSpreadSheet(spreadsheetId, sheetName, values)

  return {
    spreadSheet,
    get,
    addRow
  }
}
