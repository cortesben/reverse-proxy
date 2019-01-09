FROM cortesben/cent-node-nginx-vim:latest

ENTRYPOINT [ "nginx" ]

# parameters passing to main command
CMD [ "-g", "daemon off;" ]
