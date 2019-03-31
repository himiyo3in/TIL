# README - Mattermost
## ■ TL;DR
- 手間はかかるが、お得なSlackっぽいやつ
- 料金面や使い勝手など、不明箇所多々


## ■ Description
- Slackライクな **[OSSセルフホスティング式コミュニケーションツール](https://ja.wikipedia.org/wiki/Mattermost)**
- **ドメイン取得、サーバ上でホスト**する必要がある
- 企業向けの機能を追加しなければ、<br>
  ユーザ数に料金が左右されることもなく、**ログ容量やコスト的にはお得**?（のはず...どこで動かすかにもよりそう）
  <img width="500" alt="screen shot 2018-11-09 at 14 24 22" src="https://github.com/himiyo3in/TIL/blob/master/Mattermost/Image/Slack%E3%81%A8%E3%81%AE%E6%AF%94%E8%BC%83.png">
- 『ワークスペース』『チャンネル』以外に、<br>
  **『チーム』** という概念がある （**最大人数20人?**...だとしたらここがネックかも）
  <img width="750" alt="screen shot 2018-11-09 at 14 24 22" src="https://github.com/himiyo3in/TIL/blob/master/Mattermost/Image/MacSS.png">
- GCPを利用する場合、(無料枠の範囲内だとしても)VMを立てる際に**クレジットカードの登録が必要**<br>
- **日本語対応済み**
- **iOS/Android/Windows/Mac対応済み**
  - [【公式】: Mattermost Mobile & Desktop Apps](https://mattermost.com/download/#mattermostApps)
---

## ■ Reference
### ○ 公式
- [【公式】: Mattermost](https://mattermost.com/)
### ○ GCPを利用した詳細手順
- [GCP無料枠を使ってたったの30分でOSS版Slack「Mattermost」を構築する【SSL化も対応】](https://www.karelie.net/mattermost-gce-ssl/)
