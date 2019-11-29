###### 🟡 Synology 도커 실행시 방화벽 예외 포트 (임경한님 제보)<br> ######
- 도커 포트 + 53번 포트(DNS)<br>

- 53번트 추가 안할 경우 도커에서 외부 접속 불가.<br>

<br>
###### 🟡 Command<br> ######
- 시스템 - 설정 하단 Command에 명령 입력 후 Run 버튼 누를 경우 실행<br>

- 토큰 변경(새로운 SJVA 설치시 기존 토큰 적용). 재시작시 포인트 확인<br>
  명령 : set token 기존SJVA토큰<br>

- 토큰 초기화<br>
  명령 : reset token<br>

- 메뉴에 VOD 카테고리 선택 가능하게 변경. 재시작시 원복. 9월 한정<br>
  명령 : set use_category_tv True<br>

- 메뉴에 TV 카테고리 선택 가능하게 변경. 재시작시 원복. 9월 한정<br>
  명령 : set use_category_vod True<br>
    
<br>
###### 🟡 rclone mount (Kim What님 제보)<br> ######
- rclone --config rclone.conf mount soju6janm:/ /mnt/soju6janm --daemon --allow-other --fast-list --drive-skip-gdocs --poll-interval=1m --buffer-size=32M --vfs-read-chunk-size=32M --vfs-read-chunk-size-limit 2048M --vfs-cache-mode writes --dir-cache-time=96h<br>

<br>
###### 🟡 파일 업로드 <br> ######
- 쉘 작업 시 파일 이동이 필요할 경우 쉘에서 바로 SJVA로 업로드<br>
    - curl -F 'file=@파일경로' http://SJVA URL/upload<br>

<br>
###### 🟡 시놀 reverse proxy 적용시 웹소켓이 안될 때. (한시오분님, 이치로님 제보) <br> ######
- 현상 : 홈화면 스케쥴러가 1초마다 갱신이 안되며 rclone, ffmpeg 에서 실시간 상태를 확인 할 수 없음
- 관련링크 
    - [(https://www.clien.net/service/board/cm_nas/12679201)](https://www.clien.net/service/board/cm_nas/12679201)
    - [(https://github.com/orobardet/dsm-reverse-proxy-websocket)](https://github.com/orobardet/dsm-reverse-proxy-websocket)

<br>
###### 🟡 윈도에 네이티브 실행중 자동종료 되는 현상. (안중현님 제보)<br> ######
- 현상<br>
    기존 파이썬 2.7버전 64비트로 설치후 sjva 설치시 별다른 내용없이 설치 완료 <br>
    설치완료 후 실행시 일정시간 지난후 자동종료됨.
    - OS 새로 설치하고 똑같은 방법으로 sjva 설치 진행하였으나 똑같은 증상으로 자동종료 현상 발생
    - 파이썬 2.7버전 32비트로 설치후 sjva 설치 진행. 진행중 markdown 이 setuptools 버전을 호환하지 못한다는 오류 발생 -> 허나 설치는 완료됨
    - 여튼 설치 됐으니 그냥 실행-> 같은 증상으로 종료됨.
    - setuptools 36 버전으로 설치 후 실행 -> 3시간동안 정상적으로 실행중.
- 업그레이드 방법 : pip install --upgrade setuptools
- [(메뉴얼 : Windows10 Native 설치)](https://soju6jan.com/archives/695)

<br>
###### 🟡 외국 IP : 푹 안됨. 티빙은 proxy php 사용하여 가능함 ######
<br>
###### 🟡 로그인 ID, 암호 비어있는 값 가능. 빈값일 경우 로그인 버튼만 누르면 로그인 함. ######<br>