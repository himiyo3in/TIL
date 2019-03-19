# Setup - Node.js

## ■ Homebrewの導入
```Shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

---

## ■ Nodebrewの導入
### ◇ インストール
```Shell
$ brew install nodebrew
```

### ◇ 環境パスを通す
```Shell
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```

---

## ■ Node.jsのインストール
### ◇ 導入用フォルダの作成
存在しない場合のみで良い
```Shell
$ mkdir -p ~/.nodebrew/src
```

### ◇ インストール
```Shell
$ nodebrew install-binary v11.12.0
```

### ◇ 有効化
```Shell
$ nodebrew use v7.1.0
```