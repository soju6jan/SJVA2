#! /bin/sh
#ps -ef | grep sjva.huey | awk '{print $1}' | xargs kill -9
python -OO ./venv/bin/celery worker -A sjva.celery --loglevel=debug
