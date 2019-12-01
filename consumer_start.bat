@echo off
python -OO .\venv\Scripts\huey_consumer.py sjva.huey -k process -w 4 -l ./data/log/huey.log