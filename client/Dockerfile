FROM node:20-alpine AS stage1

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./ ./
RUN npm run build





FROM caddy:2-alpine
COPY --from=stage1 /app/dist /usr/share/caddy

EXPOSE 80