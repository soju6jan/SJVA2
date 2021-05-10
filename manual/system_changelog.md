
##### python3 버그 패치 #####
  - smi2srt : 시간 0 으로 나오는 문제 수정<br>
  - 파일처리 av2 : nfo 생성 안되는 문제 수정<br>
  - rclone_expand : import error 문제 수정<br>
  
##### TODO #####
  - plex agent dvd, ama 같은 폴더인 경우<br>

##### ■ 0.2.20.7 (2021-05-10) #####
  - 구글 WEB 방식 번역 추가 
    - python3 환경만 가능<br>
    - 기존 APIKEY 활용 방식은 "구글" => "구글 API" 로 이름 변경<br>
    - 언제 막힐지 모르나 APIKEY가 필요 없이 구글 번역 페이지를 통해 번역 함<br>
    - AV 메타에 이용하려면 시스템 설정에서 "구글 WEB" 선택. FTV 메타 이용하려면 메타 설정에서 선택<br>

##### ■ 0.2.20.6 (2021-05-04) #####
  - aniplus api 변경 대응<br>
  - 파일처리 av2 - 툴 : 중복제거 추가<br>
  - 파일매니저 플러그인 : 설치시 시스템 메뉴에 등록<br>

##### ■ 0.2.20.3 (2021-05-03) #####
  - 파일처리 av2 - 툴 : 비디오파일 정보 확인, 재생 지원. mp4가 아닌 경우 3분만 재생<br>

##### ■ 0.2.20.2 (2021-05-01) #####
  - 파일처리 av2 
    - -C 파일 처리시 타겟폴더에 다른 cd 파일이 있는 경우 cd3으로 처리<br>
    - 이미 파일처리된 -C 파일을 변경할 수 있는 툴 추가 <br>
  
##### <span style="color:red">■ 0.2.20.0 (2021-04-29)</span> #####
  - 도커 업데이트<br>

##### ■ 0.2.19.21 (2021-04-05) #####
  - 메타데이터 - 영화 : 배우이름, 줄거리가 영문인 경우 번역하는 옵션 추가<br>

