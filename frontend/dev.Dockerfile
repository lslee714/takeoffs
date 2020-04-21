FROM nginx:1.17.10-alpine

COPY ./frontend/build /var/www
COPY ./frontend/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]