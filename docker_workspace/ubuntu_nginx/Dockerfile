FROM ubuntu:latest
RUN apt-get update && apt-get install -y -q nginx
COPY index.html /usr/share/nginx/html/
# COPY index.html /var/www/html/
CMD ["nginx", "-g", "daemon off;"]


# FROM을 사용하는 것은 하나여야 한다.
# -y 질문에 y대답, -q 끝나고 종료되는d