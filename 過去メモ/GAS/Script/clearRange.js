function clearRange(sheetName,rangeStr){
  // 貼付け先のシートの数値を削除する
  try{
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName).getRange(rangeStr).clearContent();
  }catch(e){
    Browser.msgBox(e);
  }
}