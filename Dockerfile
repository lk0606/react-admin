FROM nginx
# RUN echo 'docker build start'
# RUN docker build -t test .
# RUN echo 'docker build end'
EXPOSE 80
# targe 为 nginx 镜像地址
# COPY ./build/ /usr/share/nginx/html/