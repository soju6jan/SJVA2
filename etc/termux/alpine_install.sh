#!/bin/sh
#
cd /home
git clone https://github.com/soju6jan/SJVA2.git --depth 1
cp /home/SJVA2/etc/termux/_export.sh /home/SJVA2/export.sh
chmod 777 /home/SJVA2/export.sh
mv /home/SJVA2/etc/termux/alpine_profile2 /root/.profile
cd /home/SJVA2
./start.sh

