# 가상화 환경 준비
1. shift + ctrl + esc를 눌러 작업관리자를 실행한다.
2. [옵션] 성능: 오른쪽 밑의 '가상화' 상태를 확인한다. (사용 or 사용불가)
if '사용불가' 상태:
    1. 재부팅을 하여 F2 을 눌러 BIOS에 접속한다.
    2. Virtual Technology 활성화 (고급 -> CPU 구성 -> 가상화 기술 [활성화])
    3. 바로 재부팅시 인식을 못할 수도 있으니 2~3분 후에 키는 것이 좋음


# docker install
1. https://github.com/docker/toolbox/releases에서 .exe파일을 다운
2. exe파일을 실행하여 설치 (저는 아무런 설정x)
3. (Oracle VirtualBox, kitematic, Docker Teminal)이 설치됨
4. docker version # 설치된 docker의 버전 확인
5. temianl을 실행하여 docker run Hello-World를 실행 후 결과 확인
6. docker ps를 통해 실행된 프로세스의 정보를 확인
7. 실행된 프로세스는 kitematic에서 확인 할 수 가능 # kitematic: docker에서 사용하는 명령어를 GUI로 만들어둔 것


# install mysql

    https://hub.docker.com/_/mysql 

    * mysql image download

    docker pull mysql:5.7

    * container create

    docker run --name mysql5 -e MYSQL_ROOT_PASSWORD=<비밀번호> -d -p 3306:3306 mysql:5.7

    * container execute

    docker exec -it mysql5 bash

    root# cat /etc/issue

    root# whereis mysql

    root# ls -al /usr/lib/mysql

    * mysql execute

    mysql -u root -p

    <input password>

    mysql# show databases;

    use mysql

# install MariaDB (centos base에 DB설치)
    * 첫번 째 방법

    yum centos mariadb # centos에서

    docker run --name mariadb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mariadb mariadb

    docker exec -it mariadb /bin/bash

    cat /etc/issue

    whereis mysql

    mysql -u root -p

    show databases;

    use mysql

    * 두번 째 방법

    https://github.com/CentOS/CentOS-Dockerfiles/tree/master/mariadb/centos7

    centos_mariadb.zip download 압축풀기 # docker-entrypoint.sh, fix-permissions.sh, dockerfile 3가지 파일

    docker build -t ai/mariadb55:1 .

    docker images

    docker run -it --name=mariadb -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=infosec ai/mariadb55

    docker ps

    docker exec -it mariadb bash # bash-4.2$로 뜨는 것은 일반 유저로 들어간 것이기 때문에 끝이 $인 것이다.

    @root# whereis mysql # mysql이 제대로 설치되었는지 확인

    @root# mysql -u root -p

    password 입력

    myspl > show databases; 

    myspl > use mysql; # mysql의 db를 사용한다는 의미

    myspl > quit;

# install mongoDB (centos에)

    https://github.com/CentOS/CentOS-Dockerfiles/blob/master/mongodb/centos7/README.md

    cccp.yml 파일과 dockerfile을 생성

    docker build -rm -t ai/mongodb:1 .

    docker run -d -p 27017:27017 -e MY_SQL_ROOT_PASSWORD=infosec ai/mongodb:1

    docker exec -it mongodb bash

    whereis mongod

    mongod -u root -p

    <input password>

    mongod# show databases;

    mongod# use mysql

----------------------------------------------------------------------

* port 설정
oracle vitualbox -> 설정 -> 네트워크 -> 고급 -> 포트포워딩 -> 추가

│ name    프로토콜   호스트 IP    호스트 포트   게스트 포트  │ 

│ http  │   TCP   │ 127.0.0.1  │    80     │     80       │ 

│ https │   TCP   │ 127.0.0.1  │    443    │     443      │


* docker 검색/설치: nginx
docker search nginx # nginx의 종류가 나옴 / STARS: 다운 받은 수

docker pull nginx # 다운받을 name 입력

docker images # 다운받은 image list 확인

* container 실행: webserver

docker run --name webserver -d -p 80:80 nginx

docker ps -a

* ubuntu && centos:7 image download

docker pull ubuntu

docker pull centos:7

docker images

* ubuntu && centos:7 container create

docker container run ubuntu

docker container run centos:7

* ubuntu && centos:7 container start

docker run -it --name ubuntu_shell ubuntu /bin/bash

docker run -it --name centos_shell centos:7 /bin/bash

* container add user && change

root# adduser user1

root# su user1

exit

# container command

root# ls -al || ll # 파일의 권한 확인

root# chmod <권한지정(숫자)> # (user권한)rwx/(group권한)rwx/(other권한)rwx 읽기 권한(r=4), 쓰기 권한(w=2), 실행 권한(x=1)

root# ctrl + p + q # container가 종료되지 않고 빠져나올 수가 있다.

root# cat /etc/issue # 버전을 확인

* docker image build && execute: Dockerfile과 .js(자바스크립트)파일이 필요하다.
    * image build

    docker images

    docker build -t noteweb:1 .

    docker images

    docker container run --name nodeserver -d -p 80:80 nodeweb:1

    docker ps

    curl localhost

    * container excute

    docker exec -it nodeserver bash

    root# cat /etc/issue

* (local <-> host) file copy

    * local(container) -> host

    docker cp nodeserver:app.js ./containerapp.js

    * host -> local(container)

    docker cp ./test.txt nodeserver:test.txt

* image file create && container build && container execute && file copy && ouput localhost
    * file create
        * Dockerfile
        FROM ubuntu:latest

        RUN apt-get update && apt-get install -y -q nginx

        COPY index.html /usr/share/nginx/html/

        CMD ["nginx", "-g","daemon off;"]

        * index.html
        <!DOCTYPE html>
            <html>
                <header>
                    <title>Docker Image Build Test</title>
                </header>
                <body>
                    <h1>Welcome nginx</h1>
                </body>
            </html>

    * image build

    docker build -t unginxweb:1 . # unginxweb이름의 태그 1 image 생성

    docker images # 확인
    
    * container create

    docker run --name unginxserver -d -p 80:80 unginxweb:1

    curl localhost # container 확인

    * exectue

    docker exec -it unginxserver bash

    root# ls -al /usr/share/nginx/html # index.html 파일 확인

    root# cat index.html # index 파일 내용 확인
    
    * local 에 html 파일 적용

    root# mv /usr/share/nginx/html/index.html /var/www/html # /var/www/html의 위치가 localhost에 적용된다.

    curl localhost


# 알아둘 것!

⦁ C:/windows/system32/driver/etc/hosts 파일을 열게 되면 (txt 관리자 권한으로 가능) DMS(domain name server)가 지정되어 있다. ex)127.0.0.1 localhost / DMS를 공격자 ip 수정하는 것으로 공격당하기도 함

⦁ 브라우저 url에 localhost를 요청하면 nginx서버를 확인 할 수가 있다.

⦁ container에 들어가 root 계정으로 명령어를 실행하다가 잘못하면 image가 깨질 수 있기 때문에 새로운 계정을 추가하여 
하는 것이 좋다.

⦁ docker pull 을 통해 받은 ubuntu, centos, nginx 등은 docker hub에서 받아온 image이다.

⦁ image build를 하기 위해서는 .js파일과 Dockerfile이 필요하다.
----------------------------------------------------------------------