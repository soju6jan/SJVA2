@echo off
rem venv\Script\activate 를 실행하여 가상환경 중이어야 함.
rem git 설치되어 있어야 함.
set COUNT=0

:loop
    git reset --hard HEAD
    git pull
    set FILENAME=.\update_requirements.txt
    if exist %FILENAME% (
        pip install -r %FILENAME%
    )
    set FLASK_APP=sjva.py
    set res=T
    if exist ".\migrations\" set res=F
    if not exist ".\data\db\sjva.db" set res=F
    if "%res%"=="T" (
        python -OO -m flask db init
    )
    if exist ".\migrations\" (
        python -OO -m flask db migrate
        python -OO -m flask db upgrade
    )
    python -OO sjva.py 0 %COUNT%
    echo PYTHON EXIT CODE : %errorlevel%..............
    set res=F
    if errorlevel == 1 set res=T
    if errorlevel == 2 set res=T
    if "%res%"=="T" (
        echo REPEAT....
        set /a COUNT=%COUNT%+1
        goto loop
    ) else (
        echo FINISH....
    )
