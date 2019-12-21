#! /bin/sh
COUNT=0
while [ 1 ];
do
    export FLASK_APP=sjva.py
    #if [ ! -d "./migrations" ] && [ -f "./data/db/sjva.db" ]; then
    #    python -OO -m flask db init
    #fi
    #if [ -d "./migrations" ]; then
    #    python -OO -m flask db migrate
    #    python -OO -m flask db upgrade
    #fi
    python -OO sjva.py 0 ${COUNT} debug no_celery
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
 