# Setup-RaspberryPi
## ■ Instructions
### ○ 用意するもの
- 本体 (Raspberry Pi 3 Model B+ を利用)
- microSDカード (32GB, 64GB以上の場合フォーマット形式に注意)
- 有線マウス
- 有線キーボード
- MicroUSBケーブル (電源)
- HDMIケーブル (画面出力)
- モニター
<br>

- Wi-Fi環境

### ○ OSセットアップ手順
1. [Raspberrypi.org](https://www.raspberrypi.org/downloads/noobs/)から、NOOBSをダウンロードする
    > NOOBS = New Out Of the Box Software. インストーラ型のOS導入方法

    <img src="https://github.com/himiyo3in/TIL/blob/master/RaspberryPi/Image/img01.png" width="500px">

2. ダウンロードしたフォルダを解凍し、全てSDカードにコピー
3. SDカードをラズパイ本体に挿入し、電源ケーブルを刺して起動する
4. 流れに従いOS(Raspbian)をインストールし、起動する






### ○ 画面キャプチャ用ソフトの導入
- 上の画面キャプチャはksnapshotと呼ばれるソフトを用いて撮影した([参考](https://arakoki70.com/?p=807))
    > sudo apt-get install ksnapshot

### ○ 日本語入力を行う準備
1. 下記を実行し、再起動する
```
$ sudo apt-get update
$ sudo apt-get install fcitx-mozc
```
2. メニューより **[設定] > [Fcitx設定]** を選択
3. 

---

## ■ Reference
- [Qiita：『Raspberry Pi 3 Model B+の初回セットアップ（購入から起動まで）』](https://qiita.com/Higemal/items/c817b96c3806f23b35f6)

---

