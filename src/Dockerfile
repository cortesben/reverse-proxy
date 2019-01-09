FROM businessinsider/cms-node:oneSPA
LABEL maintainer=cortesben

ENTRYPOINT [ "npm" ]

WORKDIR /dist

RUN ls -al

COPY /bin /dist/bin
COPY /public /dist/public
COPY /routes /dist/routes
COPY /views /dist/views
COPY app.js /dist
COPY .env /dist
COPY config.js /dist

RUN npm install --production

RUN ls -al

# parameters passing to main command
CMD [ "run", "start:prod" ]
