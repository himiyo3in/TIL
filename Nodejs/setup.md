# Setup - Node.js
## ■ Instructions
### ○ Homebrewの導入
```Shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```



### ○ Nodebrewの導入
#### ◇ インストール
```Shell
$ brew install nodebrew
```

#### ◇ 環境パスを通す
```Shell
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```



### ○ Node.jsのインストール
#### ◇ 導入用フォルダの作成
フォルダが存在しない場合のみで良い
```Shell
$ mkdir -p ~/.nodebrew/src
```

#### ◇ インストール
```Shell
$ nodebrew install-binary v11.12.0
```

#### ◇ 有効化
```Shell
$ nodebrew use v11.12.0
```


---

## ■ Reference
- [Qiita - 『MacにNode.jsをインストール』](https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09)