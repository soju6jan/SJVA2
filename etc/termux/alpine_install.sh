#!/bin/sh
#
apk add --no-cache git
cd /home
git config --global http.sslVerify false
git clone https://github.com/soju6jan/SJVA2.git
apk add --no-cache python2 python2-dev py-pip
apk add py2-lxml py2-gevent py2-pillow py2-crypto py2-sqlalchemy py2-markupsafe py2-mako py2-httplib2 py2-google-api-python-client py2-psutil py2-scandir
apk add --no-cache ffmpeg libxslt-dev 
apk add --no-cache --virtual .build-deps  gcc g++ make libffi-dev openssl-dev linux-headers libxml2-dev jpeg-dev zlib-dev 
pip install -r /home/SJVA2/etc/termux/termux_requirements.list
apk del .build-deps
apk --update add tzdata
cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime
apk del tzdata
rm -rf /var/cache/apk/*

mv /home/SJVA2/etc/termux/my_start.sh /home/SJVA2/my_start.sh
chmod 777 /home/SJVA2/my_start.sh
mv /home/SJVA2/etc/termux/alpine_profile2 /root/.profile
rm -rf /home/SJVA2/bin/Windows
rm -rf /home/SJVA2/bin/Linux
rm -rf /home/SJVA2/bin/Darwin
mv /home/SJVA2/etc/termux/gitignore /home/SJVA2/bin/.gitignore
echo "SJVA Install Completed.."

