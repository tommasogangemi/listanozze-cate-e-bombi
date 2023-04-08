import { itemsList } from './items-list'
import { spreadSheetIds } from './spreadsheets'

const GOOGLE_API_KEY = 'AIzaSyDW-uIMe2u7DG9ey0GeY2UKncSOnyoLhRU'

const CFG = {
  itemsList,
  spreadSheetIds,
  googleApiKey: GOOGLE_API_KEY
}

console.log('aaaaaaaaaaaaaaa', process.env.NODE_ENV)

export default CFG
