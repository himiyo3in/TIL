// 参考：
// 公式ドキュメント： https://developers.google.com/apps-script/reference/spreadsheet/protection#top_of_page
// https://excel-ubara.com/apps_script1/GAS031.html

// ※ Underscoreライブラリ(M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j)の導入が必要
// ※ https://tonari-it.com/gas-array-underscore-zip-apply/#toc6


// サブメソッド


function removeSheetProtection(sheetName) {
  
  /* 保護の説明欄に、削除したい保護範囲と同じ範囲が記載されていたら削除する */
  // https://webapps.stackexchange.com/questions/112147/how-to-remove-protection-on-a-range-using-scripts-in-google-spreadsheets
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    if (protection.canEdit()) {
      protection.remove();
    }
  }
}

function removeRangeProtection(sheetName, removeRange) {
  
  /* 保護の説明欄に、削除したい保護範囲と同じ範囲が記載されていたら削除する */
  // https://webapps.stackexchange.com/questions/112147/how-to-remove-protection-on-a-range-using-scripts-in-google-spreadsheets
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
  for (var i = 0; i < protections.length; i++) {
    var protection = protections[i];
    if (protection.getDescription() == removeRange) { //protection.canEdit() && 
      protection.remove();
    }
  }
}


function addRangeProtection(sheetName, protect_range, editorsList) {
  
  /* 1. 特定ユーザを編集可能にする一部範囲を除いて、シート全体に保護をかける */
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var protection = sheet.protect();
  
 /* 何故か上手くいかない */
//  removeSheetProtection(sheetName);
  
//  var kanrisya = ['z.hiroyuki.miyoshi@gree.net', 'mako.kurahashi@gree.net']
//  protection.addEditors(kanrisya);
  
  
 /* 保護を入力拒否にする場合こちらを使用 */
//  var me = Session.getEffectiveUser();
//  protection.addEditors(me);
//  protection.removeEditors(protection.getEditors());
  
  protection.setWarningOnly(true);
  
  var unprotected = protection.getUnprotectedRanges();
  unprotected.push(sheet.getRange(protect_range));
  protection.setUnprotectedRanges(unprotected);
  
  
  
  /* 2. 特定ユーザを編集可能にする範囲に、既に設定されている保護を削除する */
  removeRangeProtection(sheetName, protect_range);
  
  
  
  /* 3. 特定ユーザを編集可能にする範囲に、自分(スクリプト実行者)と編集可能者リストのメンバーのみを編集可能にする保護を新しく作成する */
  var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName).getRange(protect_range);
  var protection = range.protect();  
  protection.setDescription(protect_range);
  
//  protection.addEditors(kanrisya);
  var me = Session.getEffectiveUser();
  protection.addEditor(me);
  protection.removeEditors(protection.getEditors());
  
  protection.addEditors(editorsList);
  
}







// メインメソッド

// Configシートを読み込む
var protectconfig_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('[保護]Config');


function addProtect(param_range){
  
  // Underscoreライブラリ(M3i7wmUA_5n0NSEaa6NnNqOBao7QLBR4j)の導入が必要
  // https://tonari-it.com/gas-array-underscore-zip-apply/#toc6
  var _ = Underscore.load();
  
  
  
  /* 1. configシートから、保護をかけるシート名・範囲情報とユーザ情報(メールアドレス)を読み取る */
  
  var protect_param     = protectconfig_sheet.getRange(param_range).getValues();
  
  var protect_sheetName = String(protect_param[0][0]);
  var protect_range     = String(protect_param[1][0]);
  
  var protect_sheet     = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(protect_sheetName).getRange(protect_range);
  
  
  
  /* 2. 編集権限を与えるユーザ情報の配列を作成 (データ範囲を転置 → データ範囲の1列目２行目以降に値が入っているものを抽出して配列化) */
  
  var editorslist = [];
  var protect_paramTrans       = _.zip.apply(_, protect_param).filter(String);
  var protect_paramList        = protect_paramTrans[0]
  
  
  for (var i = 2; i < protect_paramList.length; i++){
    if(protect_paramList[i] != null && protect_paramList[i] != "") {
      editorslist.push(protect_paramList[i]);
    }
  }
  
  Logger.log(editorslist);
  
  /* 3. 指定範囲に指定ユーザのみが編集できる保護をかけ、それ以外の範囲はシートオーナーとスクリプト実行者以外が触れないようにする */
  addRangeProtection(protect_sheetName, protect_range, editorslist);

}
