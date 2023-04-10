FROM node:12.13-alpine As development

COPY package*.json ./

RUN npm install --only=development

COPY . .