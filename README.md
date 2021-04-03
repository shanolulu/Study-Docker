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

사진은 이후 첨부 ..