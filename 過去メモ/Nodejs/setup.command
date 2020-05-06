/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install nodebrew

echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile

mkdir -p ~/.nodebrew/src

nodebrew install-binary v11.12.0

nodebrew use v11.12.0