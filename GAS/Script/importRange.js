function importRange(imp_docID, imp_sheetName, imp_rangeStr, exp_sheetName, exp_row, exp_column){
  // インポート元シートから値を抽出
  var values = SpreadsheetApp.openById(imp_docID).getSheetByName(imp_sheetName).getRange(imp_rangeStr).getValues();
  // 抽出した値をシートに書き込み
  SpreadsheetApp.getActive().getSheetByName(exp_sheetName).
  getRange(exp_row, exp_column, values.length, values[0].length).setValues(values);
}