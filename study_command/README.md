# docker 명령어

----------------------------------------------------------------------
⦁ docker search <image name> # 검색한 image와 관련 있는 정보 / STARS: 다운 받은 수

⦁ docker pull <image name> # image를 설치

⦁ docker container run --name <container name> -d -p port:port <image name> # container 생략가능, host포트:guest포트

⦁ docker stop <container name> # 실행중인 container 중지

⦁ docker start <container name> # 작동이 정지된 container 실행

⦁ docker attach <container name> # 실행중인 container를 실행

⦁ docker rm <container name> # container 삭제

⦁ docker image rm <image name> # image 삭제

⦁ docker rename <container name> <new container name> # container의 이름을 새로 지정

⦁ docker image inspect <image name> # image의 상세정보에 대해 할 수 있다.

⦁ docker image prune # 사용하지 않는 image들을 삭제

⦁ docker container run <image name> # container 생성

⦁ docker container run -it --name <container name> <image name> /bin/bash # container 실행 (root계정)

⦁ docker exec -it <container name> bash # container를 실행

⦁ docker cp <container name>:<js file name.js> ./<js file name.js> # container에서 host로 파일 전송

⦁ docker cp ./<text file name> <container name>:<text file name.txt> # host에서 container로 파일 전송

⦁ docker run --name <container name> -e MYSQL_ROOT_PASSWORD=<password> -d -p port:port mysql:5.7

⦁ root# adduser <username> # new user 추가

⦁ root# su <username> # 계정 변경

⦁ root# cat /etc/issue # container의 version을 확인

⦁ root# mv /<기존 file 위치>/<file name> /<옮길 file 위치>

⦁ root# whereis <file> # 파일의 설치위치 확인

⦁ root# ls -a || ll # 파일 권한 확인

----------------------------------------------------------------------
-p: (publish) 포트 포워딩 뒤에 연결할 port를 입력 ex) -p 80:80 으로 사용

-d: (detach) background의 daemon으로 실행, 프로세스가 바로 종료되지 않음 

-rm: push 후에 정보를 지워줘라 / 많은 사람들이 서로 다른 이름을 사용하기 때문에 

-t: tag image뒤에 태그를 주는것 ex) centos':7'

-it: run 할 때 run뒤에 사용되며 실행 후 UP상태를 유지

-e: 암호 생성
----------------------------------------------------------------------