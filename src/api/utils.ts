import type google from 'googleapis'

export type Sheet = {
  id: number
  name: string
  headers: string[]
  rows: string[][]
}

export type SpreadSheet = {
  id: string
  sheets: Sheet[]
}

const parseSingleSheet = (sheet: google.sheets_v4.Schema$Sheet): Sheet => {
  const rawRowsArray =
    sheet.data?.[0]?.rowData?.map(
      ({ values }) => values?.map((v) => v.effectiveValue?.stringValue) ?? []
    ) ?? []

  const [headers, ...rows] = rawRowsArray.map((row) => row.filter((cell): cell is string => !!cell))

  return {
    id: sheet.properties?.sheetId!,
    name: sheet.properties?.title!,
    rows,
    headers: headers ?? []
  }
}

export const parseSpreadsheet = (res: google.sheets_v4.Schema$Spreadsheet): SpreadSheet => ({
  id: res.spreadsheetId!,
  sheets: res.sheets?.map(parseSingleSheet) ?? []
})
