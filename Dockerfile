FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/node_passport_login

COPY . /home/node_passport_login

CMD ["node", "/home/node_passport_login/app.js"]