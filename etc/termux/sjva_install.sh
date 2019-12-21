#!/bin/bash
cd $HOME
curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/termux_bash_profile
mv termux_bash_profile ~/.profile

#curl -LO https://raw.githubusercontent.com/Hax4us/TermuxAlpine/master/TermuxAlpine.sh
curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/TermuxAlpine.sh
bash TermuxAlpine.sh

curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/alpine_install.sh
mv alpine_install.sh /data/data/com.termux/files/usr/share/TermuxAlpine/home/alpine_install.sh

curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/alpine_profile1
mv alpine_profile1 /data/data/com.termux/files/usr/share/TermuxAlpine/root/.profile

startalpine