import { itemsList } from './items-list'
import { spreadSheetIds } from './spreadsheets'

const GOOGLE_API_KEY = 'AIzaSyDW-uIMe2u7DG9ey0GeY2UKncSOnyoLhRU'
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets'
const GOOGLE_CLIENT_ID = '807456610735-pl3avc541l77ig87cgcjdd5lknoclts0.apps.googleusercontent.com'

console.log('NODE ENV', process.env.NODE_ENV)

export const CFG = {
  itemsList,
  spreadSheetIds,
  googleApiKey: GOOGLE_API_KEY,
  googleClientId: GOOGLE_CLIENT_ID,
  baseUrl: BASE_URL
}
