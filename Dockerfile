FROM node:14
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm","start"]