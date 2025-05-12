FROM ghcr.io/puppeteer/puppeteer:22

USER root
WORKDIR /usr/src/apps/resume

COPY . .

RUN npm install --registry=https://registry.npmmirror.com
RUN npx prisma generate
RUN npm run build

EXPOSE 5002

CMD ["npm", "run", "start:prod"]