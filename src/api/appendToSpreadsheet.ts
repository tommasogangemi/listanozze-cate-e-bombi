import { CFG } from '@/cfg'
import { getToken } from './authToken'

export const appendToSpreadSheet = async (
  spreadsheetId: string,
  sheetName: string,
  values: string[][]
) => {
  const { access_token } = await getToken()

  const jsBody = {
    values: values.map((v) => [
      ...v,

      new Date().toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    ])
  }

  return fetch(
    `${CFG.baseUrl}/${spreadsheetId}/values/${sheetName}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS&includeValuesInResponse=false&alt=json`,
    {
      method: 'POST',
      body: JSON.stringify(jsBody),
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  )
}
