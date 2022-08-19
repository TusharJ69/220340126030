FROM node:alpine
WORKDIR /usr/diot/publisher
COPY pub.js /usr/diot/publisher/
COPY sens_data.json /usr/diot/publisher/
RUN npm install mqtt
CMD ["node", "pub.js"]
