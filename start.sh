#! /bin/sh
export REDIS_PORT="46379"
export FILEBROWSER_PORT="9998"
export CELERY_MONOTORING_PORT="9997"
#nohup redis-server --port ${REDIS_PORT} &
#chmod +x ./bin/Linux/filebrowser
#nohup ./bin/Linux/filebrowser -a 0.0.0.0 -p ${FILEBROWSER_PORT} -r / -d ./data/db/filebrowser.db &

[ -z "${no_celery}" ] && nohup redis-server --port ${REDIS_PORT} &
if [ -z "${no_filebrowser}" ]; then
    chmod +x ./bin/Linux/filebrowser
    nohup ./bin/Linux/filebrowser -a 0.0.0.0 -p ${FILEBROWSER_PORT} -r / -d ./data/db/filebrowser.db &
fi
COUNT=0
while [ 1 ];
do
    if [ -f "./git/index.lock" ]; then
        rm -f ./git/index.lock
    fi
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
    #export FLASK_APP=sjva.py
    #if [ ! -d "./migrations" ] && [ -f "./data/db/sjva.db" ]; then
    #    python -OO -m flask db init
    #fi
    #if [ -d "./migrations" ]; then
    #    python -OO -m flask db migrate
    #    python -OO -m flask db upgrade
    #fi
    #while [ 1 ];
    #do
    #    if [ -f "./data/db/sjva.db" ] ; then
    #        break
    #    fi
    #    echo 'WAIT.. sjva.db'
    #    sleep 1
    #done
    [ -z "${no_celery}" ] && nohup sh ./worker_start.sh &
    python -OO sjva.py 0 ${COUNT} ${no_celery+no_celery}
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
