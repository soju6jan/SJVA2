@echo off
python -OO .\venv\Scripts\huey_consumer.py sjva.huey -k greenlet -w 50 -C -l ./data/log/huey.log