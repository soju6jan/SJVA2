###### 🟡 파일 다운로드 <br> ######
- GET <b>/file/path/to/download</b><br>
  Root 하위만 가능<br>
  <br>
- Parameter<br>
  apikey : APIKEY<br>
  <br>
- 예) https://localhost:9999/file/data/db/rclone.conf?apikey=0123456789<br>

###### 🟡 번역 <br> ######
- GET <b>/system/api/trans/do</b><br>
  <br>
- Parameter<br>
  text : 번역할 문자<br>
  source : text 문자셋. 생략시 ja<br>
  target : 번역할 문자셋. 생략시 ko<br>
  <br>
- Response<br>
  ret : success / fail / exception<br>
  data : 실행결과 / 빈칸 / exception 설명<br>
  
###### 🟡 파일 업로드 <br> ######
- 쉘 작업 시 파일 이동이 필요할 경우 쉘에서 바로 SJVA로 업로드<br>
    - curl -F 'file=@파일경로' http://SJVA URL/upload<br>
