import { appendToSpreadSheet } from '@/api/appendToSpreadsheet'
import { loadSpreadsheet } from '@/api/loadSpreadsheet'
import type { SpreadSheet } from '@/api/utils'
import type { GiftConfig } from '@/cfg/items-list/types'
import { ref } from 'vue'

export type EnrichedGift = GiftConfig

const spreadSheet = ref<SpreadSheet>()

export const useSpreadsheet = (spreadsheetId: string) => {
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
