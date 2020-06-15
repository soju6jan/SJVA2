##### TODO #####
 - 설정 - 백업, 초기화<br>
 - aria2 임시폴더 기능<br>
 - 토렌트 사이트 추가<br>
 - AV Agent : DMM SMUK-016, 017 메타 못 가져옴. (IP체크로 외국에서는 볼수없다는 안내표시 나오는것으로 추정)
 - downloader 일반파일(자막) 설정 없어도 받기<br>
 - Rclone 작업 개별 스케쥴링. cron적용. 곧 설치형으로 변경되니 작업 백업할 것.<br>
 - 추적+일반적인파일처리 작업을 하는 플러그인<br>


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
 - 봇 AV : censored 파일크기 조건 추가<br>
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
 - 봇 AV : 파일명 조건 추가. <br>
   모든 조건에 정규식 지원 (AV만)



##### ■ 0.2.7.11 (2020-03-17) #####
 - 설정 - 시스템 추가<br>
 [[중요] 설정 - 시스템 추가](https://sjva.me/bbs/board.php?bo_table=manual&wr_id=504)<br> 
 
##### ■ 0.2.7.8 (2020-03-15) #####
 - 봇 AV 중복허용 관련 변경<br>
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
 - 봇 다운로드 - AV 플러그인 추가<br>
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
  * AV<br>
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
