##### ■ 0.1.10.7 (2019-11-19) #####
celery-worker 변경 작업
- 파일처리
  * 국내TV 
  * 영화
  * AV
  * SMI to SRT
- 토렌트
  * RSS

https://filebrowser.xyz/


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
