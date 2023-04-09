import { CFG } from '@/cfg'
import type google from 'googleapis'

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'

export const useSpreadsheet = (spreadsheetId: string) => {
  const get = async () => {
    const res = await fetch(
      `${BASE_URL}${spreadsheetId}?key=${CFG.googleApiKey}&includeGridData=true`
    )
    const data: google.sheets_v4.Schema$Spreadsheet = await res.json()

    return data
  }

  return {
    get
  }
}
