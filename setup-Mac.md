# setup-Mac 手順
## 設定
- Setting
    - Mouse/Trackpad
        - Tracking speed UP
    - Keyboard
        - Key Repeat MAX
        - Delay Until Repeat MAX
        - Windows like shortcuts ON
- Karabiner-Elements
    - 無変換 -> 英数
    - 変換 -> かな
    - left_control -> Left_command
- Scroll Reverser
- BetterSnapTool

## Cloud
- Google Drive
- OneDrive
- Dropbox

## Developer
- Xcode

## Editor
- Atom
- Visual Studio Code

## Groupware
- Slack

## Other
- LINE
- Spotify
- Kindle

## Terminal
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
(brew install ruby)

brew install pyenv

echo 'export PYENV_ROOT="${HOME}/.pyenv"' >> ~/.bash_profile
echo 'export PATH="${PYENV_ROOT}/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
exec $SHELL -l

pyenv install anaconda3-5.2.0
pyenv versions
pyenv global anaconda3-5.2.0
pyenv versions

sudo gem install cocoapods
