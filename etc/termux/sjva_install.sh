#!/bin/bash
cd $HOME
cd ../usr/share
pkg install -y proot
curl -LO https://soju6jan.com/file/TermuxAlpine32.tar.gz
tar -zxvf TermuxAlpine32.tar.gz
rm TermuxAlpine32.tar.gz
mv TermuxAlpine/startalpine ../bin
chmod 777 ../bin/startalpine
curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/alpine_profile1
mv alpine_profile1 /data/data/com.termux/files/usr/share/TermuxAlpine/root/.profile
curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/alpine_install.sh
mv alpine_install.sh /data/data/com.termux/files/usr/share/TermuxAlpine/home/alpine_install.sh
cd $HOME
curl -LO https://raw.githubusercontent.com/soju6jan/SJVA2/master/etc/termux/termux_bash_profile
mv termux_bash_profile ~/.profile
startalpine