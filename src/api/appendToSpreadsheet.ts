import { CFG } from '@/cfg'
import { getToken } from './authToken'

export const appendToSpreadSheet = async (
  spreadsheetId: string,
  sheetName: string,
  values: string[][]
) => {
  // const { access_token } = await getToken()

  return fetch(
    `${CFG.baseUrl}/${spreadsheetId}/values/${sheetName}:append?key=${CFG.googleApiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({ values })
    }
  )
}
