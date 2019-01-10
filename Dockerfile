FROM cortesben/cent-node-nginx-vim:latest

ENTRYPOINT [ "nginx" ]

COPY ./nginx/nginx.config /etc/nginx/conf.d/your_mama.conf

# parameters passing to main command
CMD [ "-g", "daemon off;" ]
