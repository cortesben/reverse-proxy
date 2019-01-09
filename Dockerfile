FROM cortesben/cent-node-nginx-vim:latest

ENTRYPOINT [ "service" ]

# parameters passing to main command
CMD [ "nginx", "start" ]
