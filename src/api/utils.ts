import type { UserSheetInputs } from '@/composables/useSpreadsheet'
import type google from 'googleapis'

type RowData = UserSheetInputs & {
  date: Date
}

export type Sheet = {
  id: number
  name: string
  headers: string[]
  rows: string[][]
  rowsData: RowData[]
}

export type SpreadSheet = {
  id: string
  sheets: Sheet[]
}

const rowToObject = (row: string[]): RowData => {
  return {
    donorName: row[0] ?? '',
    donatedAmount: row[1] ?? '',
    message: row[2],
    date: new Date(row[3]!) ?? ''
  }
}

const parseSingleSheet = (sheet: google.sheets_v4.Schema$Sheet): Sheet => {
  const rawRowsArray =
    sheet.data?.[0]?.rowData?.map(
      ({ values }) => values?.map((v) => v.effectiveValue?.stringValue) ?? []
    ) ?? []

  const [headers, ...rows] = rawRowsArray.map((row) =>
    // keeping all the cells that are relevant to us, and discarding all the remaining empty ones
    row.filter((cell, idx): cell is string => idx < 4 || !!cell)
  )

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
