import { itemsList } from './items-list'
import { spreadSheetIds } from './spreadsheets'

const GOOGLE_API_KEY = 'AIzaSyDW-uIMe2u7DG9ey0GeY2UKncSOnyoLhRU'

console.log('NODE ENV', process.env.NODE_ENV, process.env.VUE_APP_GOOGLE_API_KEY)

export const CFG = {
  itemsList,
  spreadSheetIds,
  googleApiKey: GOOGLE_API_KEY
}
