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



### ○ Puppeteerの導入
1. [Canonical Chromium Builds](https://launchpad.net/~canonical-chromium-builds/+archive/ubuntu/stage/+build/14482955)にアクセスし、下図のファイルをダウンロード
<img src="https://github.com/himiyo3in/TIL/blob/master/RaspberryPi/Image/img02.png" width="500px">

2. 下記コマンドを実行し、インストールする
    ```
    $ sudo dpkg -i chromium-browser_65.0.3325.181-0ubuntu0.14.04.1_armhf.deb
    $ sudo dpkg -i chromium-codecs-ffmpeg_65.0.3325.181-0ubuntu0.14.04.1_armhf.deb
    ```




---

## ■ Reference
- [Qiita：『Raspberry Pi 3 Model Bに最新のNode.jsとnpmをインストールする[公式準拠]』](https://qiita.com/Avocado/items/512f64428545bf0d94ba)
- [NodeSource Node.js > Installation instructions](https://github.com/nodesource/distributions/blob/master/README.md)
- [Qiita：『Raspberry Piでpuppeteerを動かす方法』](https://qiita.com/kwbt/items/420b3d02456fe24307ec)