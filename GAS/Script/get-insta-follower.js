// 注釈：
// ⑴ https://www.takeiho.com/instagram-scryping
// ⑵ https://jijyoron.hatenablog.com/entry/2018/12/23/233255
// + https://qiita.com/3mc/items/826cd66890d7812e917e#%E7%B5%90%E8%AB%96
// 上の3つを混ぜて、改変したスクリプト↓↓


function checkReport() {
  //チェックを行うユーザーIDを取得
  
    var targetList = getTargetList();
    //データを記録していく
    for (var i = 0; i < targetList.length; i++){
      try {
        Logger.log(targetList[i]);
        insertReportData(targetList[i]);
      } catch (e){
        Logger.log(e);
      }
    }
}

function getTargetList() {
  try { 
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName('targetID');
    var target = sheet.getRange('A:A').getValues().filter(String);
    
    var targetList = [];
    for(var i=1; i < target.length; i++){
      Logger.log(target[i][0]);
      targetList.push(target[i][0]);
    }
    return targetList;
  } catch(e) {
    throw(e);
  }
}


function insertReportData(userId) {
  try {
    var data = getData(userId);
    var sheet = "";
    var rawsheetname = 'Raw';
    
    // 記録用スプレッドシートの取得
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadsheet.getSheets();
    for(var i=0; i < sheets.length; i++){
      if(rawsheetname == sheets[i].getName()){
        sheet = spreadsheet.getSheetByName(rawsheetname);
      }
    }
    if(sheet == ""){
      spreadsheet.insertSheet(rawsheetname);
      sheet = spreadsheet.getSheetByName(rawsheetname);
      sheet.appendRow(['日時','ユーザID','フォロワー数','フォロー数']);
    }
    var lastRow = sheet.appendRow(data);
  } catch(e) {
    throw(e);
  }
}

function getData(userId) {
  try {
    var url = "https://www.instagram.com/" + userId + "/";
    
    var html = getContent(url);
    
    var json = html.match(/window._sharedData = (.*?);<\/script>/)[1];
    var jsonData = JSON.parse(json);
    
    //実行日付
    var today = new Date();
    
    //フォロワー数
    var followers    = jsonData['entry_data']['ProfilePage'][0]['graphql']['user']['edge_followed_by']['count'];
    
    //フォロー数
    var followings   = jsonData['entry_data']['ProfilePage'][0]['graphql']['user']['edge_follow']['count'];
    
    
    var result = [today,userId,followers,followings];
    return result;
  } catch(e) {
    throw(e);
  }
}

//requetがエラーになることがあるため、取得するまでwhile
function getContent(url) {
//  while(true){
//    try {
//      var request = UrlFetchApp.fetch(url)
//      var content = request.getContentText('UTF-8');
//      return content;
//    } catch(e) {
//      Logger.log(e);
//      continue;
//    }
//  }

  try {
    var request = UrlFetchApp.fetch(url)
    var content = request.getContentText('UTF-8');
    return content;
  } catch(e) {
    Logger.log(e);
  }

}