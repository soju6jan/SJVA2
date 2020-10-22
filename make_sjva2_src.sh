#!/bin/bash
chmod 777 -R /home/coder/project/SJ/git_release
dev=/home/coder/project/SJ/SJVA2
dest=/home/coder/project/SJ/git_release/sjva2_src
dest2=/home/coder/project/SJ/git_release/sjva2_src_obfuscate

rm -rf $dest/lib
rm -rf $dest2/lib
rm -rf $dest/plugin
rm -rf $dest2/plugin
rm -rf $dest/manual
rm -rf $dest2/manual

rm -rf $dest/static
rm -rf $dest2/static
rm -rf $dest/templates
rm -rf $dest2/templates

cp $dev/*.py $dest
cp $dev/*.sh $dest
cp -R $dev/manual $dest
cp -R $dev/manual $dest2
cp -R $dev/static $dest
cp -R $dev/static $dest2
cp -R $dev/templates $dest
cp -R $dev/templates $dest2

cd $dev && find ./lib  -name "*.py" | cpio -pdm $dest
cd $dev && find ./lib  -name "*.html" | cpio -pdm $dest
cd $dev && find ./lib  -name "*.html" | cpio -pdm $dest2

cd $dev && find ./plugin  -name "*.py" | cpio -pdm $dest
cd $dev && find ./plugin  -name "*.html" | cpio -pdm $dest
cd $dev && find ./plugin  -name "*.html" | cpio -pdm $dest2

#mini="pyminifier --obfuscate-builtins --obfuscate-import-methods"
mini="pyminifier --obfuscate-builtins"

pyminifier -o $dest2/sjva.py $dest/sjva.py

folder=("/lib/framework" "/lib/framework/common" "/lib/framework/common/celery" "/lib/framework/common/daum" "/lib/framework/common/fileprocess" "/lib/framework/common/movie" "/lib/framework/common/notify" "/lib/framework/common/ott" "/lib/framework/common/plugin" "/lib/framework/common/rss" "/lib/framework/common/share" "/lib/framework/common/telegram_bot" "/lib/framework/common/torrent" "/lib/framework/common/util" "/lib/framework/tving" "/lib/framework/tving/api" "/lib/framework/wavve" "/lib/framework/wavve/api" "/lib/system" "/plugin/command" "/plugin/daum_tv" "/plugin/ffmpeg" "/plugin/fileprocess_movie" "/plugin/gdrive_scan" "/plugin/ktv" "/plugin/plex" "/plugin/rclone")

for value in "${folder[@]}";
do
  mkdir -p $dest2$value
  echo '========================================='
  echo $mini -d $dest2$value $dest$value/*.py
  echo '========================================='
  $mini -d $dest2$value $dest$value/*.py
done 

cp $dest/start.sh $dest2
cp $dest/start_termux.sh $dest2
cp $dest/worker_start.sh $dest2
cp $dest/lib/framework/py_version_func.py $dest2/lib/framework/py_version_func.py
cp $dest/plugin/command/model.py $dest2/plugin/command/model.py

chmod 777 -R /home/coder/project/SJ/git_release

NowDate=$(date +%Y%m%d)-$(date +%H%M)
cd $dest && 
git --git-dir $dest/.git add * && 
git --git-dir $dest/.git commit -m $NowDate && 
git --git-dir $dest/.git push

cd $dest2 && 
git --git-dir $dest2/.git add * && 
git --git-dir $dest2/.git commit -m $NowDate && 
git --git-dir $dest2/.git push