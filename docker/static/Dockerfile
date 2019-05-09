FROM alpine

RUN apk add \
    nginx \
    nodejs-current \
    yarn

COPY ./docker/custom-nginx.conf /etc/nginx/
ENTRYPOINT ["nginx"]

CMD ["-c", "/etc/nginx/custom-nginx.conf"]