#! /bin/sh
nohup redis-server &
COUNT=0
while [ 1 ];
do
    git reset --hard HEAD
    git pull
    chmod -R +x ./bin
    if [ ! -d "./data/custom" ]; then
        chmod -R +x ./data/custom
    fi
    FILENAME="update_requirements.txt"
    if [ -f "$FILENAME" ] ; then
        pip install -r update_requirements.txt
    fi
    export FLASK_APP=sjva.py
    if [ ! -d "./migrations" ] && [ -f "./data/db/sjva.db" ]; then
        python -OO -m flask db init
    fi
    if [ -d "./migrations" ]; then
        python -OO -m flask db migrate
        python -OO -m flask db upgrade
    fi
    nohup sh ./worker_start.sh &
    python -OO sjva.py 0 ${COUNT}
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
