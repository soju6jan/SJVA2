#! /bin/sh
COUNT=0
while [ 1 ];
do
    git reset --hard HEAD
    git pull
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
    python -OO sjva.py 0 ${COUNT}
    RESULT=$?
    echo "PYTHON EXIT CODE : ${RESULT}.............."
    if [ "$RESULT" = "1" ] || [ "$RESULT" = "2" ]; then
        echo 'REPEAT....'
    else
        echo 'FINISH....'
        break
    fi
    COUNT=`expr $COUNT + 1`
done