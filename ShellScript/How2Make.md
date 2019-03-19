# How to make batch file - 実行ファイルの作り方
## ■ Instructions
### ○ sh→command に拡張子変更
```Shell
$ for filename in *.sh; do mv $filename ${filename%.sh}.command; done
```

### ○ 実行権限を付与
```Shell
$ for filename in *.command; do chmod u+x ${filename%.command}.command; done
```

---

## ■ Reference
- [Qiita：『Macでバッチ（command）ファイルを作る方法』](https://qiita.com/TatsuyaOGth/items/f15bfa9aeb68d8ecfc67)
- [Qiita：『ファイルの拡張子を一括で変更する』](https://qiita.com/fujitora/items/62d008c9c4b1d7068a1b)