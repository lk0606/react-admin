FROM nginx
# RUN echo 'docker build start'
# RUN docker build -t test .
# RUN echo 'docker build end'
COPY ./build/ /usr/share/nginx/html/
EXPOSE 80