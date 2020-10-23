#!/bin/bash
cp /home/coder/project/SJ/SJVA2/*.py /home/coder/project/SJ/git_release/sjva2_py36
cp /home/coder/project/SJ/SJVA2/*.sh /home/coder/project/SJ/git_release/sjva2_py36
cp -R /home/coder/project/SJ/SJVA2/manual /home/coder/project/SJ/git_release/sjva2_py36
cp -R /home/coder/project/SJ/SJVA2/static /home/coder/project/SJ/git_release/sjva2_py36
cp -R /home/coder/project/SJ/SJVA2/templates /home/coder/project/SJ/git_release/sjva2_py36
cd /home/coder/project/SJ/SJVA2 && find ./lib -name "*cpython-36*" | cpio -pdm /home/coder/project/SJ/git_release/sjva2_py36
cd /home/coder/project/SJ/SJVA2 && find ./lib -name "*.html" | cpio -pdm /home/coder/project/SJ/git_release/sjva2_py36
cd /home/coder/project/SJ/SJVA2 && find ./plugin -name "*cpython-36*" | cpio -pdm /home/coder/project/SJ/git_release/sjva2_py36
cd /home/coder/project/SJ/SJVA2 && find ./plugin -name "*.html" | cpio -pdm /home/coder/project/SJ/git_release/sjva2_py36
cd /home/coder/project/SJ/git_release/sjva2_py36 && 
NowDate=$(date +%Y%m%d)-$(date +%H%M)
git --git-dir /home/coder/project/SJ/git_release/sjva2_py36/.git add * && 
git --git-dir /home/coder/project/SJ/git_release/sjva2_py36/.git commit -m $NowDate && 
git --git-dir /home/coder/project/SJ/git_release/sjva2_py36/.git push
