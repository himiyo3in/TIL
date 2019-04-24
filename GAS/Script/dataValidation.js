// 参考：
// 公式ドキュメント： 
// https://www.relief.jp/docs/google-spreadsheet-gas-set-data-validation-list.html


// Configシートを読み込む
var validateconfig_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('[入力規則]Config');


function addValidate(param_range){
  
  // Underscoreライブラリ(M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j)の導入が必要
  // https://tonari-it.com/gas-array-underscore-zip-apply/#toc6
  var _ = Underscore.load();
  
  
  
  /* 1. configシートから、入力規則を設けるシート名・範囲情報とドロップダウンリストを読み取る */
  
  var validate_param     = validateconfig_sheet.getRange(param_range).getValues();
  
  var validate_sheetName = String(validate_param[0][0]);
  var validate_range     = String(validate_param[1][0]);
  
  var validate_sheet     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(validate_sheetName).getRange(validate_range);
  
  
  
  /* 2. ドロップダウンリストの配列を作成 (データ範囲を転置 → データ範囲の1列目２行目以降に値が入っているものを抽出して配列化) */
  
  var valuelist = [];
  var validate_paramTrans       = _.zip.apply(_, validate_param).filter(String);
  var validate_paramList        = validate_paramTrans[0]
  
  
  for (var i = 2; i < validate_paramList.length; i++){
    if(validate_paramList[i] != null && validate_paramList[i] != "") {
      valuelist.push(validate_paramList[i]);
    }
  }
  
  
  
  /* 3. 指定範囲にドロップダウンリストを設定する */
  
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(valuelist, true).build();
  validate_sheet.setDataValidation(rule);
  
}
