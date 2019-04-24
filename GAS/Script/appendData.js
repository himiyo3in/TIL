// 参考：
// https://www.monotalk.xyz/blog/google-apps-script-%E3%81%A7%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E3%82%B7%E3%83%BC%E3%83%88%E3%81%AE%E5%88%97%E3%81%AE%E5%80%A4%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/

function appendData(importTabName, importDataRange, exportTabName, exportDataRange) {
  
  // Underscoreライブラリ(M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j)の導入が必要
  // https://tonari-it.com/gas-array-underscore-zip-apply/#toc6
  var _ = Underscore.load();
  
  
  
  /* 1. データ範囲を読み込む */
  var importData = SpreadsheetApp.getActive().getSheetByName(importTabName).getRange(importDataRange).getValues();
  
  
  
  /* 2. appendするデータの総行数を算出 (データ範囲を転置 → データ範囲の1列目に値が入っているものを抽出して配列化 → 配列の長さをカウント) */
  var importDataTrans       = _.zip.apply(_, importData).filter(String);
  var importData1Column_raw = importDataTrans[0]
  
  var importData1Column     = new Array();
  
  for each (var value in importData1Column_raw) {
    if(value != null && value != "") {
      importData1Column.push(value);
    }
  }
  
  var dataCount;
  
  try{
    dataCount = importData1Column.length;
  }catch(e){
    dataCount = 0;
  }
  
  Logger.log(dataCount);
  
  if(dataCount > 0){
    
    
    /* 3. 値が入っているデータ範囲のみを配列化 */  
    var appendData = new Array
    
    for (var i = 0; i < dataCount; i++) {
      appendData.push(importData[i]);
    }
    
    //  Logger.log(appendData);
    
    
    
    /* 4. 出力先シートの最終行を取得し、次の行に追記(append) */
    var exportDataRange = SpreadsheetApp.getActive().getSheetByName(exportTabName).getRange(exportDataRange);
    var exportData      = exportDataRange.getValues();
    
    
    
    /* 5. 出力先シートデータの総行数を算出 (2と同じ) */
    var exportDataTrans       = _.zip.apply(_, exportData).filter(String);
    var exportData1Column_raw = exportDataTrans[0]
    
    var exportData1Column     = new Array();
    
    for each (var value in exportData1Column_raw) {
      if(value != null && value != "") {
        exportData1Column.push(value);
      }
    }
    
    
    
    /* 6. 出力先の行番号(R1C1形式)を算出  《(出力先範囲(A1形式)の先頭位置-1) + データ総行数 + 1》 */
    var appendStartRow    = (exportDataRange.getRow() - 1) + exportData1Column.length + 1;
    var appendStartColumn = exportDataRange.getColumn();
    
    Logger.log(appendStartColumn);
    
    
    
    /* 7. データを出力 */
    SpreadsheetApp.getActive().getSheetByName(exportTabName).getRange(appendStartRow, appendStartColumn, appendData.length, appendData[0].length).setValues(appendData);
  }
}