FROM node:10.13

RUN mkdir -p /home/Service
WORKDIR /home/Service

COPY . /home/Service

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --production

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["start"]
