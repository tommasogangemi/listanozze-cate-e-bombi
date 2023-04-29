import { CFG } from '@/cfg'

export const appendToSpreadSheet = async (
  spreadsheetId: string,
  sheetName: string,
  values: string[][]
) => {
  return fetch(
    `${CFG.baseUrl}/${spreadsheetId}/values/${sheetName}:append?key=${CFG.googleApiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({ values })
    }
  )
}
