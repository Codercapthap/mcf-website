FROM node:lts-bullseye AS build
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install --silent && mv node_modules ../
COPY . .
RUN chown -R node /usr/src/app
USER node
RUN npm run build

FROM nginx:mainline-alpine3.18-perl
COPY --link nginx.conf /etc/nginx/conf.d/default.conf
COPY --link --from=build usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080