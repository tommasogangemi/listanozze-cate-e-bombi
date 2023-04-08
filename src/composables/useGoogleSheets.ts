import google from 'googleapis'

let _googleSheetsInstance: google.sheets_v4.Sheets

const auth = new google.Auth.GoogleAuth({
  keyFile: 'google-sheets.json', // the key file
  //url to spreadsheets API
  scopes: 'https://sheets.googleapis.com/v4/spreadsheets'
})

export const useGoogleSheets = async () => {
  if (_googleSheetsInstance) {
    return Promise.resolve(_googleSheetsInstance)
  } else {
    const authClientObject = await auth.getClient()

    _googleSheetsInstance = new google.sheets_v4.Sheets({ auth: authClientObject })

    return _googleSheetsInstance
  }
}