##### ■ 0.2.19.20 (2021-04-01) #####
  - Plex SJVA.bundle 업데이트 : [(관련글)](https://forums.plex.tv/t/can-no-longer-update-library-database-with-sqlite3/701405/36)<br>
    - 최신버전에서는 update, delete 쿼리가 동작 하지 않음. 최신버전 Plex 인 경우 업데이트 필요<br>
    - SJVA.bundle 버전 : 0.2.19.20 으로 동일

##### ■ 0.2.19.18 (2021-03-29) #####
  - Plex Agent : plex 업데이트로 인한 문제 수정. 에이전트 버전 : 0.2.19.18<br>

##### ■ 0.2.19.15 (2021-03-21) #####
  - 파일처리 av2 : VR 영상 분류하는 기능 추가<span>
  - av : td0XX 가 앞에 붙어서 처리되는 버그 수정<span>

##### ■ 0.2.19.13 (2021-03-20) #####
  - klive : 커스텀 채널 설정 UI 개선 <span style="font-weight:bold; color:brown">오리알<span>
    ![](https://cdn.discordapp.com/attachments/657108436890157087/822738531071557642/qc0H06BLhv.gif)<br>


##### ■ 0.2.19.10 (2021-03-19) #####
  - 메타데이터 : FTV 기능 추가. 에이전트 업데이트 필요

##### ■ 0.2.19.6 (2021-03-11) #####
  - 티빙 일부 채널 재생안되는 문제 수정<br>

##### ■ 0.2.19.5 (2021-03-10) #####
  - telepot 라이브러리를 sjva 안에 내장 후 버그 수정.<br>

##### ■ 0.2.19.4 (2021-03-09) #####
  - 관리봇 변경 : super_sjva_bot => https://t.me/sjva_admin_bot. super_sjva_bot은 대답하지 않음.<br>
  - rclone 1.54.1 적용 by <span style="font-weight:bold; color:brown">이치로<span> [링크](https://github.com/wiserain/rclone/releases)
    - 구드공에 1.54.1 버전 필요.
  

##### <span style="color:red">■ 0.2.19.1 (2021-03-06)</span> #####
  - 구드공 방식 변경<br>
    - 이치로님의 rclone 1.54.0-2 버전 필수. [링크](https://github.com/wiserain/rclone/releases/tag/v1.54.0-2)<br>
    - 음악 제외 이전 완료.<br>
    - 업데이트 이전에 수신된 봇 자료를 받는 경우 source, copy_ 폴더안에 내용이 중복으로 있음. 방식 변경으로 인한 문제로 시간이 지나면 해결됨. <br>

  
  ⚠️⚠️ 작업 중 실수로 봇 TV + 구드를 이용하시는 분들 폴더에 AV 파일 들어가 있을 수도 있습니다. ⚠️⚠️

##### ■ 0.2.18.46 (2021-03-03) #####
  - 구드공 방식 변경중<br>
    - 릴레이 공유 방식 삭제. 봇 3종 직접 복사함<br>
    - VOD 게시판 회원 등급 5에서 4로 변경<br>
    - 대용량 게시판 추가<br>

##### ■ 0.2.18.45 (2021-03-02) #####
  - offcloud : 완료시 웹에서도 삭제하는 기능 추가 by <span style="font-weight:bold; color:brown">summer<span>

##### ■ 0.2.18.42 (2021-02-28) #####
  - GD 바로가기 관리 플러그인 추가 [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=3850) by <span style="font-weight:bold; color:brown">오리알<span><br>
  - 메타데이터 : Daum 영화 리뉴얼 대응<br>
  - 에이전트 업데이트. 버전 동일<br>
    - 모듈별 sjva 서버 설정 적용<br>
    - ktv 종영표시, movie 재생버전 분할하여 추가 기능 적용<br>
  - 봇 AV : 새로운 메타 적용<br>

##### ■ 0.2.18.39 (2021-02-21) #####
  - jav ama 크롤링 버그 수정<br>

##### ■ 0.2.18.38 (2021-02-18) #####
  - 토렌트 자료는 릴레이 공유 방식으로 변경완료 [(매뉴얼)](https://sjva.me/wiki/서비스/구글_드라이브_공유)<br>
    - 예전 방식은 이제 불가능하여 게시판 글 일괄 삭제<br>
  - python3 json.load 명령 버그 수정[(관련글)](https://sjva.me/bbs/board.php?bo_table=tip&wr_id=4681)<br>

##### ■ 0.2.18.36 (2021-02-17) #####
  - hdhomerun 옵션 추가 [(관련글)](https://sjva.me/bbs/board.php?bo_table=tip&wr_id=4681)<br>
    방송 url은 db에 저장되어 있기 때문에 바뀐 옵션을 적용하려면 IP 변경 버튼을 클릭해야 함<br>
  ![](https://cdn.discordapp.com/attachments/631112094015815681/811573818975453216/unknown.png)<br>


##### ■ 0.2.18.35 (2021-02-15) #####
  - 설정 - selenium에서 Daum 캡챠 전달하여 차단 푸는 방법 추가 by <span style="font-weight:bold; color:brown">이치로<span>

    - selenium 테스트에서 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=비밀의 숲' Go
    - 화면표시 클릭 => 캡챠 확인 => 다음 캡챠항목에 값 입력 => 캡챠풀기 클릭.
    - 검색이 잘 되는지 확인 후 쿠키정보에서 Tiara 값을 읽어 Site-Daum 설정에 입력
    
    ![](https://cdn.discordapp.com/attachments/631112094015815681/810779425674100736/unknown.png)<br>


##### ■ 0.2.18.34 (2021-02-13) #####
  - Global UI - 로컬 파일, 폴더 선택 팝업창 추가 by <span style="font-weight:bold; color:brown">떡잎<span><br>
  - 로그인시 다음 페이지가 Restart일 경우 다시 재시작하는 문제 수정 <span style="font-weight:bold; color:brown">떡잎<span><br>

##### ■ 0.2.18.31 (2021-02-07) #####
  - 홈페이지 서버 이전. AWS 라이트세일 국내리전 월 $160 플랜. IP : 52.78.103.230<br>
  - 구드공 서버 콘타보 미국리전에서 AWS로 이전<br>
  - 메타서버 이전 : [https://meta.sjva.me](https://meta.sjva.me)<br>

##### ■ 0.2.18.30 (2021-02-03) #####
  - 구드공 KTV-기타, FTV-방영중 카테고리 추가.<br>
    - KTV : 기존 자료중 릴이 이상하거나 비어있는 자료<br>
    - FTV : 현재 방영중인 외국TV. 자막 미포함 자료 금지.<br>
  - rclone v1.54 업데이트 반영 by <span style="font-weight:bold; color:brown">이치로<span>

##### ■ 0.2.18.25 (2021-01-24) #####
  - plex agent 업데이트 : 버전 0.2.18.25

##### ■ 0.2.18.24 (2021-01-24) #####
  - 메타데이터 변경사항

##### ■ 0.2.18.6 (2021-01-12) #####
  - 파일처리 - 국내TV : 회차제거 로직 삭제<br>
    다음 버전 파일처리 및 에이전트 대비<br>

##### ■ 0.2.18.6 (2021-01-06) #####
  - python3 환경에서 실행 안 되는 플러그인 수정<br>

##### ■ 0.2.18 (2021-01-02) #####
  - 재시작시 자동인증. 회원정리를 위해 당분간만<br>

##### ■ 0.2.17.23 (2020-12-22) #####
  - dmm 관련 : 사이트가 cookie 값을 추가해야만 작동하는 것으로 변경됨. 수정완료<br>
    이 문제로 agent, 파일처리, 봇 av 등이 영향을 받아 비정상 처리 되었을테니 확인 필요<br>
  - download_video : ANIPLUS 기능 추가<br>
    시청 권한이 있는 영상만 다운로드 가능<br>
  - download_video - ani365 : 사이트에 cloudflare 적용이 없어서 다시 가능해짐.<br>
    약간 수정하여 다시 작동 하도롬 함. (여전히 속도는 매우 느림)<br>


##### ■ 0.2.17.20 (2020-12-17) #####
  - klive : tvh proxy "-loglevel quiet" 추가 by <span style="font-weight:bold; color:brown">ㅋㅋ잠자<span>[(관련글)](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=1149)<br>

##### ■ 0.2.17.19 (2020-12-15) #####
  - tving 업데이트 대응 : 시스템 - 설정 - uuid 입력<br>
  - 참고<br>
      - tving 플러그인은 예전 api사용. uuid 필요없음<br>
      - tivimate에서 tving vod 재생은 웹 api 사용. uuid 필요<br>

##### ■ 0.2.17.18 (2020-12-07) #####
  - 시스템 - 설정 - 인증 : 로그인 화면에서 메뉴 표시 여부 설정<br>
  - alsonglyricfind.bundle 업데이트<br>
  - sj_daum.bundle 업데이트 by <span style="font-weight:bold; color:brown">이치로<span>[(관련글)](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=1082)<br>
  

##### ■ 0.2.17.16 (2020-12-03) #####
  - command : execute api 추가<br>
    url 요청으로 command를 실행하고 그 결과를 받을 수 있음.<br>

##### ■ 0.2.17.15 (2020-12-01) #####
  - tving, wavve python3 관련 수정 by <span style="font-weight:bold; color:brown">이치로<span><br>
  - command 관련 수정 [(참고)](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=1063)<br>
  
##### ■ 0.2.17.14 (2020-11-16) #####
  - wget => curl 변경<br>

##### ■ 0.2.17.13 (2020-11-15) #####
  - av_agent : proxy 기능 정리<br>
    - dmm 이미지 서버는 국내 ISP에서 차단됨<br>
    - plex에 전달하는 이미지 url은 무조건 sjva를 거치도록 변경. sjva가 이미지를 대신 받고 그 이미지를 전달함<br>
    - 현재는 국내 ISP 환경에서도 이미지를 잘 가져옴(https 제거시)<br>
    - 적용순서<br>
      - SJVA 구동 위치 상관없이 Proxy Off로 테스트<br>
      - VPS등 국내 ISP가 아닌 곳에서 SJVA 구동 : Proxy off<br>
      - 국내 ISP에서 SJVA 구동. 국내 ISP가 아닌 곳에서 Http Proxy 서버가 있는 경우 : Proxy On 으로 하여 Proxy 서버 url 입력<br>
      - Proxy 서버가 없을 때 : Proxy Off, Discord-Proxy On<br>
    
##### ■ 0.2.17.11 (2020-11-14) #####
  - 다운로드 클라이언트 : 다운로드스테이션에서 사용하는 API 가 python3에서 동작하지 않는 문제 수정<br>
  - 시스템 - 설정 - 일반설정 - Site
    - 웨이브 proxy 설정도 이동<br>
    - 티빙도 웨이브처럼 시스템 설정으로 변경<br>
      티빙은 token값이 유저별 인증값으로 로그인시 항상 동일<br>


##### ■ 0.2.17.9 (2020-11-13) #####
  - [SinaPlayer 소개](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=2715)<br>
  - pip 문 변경<br>
    - os.system("pip install XXX")  =>  os.system("{} install XXX".format(app.config['config']['pip']))<br>
  - 시스템 - 설정 - 일반설정 - Site - Wavve에 Credential 입력 하는 방식으로 변경<br>
    - 최근 웨이브 정책이 변경된 것 같음. 몇번 로그인하면 이전 credential값을 만료 시켜버림. 웹, 웨이브앱 포함 <br>
    - wavve, klive, tivimate 등 wavve 스트림 정보를 받는 것을은 모두 시스템 설정값을 가지고 이용하는 것으로 변경.<br>
    - 자체 로그인 기능도 일부러 뺏으니 웹에서 가져와서 사용해야 함.<br>
    - 웹에서 영상 재생 후 streaming 요청 헤더 값 사용<br>
      ![](https://cdn.discordapp.com/attachments/519845768547401729/776771663898345492/unknown.png)<br>


##### ■ 0.2.17.7 (2020-11-12) #####
  - klive 
      - custom 변경시 epg 생성 안하도록 변경. 너무 오래걸림<br>
        epg 스케쥴 시간때 변경된 채널로 생성되며 필요한 경우에는 수동으로 실행해야 함.<br>
      - tving : drm 영상 포함 여부 선택 가능<br>
        디바이스ID UI 추가. 최초는 첫번째 값으로 세팅됨.<br>
  - tivimate<br>
    - drm 설정 추가<br>
    - 티빙 영화 카테고리<br>
      드라마 : category = MG100,MG190,MG230,MG270,MG290<br>
      로멘스/멜로 : category = MG130<br>
      코미디 : category = MG110<br>
      액션/SF : category = MG120,MG170,MG180,MG220,MG260,MG200,MG210<br>
      공포/스릴러 : category = MG160,MG140,MG150<br>
      애니메이션 : category = MG240<br>
      다큐/클래식 : category = MG250,MG330<br>
  

##### ■ 0.2.17.6 (2020-11-06) #####
  - 파일브라우저 2.0.16 => 2.9 로 변경<br>

##### ■ 0.2.17.5 (2020-11-02) #####
  - 2등급 회원 일괄 삭제<br>
  - 구드공 av : 처리 공유드라이브 리밋 걸려 며칠간 오작동 한것으로 보임. 11월 2일 아침까지 요청 일괄삭제.<br>
    fail_sorry_lost_file 리턴을 보내려고 하였으나 이 작업도 너무 올려 리턴없이 삭제 함.<br>
  - 구드공 vod : 미처리된 vod 재처리. 예전 영상을 받을 수 있음<br>
  - 웹 torrent movie 게시판 토렌트 연동 버그 수정<br>

##### ■ 0.2.17.4 (2020-10-27) #####
  - ffmpeg 권한 문제 수정<br>
  - tivimate : 스케쥴링 실행 50회당 1회씩 전체 로딩. for epg<br>
  - rclone 1.53.2 기반 이치로님 버전 적용<br>

##### ■ 0.2.17.3 (2020-10-26) #####
  - termux 스크립트 변경<br>
    - termux 저장소 접근 권한 필요. db파일은 안드 다운로드 폴더 SJVA 폴더 안에 저장ㅊ
      termux 데이터를 모두 삭제 후 재설치에도 설정 유지. 도커와는 다르게 초기화시 플러그인들은 재설치 해야 함.<br>
      안드 /sdcard => alpine /mnt/storage 로 소프트 링크. 파일다운 같은 경우 경로를 이쪽으로 설정 권장<br>
    - alpine 기준 도커와 동일하게 /app 폴더가 sjva 파일 위치<br>
    - termux 실행 후 background로 sjva 자동 실행되는데 화면에서 k 입력시 관련 프로세스 모두 kill<br>
    - 다시 s 입력시 실행. foreground 실행되므로 로그 확인 가능<br>
    - nginx 플러그인 설치 가능<br>

##### <span style="color:red">■ 0.2.17 (2020-10-24)</span> #####
  - tivimate 플러그인 [(게시글)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=2537)<br>


##### ■ 0.2.16.30 (2020-10-22) #####
  - klive : 버그 수정<br>
  - epg : 간헐적으로 sjva 다운되는 문제 수정. 테스트 필요<br>


##### ■ 0.2.16.29 (2020-10-20) #####
  - 구드공 서버 aws 한국리전에서 콘타보 미국리전으로 변경<br>
    안될 경우 방화벽 예외 등록 필요. IP : 209.126.4.134<br>

##### ■ 0.2.16.26 (2020-10-19) #####
  - 만화 다운로드 : 확장자 없는 이미지 URL, 상대 경로 URL 버그 픽스. <br>
  - javdb : 날짜 라벨 변경 대응<br>
  - 릴레이용 공드 한도 초과로 인해 10개 정도의 봇 요청을 일괄 삭제. fail_sorry_lost_file로 표시<br>
  - 릴레이 공유시 SJVA 통신이 가능한 경우에만 복사하도록 변경. fail_relay_blacklist 삭제.<br>
    일정한 텀을 두고 5회 시도 후 실패처리<br>

##### ■ 0.2.16.25 (2020-10-14) #####
  - Podcast Maker : 구글드라이브 파일을 RSS로 만드는 기능 추가 [(게시글)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=2484)<br>


##### ■ 0.2.16.24 (2020-10-13) #####
  - 만화 다운로드 플러그인 추가 - 마나토끼, 뉴토끼 [(게시글)](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1657)<br>
  - ani365 : 보안 강화되어 다운 안되는 문제 수정<br>
  - 트랜스미션 : 트랜스미션 여유 공간 확인 기능 추가 by <span style="font-weight:bold; color:brown">이치로<span> [(참고)](https://github.com/soju6jan/downloader/pull/10)<br> 
  - 구드공 : fail_blacklist, fail_relay_blacklist 구분<br>
  

##### ■ 0.2.16.22 (2020-10-11) #####
  - 웨이브 : program db 관련 기능 개선 by <span style="font-weight:bold; color:brown">lapis<span><br>
  - 릴레이 공유 블랙리스트<br>
    - 구드공 서버는 워커를 동원해서 복사를 완료한 후 개별 사용자의 SJVA API를 호출하고 사용자의 SJVA는 그 후 공드에서 그 파일을 받습니다.<br>
    - 어떤 연유로 API 호출이 안되는 경우가 있습니다. 예 : 방화벽, SJVA재시작, 일시작 네트워크 중단 등등<br>
    - 일반 구드공은 그런 경우 일정 시간 이상 안 가져가는 폴더를 자동삭제하며 워커의 복사량을 낭비하지만 그리 큰 문제는 아닙니다.<br>
    - 다만 릴레이 공유는 그 사용자 때문에 전체 흐름이 중단될 수 있어 이런 사용자를 차단해야 할 것 같습니다. <br>
      (극단적으로 1번 사용자가 API 호출을 못 받으면 10분 이상 처리가 지연됩니다.) <br>
    - 자동적으로 처리되지는 않고 지속적으로 문제가 발생한 사용자를 제가 수동으로 블랙리스트에 넣을 것이며 그 사용자는 'fail_blacklist' 결과를 받게 됩니다.<br>
    - 이 결과값을 받는 사용자는 자신의 네트워크 환경을 점검, 수정 하시고 저에게 해제 요청하시기 바랍니다.<br>


##### ■ 0.2.16.21 (2020-10-09) #####
  - youtube 플러그인 추가 by <span style="font-weight:bold; color:brown">joyful<span> [(게시글)](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1608)<br>
  - ani365 정상화<br>

##### ■ 0.2.16.20 (2020-10-07) #####
  - 봇 KTV : 리스트 표시 방법 개선 <span style="font-weight:bold; color:brown">이치로<span><br>
  - 봇 AV : 배우명으로 검색 추가 by <span style="font-weight:bold; color:brown">이치로<span><br>
  - nginx 플러그인 추가 [(게시글)](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1592)<br>

##### ■ 0.2.16.16 (2020-09-29) #####
  - 구드공 : 릴레이 공유 방식 일부 수정. UI개선<br>

##### ■ 0.2.16.16 (2020-09-29) #####
  - 웨이브 : 프로그램별 다운시 큐 DB에 저장하여 실패시 자동 재실행 by <span style="font-weight:bold; color:brown">lapis<span><br>

##### ■ 0.2.16.10 (2020-09-21) #####
  - 웹. 구드공 요청 횟수 제한 추가<br>
    - 올라오는 모든 컨텐츠를 큰 고민 없이 요청하여 받는 경우가 많음.<br>
    - 예전처럼 개인의 리소스를 사용하는 방식이 아니라 정해진 자원을 같이 쓰기 때문에 제한이 필요함.<br>
    - 1회 공유 제공시 컨텐츠 100건 혹은 20,000개 파일 복사 가능함<br>
      예) 파일수가 200개 이하인 컨텐츠는 100건. 파일수가 500개인 컨텐츠는 40건. 파일수가 1000개인 컨텐츠는 20건<br>
    - S 게시판만 적용. 공유 제공하지 않는 경우(업로드 한적이 없을 때) 1회량 만큼 사용 가능<br>
    - 웹 포인트 100증가시 건수 10개, 파일수 2천개 가능. (로그인만 했을 경우 하루에 10개씩 복사 가능)<br>
    - 제공 횟수 계산시 T 게시판 포함.<br>
  - av agent <br>
    - javdb 사이트 변경 대응<br>
    - dmm 이미지 proxy 방식 변경.python request => 리눅스 wget 명령<br>

##### ■ 0.2.16.4 (2020-09-09) #####
  - 구드공 
    - crypt나 로컬로 받을 때 구글 리모트 이름 지정하는 옵션 추가<br>
    - 임시 conf 사용안함. 리모트 경로대신 {폴더ID} 사용하는 방식으로 명령 변경<br>

##### ■ 0.2.16.3 (2020-09-08) #####
  - GSheet 기능 업데이트 by<span style="font-weight:bold; color:brown">오리알<span><br>

##### ■ 0.2.16.2 (2020-09-07) #####
  - 설치 팝업 안 뜨는 문제 수정<br>
  - 봇 영화 : 구드공 연동 + 자막 포함시 간헐적으로 영상이 없는 문제 수정<br>
  - ddns 테스트 안되는 문제 수정<br>
  - 구드공 : Plex 일부 영상 검색 안 되는 문제 수정<br>
  - ani365 : 자막 srt로 변환 안 되는 문제 수정<br>
    기존에 받은 영상은 DB에서 지우고 다운로드 재요청 후 자막생성되면 다운로드 중지<br>
    srt 파일도 지워야 재생성<br>

##### <span style="color:red">■ 0.2.16 (2020-09-07)</span> #####
 - [중요] DB 파일 분리 [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1868)<br>


##### ■ 0.2.15.18 (2020-09-05) #####
  - 비디오 다운로드, 봇 KTV : 시작시 자동실행 안하는 문제 수정<br>
  - RcloneExpand : fclone UI적용, gsheet get_size시 문서업데이트 오류수정 by<span style="font-weight:bold; color:brown">오리알<span>
  - 구드공 : 팝업창 사라지는 문제 수정<br>
  - 봇 3종<br>
    - 구드공 조건에 의해 받을 경우 팝업창 표시 않음.<br>
    - 수동으로 요청시 팝업창 표시<br>
    - 구드공 완료 표시 추가.<br>
    - 스케쥴링시 구드공 요청 미완료된 항목 재요청 (하루이내 요청한 것들만)<br>


##### ■ 0.2.15.16 (2020-09-04) #####
- 홈화면 : 최신버전 확인 기능 추가<br>
- 봇 AV : HEYZO 품번 잘못 파싱하는 문제 수정<br>
- 토렌트 + 구드공 : 공유드에 못 받는 문제 수정<br>
- 구드공 : gc리모트인 경우 Rclone Expand 플러그인 호출하는 기능 삭제<br>
  Copy Dest에 직접 리모트 작성해서 사용.<br>
- rclone : binary, config 파일경로 설정 추가<br>
- ROOT/bin/Linux/fclone 추가<br>
- tving : 최근 방송 포스터 보기 옵션 추가 by <span style="font-weight:bold; color:brown">이치로<span> [(매뉴얼)](https://github.com/soju6jan/tving/pull/1)<br>
- 비디오 다운로드 플러그인 추가 - ani365 [(참고)](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1496)<br>
  

##### ■ 0.2.15.9 (2020-08-30) #####
- 구드공 : 카데고리 추가. ktv-어린이, ftv-더빙, movie-더빙, etc-영상/음악/SW/기타<br>
- RSS : 스케쥴링 우선순위, 빈도 옵션 추가<br>
  ![](https://cdn.discordapp.com/attachments/631112094015815681/749500969464627240/unknown.png)
  봇 ktv, movie 소스 조정 : torrentbom, torrentqq, torrentmax, torrenthaja, torrentdia, ttobogo<br>
- 봇 3종 : 구드공 수신 안되는 문제 수정<br>
  약 10시간 동안 수신 안된 컨텐츠는 웹에서 수동으로 받으셔야 합니다.<br>

##### ■ 0.2.15.6 (2020-08-29) #####
- Rclone : 실행파일 이치로님이 빌드하신 gclone 으로 변경<br>
- 봇 AV : 웹 UI에서 구드공 복사 안되는 문제 수정<br>
- 봇 3종 : 업로드 중복시 구드공 수신시마다 복사하는 문제 수정<br>
  
##### ■ 0.2.15.4 (2020-08-27) #####
- Rclone binary : 1.52.3 버전으로 변경<br>
- Rclone Expand 에 포함된 gclone birary 이치로님이 빌드하신 버전으로 변경[(참고)](https://github.com/wiserain/gclone/releases)<br>
- 봇 AV : 타입별 구드공 경로 설정<br>
  ![](https://cdn.discordapp.com/attachments/631112094015815681/748556972025970728/unknown.png)


##### ■ 0.2.15.2 (2020-08-26) #####
- 런처 guacamole : db 백업, 복원 기능 추가<br>

##### <span style="color:red">■ 0.2.15 (2020-08-26)</span> #####
 - 토렌트 관련 정책 변경 [(참고)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1735)<br>

##### ■ 0.2.14.26 (2020-08-22) #####
- rclone expand : gsheet 연동 기능 추가 by <span style="font-weight:bold; color:brown">오리알<span> [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1680)<br>
- Plex sj_daum 에이전트 업데이트. 버전 : 2020-08-21<br>
    모델 드라마 업데이트 안되는 문제 수정<br>
    일부 영화 포스터 못 가져오는 문제 수정<br>
    디폴트 포스터, 아트웍 숫자 1로 변경. 포스터 2개 아트웍 1개 가져옴<br>


##### ■ 0.2.14.21 (2020-08-12) #####
- rclone expand 플러그인 추가 by [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1487)<br>
- 구드공 : 구드공 업로드 UI에 폴더명 추가 [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1528)<br>
- 구드공 : 간헐적으로 업로드, 다운로드 실패 문제 수정 [(참고)]]()

##### ■ 0.2.14.18 (2020-08-11) #####
- gallery-dl 플러그인 추가 by <span style="font-weight:bold; color:brown">lapis<span> [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1467)<br>

##### ■ 0.2.14.18 (2020-08-10) #####
 - 봇TV + 구드공 : 바로 받을 경우 딜레이 1분<br>

##### ■ 0.2.14.17 (2020-08-10) #####
 - 다운로드 클라이언트 : .torrent 파일 업로드 및 토렌트 추가기능, 감시폴더 지원 by <span style="font-weight:bold; color:brown">프링향<span><br>

##### ■ 0.2.14.13 (2020-08-04) #####
- torrent_info : http_proxy 적용 기능 추가 by 이치로<br>
- 봇 다운로더 + 구글 드라이브 공유 연동 [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1383)<br>

##### ■ 0.2.14.10 (2020-08-03) #####
 - 유투브 자동 업로드 플러그인 추가 by <span style="font-weight:bold; color:brown">프링향<span> [(매뉴얼)](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1339)<br>
 - torrent_info 플러그인 업데이트 by <span style="font-weight:bold; color:brown">이치로<span> [(참고)](https://sjva.me/bbs/board.php?bo_table=free&wr_id=4575)<br>
 - 구글 드라이브 공유 : Plex 검색 기능 추가 by <span style="font-weight:bold; color:brown">오리알<span><br>
 - 봇 다운로드 : RSS API이 server_id_mod 파라미터 추가<br>
 - 토렌트 트래커자동 추가시 완료표시가 안되는 문제 수정<br>
   
##### ■ 0.2.14.8 (2020-08-01) #####
 - ANI24 : 최신화부터 다운로드 받고 싶은 경우를 위한 정렬 옵션 by <span style="font-weight:bold; color:brown">프링향<span><br>>

##### ■ 0.2.14.7 (2020-07-31) #####
 - 구드공 : 리모트 정보 입력칸 제거<br>
   conf 파일 이용. 업로드 리모트를 상단으로 올릴 필요 없음. root_folder_id 정보 제거할 필요 없음<br>

##### ■ 0.2.14.6 (2020-07-28) #####
 - 시스템 설정 : 일반설정 - 메모 탭 추가<br>
   개인적으로 도커 생성 명령을 자주 찾아 헤매는데 그런 정보 저장용.<br>
   ![](https://cdn.discordapp.com/attachments/631112094015815681/737575201017036840/unknown.png)

##### ■ 0.2.14.5 (2020-07-26) #####
 - 구드공 : 자막 DB 초기화<br>

##### ■ 0.2.14.4 (2020-07-24) #####
 - wavve : 화질별 순서 변경 대응<br>
 - 구드공 : 자막 전체 업데이트 버튼 추가<br>
   서버업데이트 버튼을 클릭해도, 서버 개수와 맞지 않을 때 사용<br>
   이후에는 서버업데이트 버튼만으로도 문제 없으니 사용 자제<br>

##### ■ 0.2.14.1 (2020-07-23) #####
 - klive : 티빙 JTBC2등 일부 채널 재생 안되는 문제 수정<br>

##### <span style="color:red">■ 0.2.14 (2020-07-22)</span> #####
 - 구글 드라이브 공유 플러그인 추가<br>

##### ■ 0.2.13.20 (2020-07-20) #####
 - 봇 AV : censored외 파일크기 검사하지 않는 버그 수정. 화이트리스트 파일명 적용 안 되는 문제 수정. western 폴더명 옵션 추가<br>
   더 큰 사이즈 받는 옵션 버그 수정<br>

##### ■ 0.2.13.18 (2020-07-19) #####
 - 다운로드 클라이언트 : 마그넷에 토렌트 이름 추가, 트래커 자동으로 다운로드 기능 추가. by lapis님<br>
 - 파일처리 AV : subtitlecat 사이트변경 대응 by 오리알님<br>

##### ■ 0.2.13.15 (2020-07-12) #####
 - lapis님이 "다운로드 클라이언트"에 트래커 기능을 추가해주셨습니다. [(참고)](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=624)<br>
 - RSS2 포인트 제한 삭제.<br>

##### ■ 0.2.13.14 (2020-07-08) #####
 - Starbuck님의 vod 검색 플러그인 업데이트<br>
   Starbuck님 코멘트 : 개인적으로 잘 안보는 영상까지 전부 받는것은 부담스럽고, 수동으로 매번 인기프로그램을 추가하기에 번거로워서,<br>
   웨이브/티빙 인기 프로그램을 화이트리스트에 자동으로 추가해주는 기능 추가하였습니다.<br>

##### ■ 0.2.13.12 (2020-07-03) #####
 - 이치로님의 docker-ctunnel 업데이트. dmm 사이트 우회 가능 [(참고)](https://hub.docker.com/r/wiserain/ctunnel)<br>
 - 웨이브 : 최근방송 자동. 2160p 화질 선택시 1080p 받을 수 있는 옵션 추가<br>
   ![](https://cdn.discordapp.com/attachments/631112094015815681/728430658392686672/unknown.png)
 - 봇 TV : 지연시간 동작 버그 수정<br>
   설정의 지연시간 : 텔레그램 수신이후 지연시간 동안 판단하지 않음<br>
   다운로드 조건의 1080 지연시간 : 720 영상은 설정의 지연시간 + 1080 지연시간 이후 다운<br>
 - 파일처리 AV : 원본파일명 포함 옵션 추가<br>
   ![](https://cdn.discordapp.com/attachments/631112094015815681/728475405568180245/unknown.png)


##### ■ 0.2.13.10 (2020-07-01) #####
 - 파일처리 AV : 자막포함 영상 이동처리 [(참고)](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1006)
 - 홈화면 실행중 강조<br>
 - 봇 영화 : 년도 최대값 옵션 추가<br>
 - klive : 웨이브 티빙 최신 VOD를 m3u로 제공하는 API 추가<br>

##### ■ 0.2.13.6 (2020-06-29) #####
 - FFMPEG : 타임아웃 시간 설정 추가. [(참고)](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=3949)<br>
 - 봇 TV : 장르가 없는 경우 "미분류" 장르명으로 대체. [(참고)](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=3952)<br>
 - RSS 다운로드 : 스케쥴링 작동 버튼 동작안하는 문제 수정<br>

##### ■ 0.2.13.5 (2020-06-28) #####
 - RSS2 : 플러그인 포인트 4000점 이상부터 사용. [참고](https://sjva.me/bbs/board.php?bo_table=notice&wr_id=1052)<br>
 - 봇 TV : 다운로드 모드 옵션 적용<br>
 - klive : 웨이브 계정변경시 계정값 초기화 버튼 추가<br>

##### <span style="color:red">■ 0.2.13 (2020-06-25)</span> #####
 - 파일처리 AV : 오리알님이 자막다운로드 기능 추가 [매뉴얼](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=1006)<br>
 - Offcloud : 추적 기간 지난 파일 이동<br>
 - selenium 파일 다운로드 지원 (크롬한정)<br>

##### ■ 0.2.12.15 (2020-06-22) #####
 - 시스템 - 설정 - Site - Daum 추가<br>
   SJ Daum은 수정전<br>
   한번 캡챠에 걸린 네트워크는 쿠키값을 변경해도 소용없음. (IP체크하는 것 같음)<br>
   같은 네트워크에 있는 PC로 차단을 먼저 해제한 후 Refresh 버튼을 눌러 값을 가져온 후 사용<br>
   selenium 테스트에서 아래 주소를 입력하여 확인<br>
   https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EB%82%98%EC%81%9C+%EB%85%80%EC%84%9D%EB%93%A4<br>
   ![](https://cdn.discordapp.com/attachments/631112094015815681/724816825464127499/unknown.png)

##### ■ 0.2.12.14 (2020-06-21) #####
 - 웨이브 로그인 관련 수정 [참고](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=519)<br>

##### ■ 0.2.12.13 (2020-06-18) #####
 - AV Agent : 설정 Discord Proxy On/Off 추가 <br>
   국내 환경에서는 메타 정보를 가져오는 곳은 접속이 되나 포스터가 있는 이미지 서버는 ISP 차단이라고 결론<br>
   그래서 메타를 가져오는 것 같더라도 Proxy를 사용하는게 최선. VPS 에 Proxy 서버를 설치하거나, 그린터널을 사용해야함.<br>
   Proxy 사용이 여의치 않거나 실패할 때 느리지만 다른 방법으로 Discord를 이용하는 방법 추가. <br>
   디스코드에 이미지 URL을 보내면 디스코드는 미리보기를 위해 차단 사이트에서 이미지를 가져와서 화면에 띄움.(당연히 디스코드는 차단아님)<br>
   화면에 띄우는 URL은 디스코드 CDN 주소로 누구나 접근가능하기에 이 주소로 이미지를 가져와서 Plex에 보냄<br>
   

##### ■ 0.2.12.10 (2020-06-17) #####
 - Plex SJVA Bundle 업데이트. (버전 2020-06-17)<br>

##### ■ 0.2.12.7 (2020-06-16) #####
 - 파일처리 AV : 타겟 리스트 작성시 폴더만 추가되어야하는데 파일까지 리스트에 포함되는 버그 수정<br>
 - rclone : mount, serve 작업 생성시 --dir-cache-time 1h => 1m으로 변경<br>
 - SJ Daum Agent 업데이트 버전 (2020-06-16)<br>

##### ■ 0.2.12.4 (2020-06-15) #####
- klive 설치 후 epg 미설치시 메뉴가 전체가 안나오는 문제 수정. 여진히 epg 미설치시 klive는 동작 안함. [참고](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=3658)<br>
- KLive : m3u 파일 전송 api 추가 [참고](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=484&&#c_488)<br>
- SJ Daum : 영화 영문제목이 없는 경우 에러 발생하는 문제 수정. [참고](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=483)<br>
- 영화 파일처리에서 smi2srt 호출 못하는 문제 수정<br>
- ani24 : url zo.com이면 do.com으로 강제 변경<br> 

##### ■ 0.2.12.3 (2020-06-14) #####
 - SMI2SRT 플러그인 설치형으로 변경. [링크](https://sjva.me/bbs/board.php?bo_table=sjva_plugin&wr_id=1010)<br>
 - KLive 수정 [참고](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=475) [참고](https://sjva.me/bbs/board.php?bo_table=free&wr_id=2896)<br>
 - 미인증시 플러그인 로딩 안함.<br> 
 - AV Agent : dmm 지역제한 팝업 나오는 문제 수정. url 파라미터값 변경 [참고](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=472)<br>

##### <span style="color:red">■ 0.2.12 (2020-06-13)</span> #####
 - Tool - Command => 시스템 - Command로 변경<br> 
   [Command 기능](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=923)<br>

##### ■ 0.2.11.15 (2020-06-13) #####
 - KLive : 웨이브 재생 줌 멈춤 문제 방어코드 추가. [참고](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=3606)<br>
 - Offcloud : 추적 기능. 다중 폴더일 때 이동 안하는 문제 수정.<br>

##### ■ 0.2.11.13 (2020-06-12) #####
 - Plex SJ Daum 에이전트 업데이트. 영화 메타 못가져오는 문제 수정. [참고](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=3541)<br>
   Plex - 플러그인 - Scanner / Agent 설치 - 설치목록로딩 후 - SJ Daum 설치 클릭하여 설치<br>
   설치 후 Plex 설정 - SJ Daum Agent 버전 버튼 클릭하여 2020-06-12 버전 확인<br>

##### ■ 0.2.11.9 (2020-06-11) #####
 - KLive : wavve proxy 적용 안되는 문제 수정<br>
 - KLive : m3u api에 format=1, group 파라미터 추가. [참고](https://sjva.me/bbs/board.php?bo_table=tip&wr_id=876)<br>
 - 스케쥴링 정보에 cron 값을 입력하면 cron으로 스케쥴링.<br>
  [Cron표현식 참고](https://zamezzz.tistory.com/197) [Cron Test](https://crontab.guru/)<br>
  메인화면 스케쥴링 정보 화면 수정<br>
 - Tving : 항상 오디오 비트레이트 64kb/s로 받는 문제 수정. FHD기준 256kb/s<br>

##### ■ 0.2.11.7 (2020-06-10) #####
 - 영화 파일처리 버그 수정(daum정보 검색시 쿠키 안쓰는 문제)<br>
 - offcloud 추적 기능 버그 수정(torrent_info 업데이트 안되는 문제 수정)<br>
 - ani24 일부 영상 못받는 문제 수정 (2841)<br>

##### ■ 0.2.11.6 (2020-06-09) #####
 - RClone Remote Control 기능 제거<br>
 - KLive m3u 목록에 그룹 대신 소스가 표시되는 문제 수정<br>
 - sjva.me 영화 게시판 추가. TV와 영화 둘다 다운로드 클라이언트 플러그인을 통해 다운 받음.<br>
   TV는 봇TV에서 다운로드 클라이언트로 변경<br>

##### ■ 0.2.11.4 (2020-06-08) #####
 - Offcloude : RSS 작업 celery 작업으로 변경<br>
  추적기능은 파일을 이동하는 작업으로 파일처리처럼 celery 작업으로 변경했어야 했는데 못한 상태였음. 홈페이지 반응 속도가 좋아질거라고 예상<br>
  - 애니24 이상 없음. 문제 발생시 코드 제보<br>
 - 네이버 웹툰 : 자동에서 "이전 회차 모두 다운로드" 옵션 추가<br>
 - SJVA 웹 => 플러그인설치, 재시작, RSS2 사이트정보, KTV다운로드, Offcloud 캐쉬확인, Offcloud 캐시추가.<br>
  연동시 APIKEY 사용. 

##### ■ 0.2.11.2 (2020-06-08) #####
 - KLive : Plex Proxy 연결 버그 수정. EPG 정보가 없어도 채널태그는 생성하여 모든 채널이 등록가능하게 변경.
 - EPG : 스케쥴링 작동 표시 안되는 버그 수정
 - KLive : SBS 재생안되는 문제 수정
 
##### <span style="color:red">■ 0.2.11 (2020-06-07)</span> #####
 - [홈페이지 인증 필수](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=702)

##### <span style="color:red">■ 0.2.10 (2020-06-06)</span> #####
 - KLive, EPG, Tvheadend 설치형으로 변경
 - tving proxy PHP 방식에서 HTTP Proxy로 변경

##### ■ 0.2.9.8 (2020-06-02) #####
 - KLive : wavve 커스텀 설정에 안나오는 문제 수정. 현재 epg, klive 플러그인 전체 수정중이나 일단 이것만 해결한 버전 먼저 올림.
 - AV Agent : Proxy 사용시 포스터 못 가져오는 문제 수정. 포스터도 플러그인이 대신 가져온 후 Plex에 전송<br>

##### ■ 0.2.9.7 (2020-05-31) #####
 - RSS2 사이트 점검<br>
 - 파일처리 - AV : 스케쥴 On/off 버튼 동작하지 않는 문제 수정<br>
 - AV Agent : dmm 컨텐츠 중 확대이미지(CD표지)가 제공되지 않을 때 세부내용 표시못하는 문제 수정<br>
 - AV Agent : JAVDB 메타검색시 단시간에 많은 요청을 할 경우 정보를 가져올수 없음. 방어적으로 5번까지 재시도하여 정보를 가져오도록 하였으나, 이때도 실패하는 경우 발생. 이럴 경우 다시 시도해야함. <br>
 
##### ■ 0.2.9.3 (2020-04-13) #####
 - [네이버 웹툰 에피소드 제목 길이제한.](https://sjva.me/bbs/board.php?bo_table=suggestions&wr_id=382)<br>
 - 큐빗 완료시 삭제 조건 변경. 기존 100프로 다운로드에서 상태코드 값 사용<br>
 - [애니 24. hls로 변경 대응](https://sjva.me/bbs/board.php?bo_table=qa&wr_id=2810)<br>
 
##### ■ 0.2.9.2 (2020-04-07) #####
 - 큐빗토렌트 HTTP 링크 직접 다운로드 기능 추가 - 자막관련<br>

##### <span style="color:red"> ■ 0.2.9 (2020-04-05)</span> #####
- 토렌트 - 다운로드 플러그인 "다운로드 클라이언트"로 변경(설치형) <br>
  큐빗토렌트, aria2 지원<br>
- 토렌트 - RSS 다운로드 플러그인 추가. 개별 RSS와 토렌트 프로그램 연결
- 툴 - aria2 플러그인 추가<br>
  [https://aria2.github.io](https://aria2.github.io/)

##### ■ 0.2.8.1 (2020-03-28) #####
 - javdb 사이트 변경 대응<br>

##### <span style="color:red">■ 0.2.8 (2020-03-26)</span> #####
 - 봇 다운로드 - AV 중단. 자동 삭제<br>
 - offcloud 캐쉬 정보 중 AV 관련 정보 보내지 않음.<br>

##### ■ 0.2.7.16 (2020-03-24) #####
 - 봇 : super bot 에 내 봇이 어느 방에 있는지 확인하는 기능 추가<br>
   명령 : /where 봇ID  예) /where 1111213935<br>
   봇 ID는 자신의 봇과 대화창에서 /bot 을 입력하면 얻을 수 있음<br>

##### ■ 0.2.7.15 (2020-03-21) #####
 - Guacamole 런처 : mysql port 43306으로 변경. UI 포트 사용자 지정<br>
   기존 포트들과 겹치는 경우가 많아 포트 변경 할 수 있도록 수정<br>

##### ■ 0.2.7.14 (2020-03-20) #####
 - Offcloud : 추적 기능 추가.<br>
   작업 설정에서 다운로드 추적을 On 하고 마운트 폴더와 이동폴더를 설정해주면 다운로드 완료된 파일은 이동폴더로 이동.


##### ■ 0.2.7.13 (2020-03-19) #####
 - 봇 영화 : 자막을 토렌트사이트에 접속해서 받다 보니 사이트 차단 등의 이유로 받지 못하는 경우 발생<br>
   방식을 서버가 자막을 받아 디스코드에 업로드 후 그 주소를 전달하는 것으로 변경<br>
   사용자들은 디스코드에서 자막을 받기 때문에 실패 없음.<br>
 - 봇 영화 : 조건을 넣었는데 판단 대상에 그 정보가 없을 때 받지 않음. (이전에는 조건 검사를 못한다고 판단하여 받음)<br>
   조건 : 화질, 소스, 비디오코덱, 오디오코덱<br>
<br>


##### ■ 0.2.7.11 (2020-03-17) #####
 - 설정 - 시스템 추가<br>
 [[중요] 설정 - 시스템 추가](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=504)<br> 
 
##### ■ 0.2.7.8 (2020-03-15) #####
 - SJVA AV 에이전트 일치항목 찾기 지원<br>
 
##### <span style="color:red">■ 0.2.7.0 (2020-03-10)</span> #####
 - 텔레그램 봇 시스템 설정으로 변경<br>
 - 알림 설정 추가 <br>
 [알림 & 텔레그램 봇 설정](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=417)<br> 

##### ■ 0.2.6.11 (2020-03-08) #####
 - 자막 못 받는 문제 수정<br>

##### ■ 0.2.6.5 (2020-03-07) #####
 - RSS2 설치형으로 변경<br>
 - RSS, Offcloud 삭제<br>
 - Plex SJVA AV Agent 업데이트<br>

##### <span style="color:red">■ 0.2.6.0 (2020-03-04)</span> #####
 - 파일처리 - AV => 설치형으로 변경<br>
 - Plex - JAV Agent => 설치형으로 변경<br>

##### ■ 0.2.5.5 (2020-02-28) #####
 - 웨이브 대응<br>

##### ■ 0.2.5.3 (2020-02-25) #####
 - 네이버 웹툰 selenium 사용 안하는 모드 추가.<br>
 - 마나모아 예전 방식으로 변경. Selenium 사용안함<br>
   (실패하는 wr_id 제보 부탁드립니다)<br>


##### ■ 0.2.5.1 (2020-02-24) #####
 - 시스템 설정 변경<br>
   API Key 기능 추가. ajax url 로그인 검사<br>
   번역 시스템 설정으로 이동<br>
   알림, 텔레그램봇, Command 기능 이동 예정<br>
 - celery 모니터링 제거, celery 워커 축소 => 메모리 사용량 감소<br>
 

##### <span style="color:red">■ 0.2.5.0 (2020-02-22)</span> #####
 - "다운로드 영화" 플러그인이 "봇 다운로드 - 영화"로 변경.<br>
   사용을 원할 경우 추가 설치해야하며, 기존 DB와 호환되지 않음.

##### ■ 0.2.4.2 (2020-02-18) #####
 - offcloud2 - cache - API : type 파라미터에 | 연산자 지원<br>
 - RSS2 - RSS API : and 연산자 +에서 , 로 변경<br>

##### <span style="color:red">■ 0.2.4.0 (2020-02-16)</span> #####
 - Offcloud2 plugin release<br>
 - SJVA.bundle update<br>
 - SJVA_Scanner_KoreaTV update<br>

##### ■ 0.2.3.14 (2020-02-13) #####
 - 티빙 QVOD으로만 나오는 프로그램 받도록 기능 추가. by Starbuck<br>
  <a href='http://www.tving.com/notice/view?seq=99342'> Tving 관련 공지</a>

##### ■ 0.2.3.13 (2020-02-12) #####
 - 마나모아 수정. <br>
 - 네이버 웹툰 다운로드 추가<br>
 - 버그 : 특정 릴 파일처리 버그 수정 <br>
 
##### ■ 0.2.3.12 (2020-02-10) #####
 - 로그아웃 추가 <br>
 
##### ■ 0.2.3.8 (2020-02-08) #####
 - 파일매니저 플러그인으로 변경 <br>
 - KTHOOM 뷰어 독립 플러그인으로 변경<br>

##### ■ 0.2.3.7 (2020-02-04) #####
 - 웨이브 15초 제한 없어짐. <br>
 - 봇 다운로드 - TV : 수신 데이터 => RSS 지원. 설정 -> 기타 참고 <br>

##### ■ 0.2.3.5 (2020-02-02) #####
 - 토렌트 - 다운로드 국내TV 메뉴 사라짐.<br>
   sjva.me에서 업그레이드 버전인 "봇 다운로드 - TV" 플러그인 설치 후 사용
 - 토렌트왈 자막 다운로드 안되는 문제 수정<br>

##### ■ 0.2.3.4 (2020-01-31) #####
 - 봇 다운로드 TV - 지연시킨 720p을 1080p 받은 기록이 있어도 받는 문제 수정<br>

##### ■ 0.2.3.3 (2020-01-30) #####
 - KLive 계정정보 없어도 가능<br>
 
##### ■ 0.2.3.2 (2020-01-29) #####
 - KLive wavve 3.5 API 사용. 무료라도 계정정보 필요함<br>
 - 구글 GDrive Scan 인증유형 일반으로 사용해도 무방함. 구글에서 SJVA앱 인증.
 - 플러그인 수동 설치
 - 봇 다운로드 TV 저장 안되는 문제 수정<br>

##### <span style="color:red">■ 0.2.3 (2020-01-27)</span> #####
 - 봇 다운로드 TV <br>

##### <span style="color:red">■ 0.2.2 (2020-01-07)</span> #####
 - 베타 - RSS <br>

##### <span style="color:red">■ 0.2.0 (2019-12-08)</span> #####
 - Release<br>
 - 웨이브 플러그인 추가. 푹 삭제<br>
 - 티빙 설치 플러그인 변경. DB 호환 안됨<br>


##### ■ 0.1.10.7 (2019-11-19) #####
celery-worker 변경 작업<br>
- 파일처리<br>
  * 국내TV <br>
  * 영화<br>
  * SMI to SRT<br>
- 토렌트<br>
  * RSS<br>

##### ■ 0.1.10.7 (2019-11-19) #####
- Ani24 플러그인 추가<br>
- 마나모아 : Fate / strange fake 1권 2-1화 류 파싱 오류 수정<br>
- xteve : ARM 32bit 용 실행파일추가<br>
- torrssen2 : 실행 옵션에 UTF8 추가. 윈도우 한글 깨지는 문제 수정. DB삭제 후 재실행해야 함.<br>
- javdb 사이트 변경 반영<br>
- 🐞: jav_agent VR 컨텐츠 제목, 장르 오류 수정<br>

##### ■ 0.1.10.3 (2019-11-15) #####
- RSS API search 키워드에 or 연산 추가<br>
  예) ?search=1080p|2160p (OR 연산 - 1080p 또는 2160p 포함된 것들)<br>
      ?search=720+NEXT (AND 연산 - 720 NEXT 두 단어가 모두 포함된 것들)<br>

##### ■ 0.1.10.2 (2019-11-07) #####
- Guacamole 런처 플러그인 추가에 따른 일부 수정<br>
  [[런처 플러그인] Guacamole](https://soju6jan.com/archives/1490)<br> 

##### <span style="color:red">■ 0.1.10.0 (2019-11-04)</span> #####
- 런처 메뉴 & 플러그인 추가<br>

##### ■ 0.1.9.31 (2019-11-02) #####
- [메뉴얼 : RClone Mount 기능 추가 & 활용 예](https://soju6jan.com/archives/1462)<br>
- 마나모아 플러그인 0.2 버전 대응<br>

##### ■ 0.1.9.29 (2019-10-30) #####
- 텔레그램 메시지 수신시 알람 소리 On / off 설정 추가<br>

##### ■ 0.1.9.26 (2019-10-18) #####
- [메뉴얼 : RClone Mount 기능 추가 및 파일처리](https://soju6jan.com/archives/1433)<br>
- PLEX 직접연결시 ffmpeg 명령 수정. (devlegna님 제보)<br>
  안드 앱에서 소리 안나는 문제 수정<br>


##### ■ 0.1.9.22 (2019-10-16) #####
- Plex DVR에 KLive 직접 연결 지원<br>
  [메뉴얼 : Plex DVR에 KLive 직접 연결](https://soju6jan.com/archives/1403)

##### ■ 0.1.9.19 (2019-10-13) #####
- Selenium 설정 추가<br>
  마나모아 다운로더 정상화.<br>
  [메뉴얼 : Selenium 설정](https://soju6jan.com/archives/1380)

##### <span style="color:red">■ 0.1.9.12 (2019-09-29)</span> #####
- Custom 플러그인 : noname님의 manamoa 추가<br>

##### ■ 0.1.9.9 (2019-09-28) #####
- 비로그인시 메뉴에서 링크 표시 하지 않음<br>

- jav agent 장르 관련 건의사항 적용<br>
  [게시판](https://soju6jan.com/sjva?board_name=sjva&order_by=fn_pid&order_type=desc&vid=258)

##### ■ 0.1.9.7 (2019-09-25) #####
- 푹 스트리밍타입에 Redirect 방식 추가<br>
  예전 방식이며, player에 따라 10분 시청 후 끊길 수 있음.<br>

- 포인트 표시 삭제<br>  

##### <span style="color:red">■ 0.1.9.2 (2019-09-22)</span> #####
- point 초기화. point 관련 제한 삭제<br>


##### <span style="color:red">■ 0.1.9.0 (2019-09-20)</span> #####
- 커스텀 플러그인도 재시작시 자동 업데이트<br>

  기존에 설치된 vnStat과 Synoindex 는 삭제 후 재설치 필요<br>
  

##### ■ 0.1.8.40 (2019-09-20)</span> #####
- 🐞:  영화 파일처리 년도 매칭 보완2<br>

- SJ_DAUM Agent 업데이트<br>

##### ■ 0.1.8.39 (2019-09-16)</span> #####
- 푹 url로 컨텐츠 검색되는 부분 보완<br>

- 푹, 티빙 목록삭제 버튼 추가<br>

##### ■ 0.1.8.37 (2019-09-16)</span> #####
- 🐞:  영화 파일처리 년도 매칭 보완<br>
  
##### ■ 0.1.8.34 (2019-09-10)</span> #####
- 🐞:  Offcloud RARBG RSS 작동안하는 문제 수정<br>
  RSS를 가져올 때 User-agent 헤더가 없으면 403리턴 했음 <br>

##### ■ 0.1.8.31 (2019-09-06)</span> #####
- 파일처리 - 영화 : 폴더명 설정 규칙 추가<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/619586945714225172/unknown.png)


##### ■ 0.1.8.27 (2019-09-06)</span> #####
- 설정 - 플러그인 메뉴 추가<br>

- 🐞: SJ JAV 중 JAV1.com 에서 업데이트 안되는 문제 수정. (사이트 변경됨)<br>

##### ■ 0.1.8.25 (2019-09-02)</span> #####
- RSS - 사이트 점검. 모두 동작 확인.<br>

- 🐞: rclone remote path에 공백이 있을 경우 목록을 가져올 수 없는 문제 수정<br>

##### ■ 0.1.8.21 (2019-09-01)</span> #####
- Custom - Synoindex 플러그인 추가<br>
  [메뉴얼 : Synoindex 플러그인](https://soju6jan.com/archives/1041)

##### ■ 0.1.8.19 (2019-08-31)</span> #####
- 시스템 - 설정 - 링크 탭 추가<br>
  링크 사용자 편집<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/617298963355402242/unknown.png)

##### ■ 0.1.8.18 (2019-08-30)</span> #####
- 시스템 - 설정 - 메뉴 탭 활성화<br>
  메뉴에 사용할 플러그인만 표시<br>

- <span style="color:red">정책 변경<br>
  1) VOD, TV 카테고리는 초기 설치시 메뉴 항목에 없고, Point 1000점 넘으면 메뉴에 추가됨. 이후 사용하려면  On<br>
  2) 그외 메뉴는 설정 - 메뉴 에서 사용할 플러그인만 On<br>
  3) 팁탭 확인. (Command로 9월까지만 지원 후 정책대로 유지할 생각임.)<br>
  4) Point : 지금은 사용시간과 비례함. 추후 타 유저에게 편의를 제공하는 경우 + 할려고 구상중(예:토렌트 방송, 파일공유 제공 등)<br>
</span>
  


##### <span style="color:red">■ 0.1.8.17 (2019-08-28)</span> #####
- TV 메뉴 추가<br>

- Plex - Live Channels 메뉴 추가<br>

- 설정 - 다운로드 탭 추가<br>



##### ■ 0.1.7.22 (2019-08-15) #####
- PLEX 플러그인 지원 안하는 문제 대응<br>
  [메뉴얼 : Plex SJVA 플러그인](https://soju6jan.com/archives/749)


##### ■ 0.1.7.16 (2019-08-09) #####
- 🐞: 영화 파일처리시 Daum 정보가 아닌 파일명에 있는 년도로 폴더를 생성하는 버그 수정.<br>

- KODI 티빙 애드온 SJVA 연동<br>
  [메뉴얼 : KODI 티빙 애드온](https://soju6jan.com/archives/684)


##### ■ 0.1.7.13 (2019-08-02) #####
- 다운로드 국내TV - 목록 삭제 버튼 추가<br>

##### ■ 0.1.7.12 (2019-08-01) #####
- 텔레그램 봇 - 방송하기 추가<br>
  [메뉴얼 : 봇 방송하기](https://soju6jan.com/archives/662)

##### ■ 0.1.7.10 (2019-07-30) #####
- 🐞: JAV Agent 배우 정보 크롤링 사이트 주소 변경되어 수정<br>

- 🐞: AV 파일처리. 원본 파일명에 [] 가 있는 경우 ()로 변경<br>

- 🐞: PLEX JAV Agent 업데이트<br>
  원본파일 유지 옵션 On + 폴더에 파일 하나 일 경우 검색안되는 문제 수정<br>
  
- 🐞: Docker Plex에서 GDrive 스캔을 정상적으로 하려면 SQLite3를 설치해야 함.<br>
  허나 설치가 안 되어 있을 경우 기존에는 항상 스캔을 안하는 구조에서 항상 하는 것으로 변경함.<br>
  [메뉴얼 : Docker Plex 설정](https://soju6jan.com/archives/643)


##### ■ 0.1.7.8 (2019-07-25) #####
- 🐞: 파일처리 영화. 검색 안되는 문제 수정<br>

- 🐞: 파일처리 영화. mkv 단일파일 unknown으로 빠지는 문제 수정.<br>
 
  
##### ■ 0.1.7.5 (2019-07-19) #####
- 제외 채널, 프로그램 관련 로직 보완.<br>

##### ■ 0.1.7.3 (2019-07-17) #####
- Offcloud : feed 정보를 가져오는 개별 스케쥴링을 없애고 플러그인 스케쥴링에 통합<br>


##### <span style="color:red">■ 0.1.7.0 (2019-07-14)</span> #####
- 플러그인 : 토렌트 - 다운로드 영화 & 파일처리 - 영화 플러그인 추가 <br>
  [메뉴얼 : 영화 파일처리 & 다운로드 & 에이전트](https://soju6jan.com/archives/605)

- SJ Daum 에이전트 업데이트<br>
  Plex SJVA 플러그인에서 B-1. 플러그인 설치 메뉴로 업데이트 가능.


##### ■ 0.1.6.19 (2019-07-13) #####
- 🐞: 간혹 사이트에서 게시판을 잘못 올려 봇 정보가 두번 들어오는 경우 문제 수정<br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/599650257307172885/unknown.png)


- 🐞: 일부 처리하지 못하는 릴이 정규식에 매칭되어 방송 되는 문제 수정<br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/599650897651564574/unknown.png)


##### ■ 0.1.6.16 (2019-07-12) #####
- 플러그인 : 토렌트 - RSS<br>
  RSS API에 search 쿼리 적용.<br>
  예) http://192.168.0.11:9999/rss/group/movie?search=1080p+bluray<br>

- RSS 사이트 목록에서 토렌트보자, 토렌트달 제거<br>
  토렌트보자 - 마그넷 제공 안됨.<br>
  토렌트달 - 사이트폐쇄<br>
  
##### ■ 0.1.6.14 (2019-07-09) #####
- 🐞: 이몽.E29.E30회 합본.E14.190622 형식 처리 못하는 문제 수정<br>

##### ■ 0.1.6.13 (2019-07-07) #####
- 🐞: 다운로드 국내TV. PLEX 설정을 안 한 상태에서 동작하지 않는 문제 수정<br>
  
- 🐞: JAVDB 사이트 수정 대응.<br>

##### ■ 0.1.6.6 (2019-07-04) #####
- 플러그인 : 토렌트봇 - 설정<br>
  수신 받을 토렌트 타입 지정 옵션 추가<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/596328307763445776/unknown.png)

- 플러그인 : 토렌트 - 다운로드 국내TV<br>
  텔레그램 수신 시 처리 옵션 변경<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/596334431422119976/unknown.png)

- RSS 송신 시 파일처리했을 경우의 정보로 송신. 이전에는 파일명 기반으로 송신했음. PLEX 매칭 확률 증가<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/596327807802671104/unknown.png)

- 기존에는 수신 RSS 전체에서 마그넷 중복체크하였으나, 타입별로 중복체크하도록 변경.<br>
  잘못된 타입으로 수신될 경우 정상적인 타입에 추가 안되는 현상 발생.

- 플러그인 : 토렌트 - 다운로드 국내TV<br>
  Plex에 방송이 여러 개 있을 경우에도 매칭할 수 있도록 수정.

##### <span style="color:red">■ 0.1.6.0 (2019-07-03)</span> #####
- 플러그인 : 토렌트 - 다운로드 국내TV 추가<br>
  [메뉴얼 : 텔레그램으로 토렌트 받기 (국내TV)](https://soju6jan.com/archives/560)


- 플러그인 : 토렌트 - 다운로드<br>
  목록 화면 추가
  
##### ■ 0.1.5.6 (2019-06-29) #####
- 플러그인 : 토렌트 - 다운로드 - 상태 추가<br>

- 시스템 - 설정<br>
  로그인 사용 on / off 추가<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/594050242752675841/unknown.png)

##### ■ 0.1.5.3 (2019-06-28) #####
- 플러그인 : 토렌트 - RSS - 설정 - 스케쥴링<br>
  DB 삭제 버튼 추가. 스케쥴 삭제 시 DB도 삭제하도록 변경<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/593987902309138434/unknown.png)

- 🐞: javnet 주소 변경.<br> <b><span class="text-danger">주소가 변경되면서 게시판을 새로 만들었기 때문에, 기존 DB를 삭제해 주어야 함.</span></b>

##### ■ 0.1.5.2 (2019-06-26) #####
- 플러그인 : 토렌트 - Offcloud<br>
  목록화면에서 다운로드 프로그램에 다운로드 요청할 수 있도록 버튼 추가

##### <span style="color:red">■ 0.1.5 (2019-06-26)</span> #####
- SMI to SRT 플러그인 추가<br>
  [(메뉴얼 : SMI to SRT (SJVA, Plex plugin, shell))](https://soju6jan.com/archives/510)

- 플러그인 : 파일처리 - 국내TV<br><br>
  회차 삭제 예외 장르 옵션 추가<br>
  파일처리 시 Daum에서 검색은 되나 에피소드 정보가 없는 방송은 파일명에서 회차 정보를 없애고 있음.<br>애니메이션 등과 같은 장르는 회차 정보가 거의 없어서 항상 회차 정보를 없애는 문제가 있어 옵션 추가.<br>all 입력시 회차 정보를 제거하지 않음.<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/593343517904994304/unknown.png)

- 플러그인 : 토렌트 - Offcloud<br><br>
  http링크 리모트 추가 옵션 추가<br>
  주로 자막을 같이 받는 용도<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/593343034092158977/unknown.png)<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/593342835659636736/unknown.png)

- 시스템 - 설정 로그 레벨 옵션 추가<br>
  안정화 되신 분들은 DEBUG 상위 옵션을 사용하여 속도 개선<br><br>
  ![](https://cdn.discordapp.com/attachments/590833735197261874/593416440225202187/unknown.png)

- 🐞: offcloud cache 확인 화면에서 hash로 다운로드 안 되는 문제 수정<br>

- 🐞: 텔레그램 RSS 수신 메시지중 다음 링크가 작동안하는 문제 수정<br>


##### ■ 0.1.4.9 (2019-06-25) #####
- 🐞: Trnasmission 다운로드 안 되는 문제 수정<br>

##### ■ 0.1.4.6 (2019-06-24) #####
- 🐞: Trnasmission 접속 URL 버그 수정<br>

- Plex SJVA 플러그인 업데이트<br>
  🐞: 윈도우 Plex 서버에서 '보좌관 – 세상을~~' 스캔 안되는 문제 대응.<br>
       특수문자로 인해 부분 스캔이 안되며 드라마 폴더를 스캔함.
  
- Plex 설정에 추가 스캔 Plex URL 옵션 추가.<br>
    - 이 기능은 주 Plex 서버 이외에 다른 Plex에서도 스캔 명령을 받고자 할 때 사용.<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/592668631557472267/unknown.png)

    - 오른쪽 주 서버고 왼쪽 부 서버.<br>하나의 SJVA 로 여러 Plex에 스캔 명령 전달. 각 Plex의 라이브러리 구성에 따라 적절한 스캔 명령 수행<br>
스캔 요청 파일이 라이브러리에 없는 경우 무시
![](https://cdn.discordapp.com/attachments/590833735197261874/592668470559375380/unknown.png)

    - 부 Plex 서버 설정. 주 Plex 서버와 OS가 다르거나 마운트 경로가 다른 경우 경로 변경 규칙 설정<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/592722478783004689/unknown.png)
    
    - 위 규칙에 의해 파일경로 변경하여 스캔. 오른쪽 주 서버(윈도우), 왼쪽 부 서버(Synology)<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/592726516341932042/unknown.png)

- 툴 - DaumTV Refresh 버튼 추가 및 1일 다회차 방송 버그 수정<br>
  ※ "슬플 때 사랑한다" Daum 회차 정보를 보면 22(3.28) 21(3.30) 23(3.30) 순으로 나옴. 회차 정보가 잘못 되어 있고, 이로 인해 1일 1회로 인식하는 문제가 있어 반올림 방식으로 변경. 방송종료 + DB에 저장된 방송은 크롤링 하지 않고 DB에서 바로 읽어 사용하는 데 잘못된 정보가 있을 경우 수정할 방법이 없어 Refresh 버튼 추가.<br>
  ※ 1일 다회차 인식을 못했을 때 발생하는 현상. (상단 정상, 하단 1일 1회)
  ![](https://cdn.discordapp.com/attachments/590833735197261874/592548005987483671/unknown.png)

  

##### ■ 0.1.4.3 (2019-06-23) #####
- 토렌트 - 다운로드 추가 (개발중)<br>
  트랜스미션과, 다운로드스테이션 정보 입력 후 다운로드 메뉴나 타 플러그인 링크를 클릭하여 다운로드 추가 가능

- 티빙 다운로드모드 추가
  
- 푹, 티빙 화이트리스트 모드시 첫회 받기 옵션 추가
![](https://cdn.discordapp.com/attachments/590833735197261874/592028501092073503/unknown.png)    
    

- 🐞: 푹 화이트리스트 모드 일 경우 QVOD 받는 문제 수정<br>
- 🐞: RSS검색화면에서 Offcloud 버튼 동작 안되는 문제 수정

##### ■ 0.1.3.17 (2019-06-19) #####
- 시스템 - 설정 - 웹 설정에서 테마 기능 추가<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/590975960250187852/unknown.png)


##### ■ 0.1.3.16 (2019-06-19) #####
- AV 파일명 변경시 원본파일명 유지 옵션 추가<br>
  ※ (XXX.com)ABC-123.mp4  => abc-123 [(XXX.com)ABC-123].mp4


##### ■ 0.1.3.15 (2019-06-19) #####
- 푹 다운로드 모드 선택 추가. <br>
  화이트리스트일 경우 포함 프로그램에 있는 방송만 다운로드<br><br>
![](https://cdn.discordapp.com/attachments/590833735197261874/590833908107575301/unknown.png)<br>
![](https://cdn.discordapp.com/attachments/590833735197261874/590835040259145738/unknown.png)

##### ■ 0.1.3.14 (2019-06-19) #####
- 시스템 - 정보 메뉴 추가<br>
- 🐞 : ffmpeg 배속이 안나오는 문제 수정


##### ■ 0.1.3.12 (2019-06-18) #####
- 텔레그램 봇 RSS 수신시 Daum URL 같이 전송 (파일명으로 검색되는 TV쇼만)

- /flaskfilemanager 로그인 없이 접속되는 문제 수정

- ffmpeg version 2.6.9 버전 다운로드 성공 <br>
  (Synology debian-chroot 의 기본 버전)<br>

- ffmpeg time regex 수정 : 일부 다운로드 되지 않는 영상 다운로드


##### ■ 0.1.3.8 (2019-06-18) #####
- 텔레그램 봇 단체방 변경으로 인한 수정<br>
 [(메뉴얼 : 텔레그램 봇 단체방 변경)](https://soju6jan.com/archives/493)


##### <span style="color:red">■ 0.1.3 (2019-06-14)</span> #####
- AV 관련 업데이트 [(메뉴얼 : AV 관리)](https://soju6jan.com/archives/453) <br>
  ○ Plex - JAV Agent 플러그인 추가 <br>
  ○ 파일처리 - AV 플러그인 추가 <br>


##### <span style="color:red">■ 0.1.2 (2019-05-28)</span> #####
- Telegram Bot 플러그인 추가<br>
  [(메뉴얼 : 0.1.2 업데이트 & 텔레그램 봇)](https://soju6jan.com/archives/317) <br>

- 파일처리 - 국내TV 텔레그램 알림 추가


##### <span style="color:red">■ 0.1.1 (2019-05-24)</span> #####
- Plex 플러그인 - 툴 - 쇼 분석 추가<br>
 [(메뉴얼 : PLEX 쇼 분석 사용법 & 정리 팁)](https://soju6jan.com/archives/237)

- Daum TV 플러그인 추가. <br>
  ※ 딱히 플러그인에서 하는 일은 없으며 타 플러그인과 연동<br>
  추후 EPG 및 토렌트 프로그램 플러그인과 연동

##### <span style="color:red">■ 0.1.1 (2019-05-17)</span> #####
- Release
