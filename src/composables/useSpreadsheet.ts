import { CFG } from '@/cfg'
import type google from 'googleapis'

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'

export const useSpreadsheet = (spreadsheetId: string) => {
  const get = async () => {
    const res = await fetch(`${BASE_URL}${spreadsheetId}?key=${CFG.googleApiKey}`)
    const data = await res.json()

    console.log('GET', data)

    return data as google.sheets_v4.Schema$Spreadsheet
  }

  return {
    get
  }
}
