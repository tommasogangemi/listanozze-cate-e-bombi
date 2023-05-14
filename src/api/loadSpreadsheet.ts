import { CFG } from '@/cfg'
import { parseSpreadsheet } from './utils'
import type google from 'googleapis'
import { getToken } from './authToken'

export const loadSpreadsheet = async (spreadsheetId: string) => {
  const { access_token } = await getToken()

  try {
    const res = await fetch(`${CFG.baseUrl}/${spreadsheetId}?includeGridData=true`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    const data: google.sheets_v4.Schema$Spreadsheet = await res.json()

    return parseSpreadsheet(data)
  } catch (error) {
    console.error('ERROR in loadSpreadsheet', error)
  }
}
