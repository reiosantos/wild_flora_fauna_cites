FROM node:12

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

RUN npm install react create-react-app react-scripts -g --silent

# start app
CMD ["npm", "start"]
