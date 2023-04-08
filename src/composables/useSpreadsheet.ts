import { useGoogleSheets } from './useGoogleSheets'

export const useSpreadsheet = (spreadsheetId: string) => {
  const get = async () => {
    const googleSheets = await useGoogleSheets()

    const spreadSheet = await googleSheets.spreadsheets.get({
      spreadsheetId
    })

    console.log('GET', spreadSheet)

    return spreadSheet
  }

  return {
    get
  }
}
