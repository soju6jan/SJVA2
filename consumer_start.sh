#! /bin/sh
ps -ef | grep sjva.huey | awk '{print $1}' | xargs kill -9
python -OO /usr/local/bin/huey_consumer.py sjva.huey -k process -w 4 -C -l ./data/log/huey.log
