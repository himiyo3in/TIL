# Puppeteerの導入
## ■ Instructions
### ○ nodejs・npmの導入
下記を実行

```
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

=====

※ 以下のコマンドではエラー発生した
```
$ sudo apt-get install -y nodejs npm
$ sudo npm cache clean
$ sudo npm install npm n -g
$ sudo n stable
```
> (node:848) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.




#### ◇ 

---

## ■ Reference
- [Qiita：『Raspberry Pi 3 Model Bに最新のNode.jsとnpmをインストールする[公式準拠]』](https://qiita.com/Avocado/items/512f64428545bf0d94ba)
- [NodeSource Node.js > Installation instructions](https://github.com/nodesource/distributions/blob/master/README.md)