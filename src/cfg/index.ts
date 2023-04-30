import { itemsList } from './items-list'
import { spreadSheetId } from './spreadsheets'

const GOOGLE_API_KEY = 'AIzaSyDW-uIMe2u7DG9ey0GeY2UKncSOnyoLhRU'
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets'
const GOOGLE_CLIENT_ID = '807456610735-pl3avc541l77ig87cgcjdd5lknoclts0.apps.googleusercontent.com'
const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''

console.log('NODE ENV', process.env.NODE_ENV)

export const CFG = {
  itemsList,
  spreadSheetId,
  googleApiKey: GOOGLE_API_KEY,
  googleClientId: GOOGLE_CLIENT_ID,
  baseUrl: BASE_URL,
  serverUrl: SERVER_URL
}
