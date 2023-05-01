import type { UserSheetInputs } from '@/composables/useSpreadsheet'
import type google from 'googleapis'

export type Sheet = {
  id: number
  name: string
  headers: string[]
  rows: string[][]
  rowsData: UserSheetInputs[]
}

export type SpreadSheet = {
  id: string
  sheets: Sheet[]
}

const rowToObject = (row: string[]): UserSheetInputs => ({
  donorName: row[0] ?? '',
  donatedAmount: row[1] ?? '',
  message: row[2]
})

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
    headers: headers ?? [],
    rowsData: rows.map(rowToObject)
  }
}

export const parseSpreadsheet = (res: google.sheets_v4.Schema$Spreadsheet): SpreadSheet => ({
  id: res.spreadsheetId!,
  sheets: res.sheets?.map(parseSingleSheet) ?? []
})
