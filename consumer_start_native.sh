#!/bin/bash
ps -ef | grep sjva.huey | awk '{print $2}' | xargs kill -9
python -OO ./venv/bin/huey_consumer.py sjva.huey -k process -w 4 -C -l ./data/log/huey.log
