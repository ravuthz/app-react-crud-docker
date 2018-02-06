FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]
