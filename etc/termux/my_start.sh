#! /bin/sh
export FILEBROWSER_PORT="9998"
chmod +x ./bin/LinuxArm/filebrowser
nohup ./bin/LinuxArm/filebrowser -a 0.0.0.0 -p ${FILEBROWSER_PORT} -r / -d ./data/db/filebrowser.db &
COUNT=0
while [ 1 ];
do
    git reset --hard HEAD
    git pull
    chmod 777 .
    chmod -R 777 ./bin
    if [ -d "./data/custom" ]; then
        chmod -R +x ./data/custom
    fi
    FILENAME="update_requirements.txt"
    if [ -f "$FILENAME" ] ; then
        pip install -r update_requirements.txt
    fi
    python -OO sjva.py 0 ${COUNT} no_celery
    RESULT=$?
    echo "PYTHON EXIT CODE : ${RESULT}.............."
    if [ "$RESULT" = "0" ]; then
        echo 'FINISH....'
        break
    else
        echo 'REPEAT....'
    fi 
    COUNT=`expr $COUNT + 1`
done 
