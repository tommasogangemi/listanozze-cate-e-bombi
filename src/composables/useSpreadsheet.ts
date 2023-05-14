import { appendToSpreadSheet } from '@/api/appendToSpreadsheet'
import { loadSpreadsheet } from '@/api/loadSpreadsheet'
import type { SpreadSheet } from '@/api/utils'
import { CFG } from '@/cfg'
import type { GiftConfig } from '@/cfg/items-list/types'
import { computed, ref } from 'vue'

export type EnrichedGift = GiftConfig & {
  availableAmount: number
  donatedPercentage: number
}

export type UserSheetInputs = {
  donorName: string
  donatedAmount: string
  message?: string
}

const ORDERED_USER_INPUTS: (keyof UserSheetInputs)[] = ['donorName', 'donatedAmount', 'message']

const spreadSheet = ref<SpreadSheet>()

const enrichGifts = computed(() => {
  return CFG.itemsList.map((gift) => {
    const sheet = spreadSheet.value?.sheets.find((sheet) => sheet.name === gift.name)
    const rowsData = sheet?.rowsData ?? []

    const donatedAmount = rowsData.reduce((acc, row) => acc + Number(row.donatedAmount), 0)
    const donatedPercentage = (donatedAmount / (gift.price ?? 0)) * 100

    const availableAmount = (gift.price ?? 0) - donatedAmount

    return {
      ...gift,
      rowsData,
      donatedPercentage,
      availableAmount
    }
  })
})

export const useSpreadsheet = () => {
  const get = async () => {
    try {
      spreadSheet.value = await loadSpreadsheet(CFG.spreadSheetId)
    } catch (error) {
      console.error('ERROR in useSpreadsheet.get', error)
    }
  }

  const addRow = async (sheetName: string, inputs: UserSheetInputs) => {
    // turning object into array of cells and adding the current date cell
    const values = [
      [
        ...ORDERED_USER_INPUTS.map((key) => inputs[key] ?? ''),
        // adding the date and formatting into a string that can be used to instantiate a Date object
        new Date().toLocaleDateString('it-IT').split('/').reverse().join('-')
      ]
    ]

    await appendToSpreadSheet(CFG.spreadSheetId, sheetName, values)

    get()
  }

  return {
    spreadSheet,
    enrichGifts,
    get,
    addRow
  }
}
