# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn
RUN yarn lint --fix
RUN quasar build -m pwa --modern

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/pwa /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
