# READ ME

Personal portfolio/resume hosted on Cloudflare at: [https://raphael-rocha.xyz/](https://raphael-rocha.xyz/)

## /Docker

This path is used to run the server inside a docker container.

If necessary, you can run the front using docker for a simpler usage. (you need to have docker already installed).
It will run the app from the docker. You can access the app from [http://localhost:9992/](http://localhost:9992/)

```sh
# the docker files are located in /docker
cd docker
docker-compose up -d --build
```

## Front
For now, this is a front-end only app, you will just need Node Version 22.8, and you can simply run :

```sh
cd front
npm install
npm run dev
```

### Deployment flows

- Cloudflare Pages setup getting updated on each push.
- Previous AWS EC2 flow kept for history: `.github/workflows/deploy_old.yml`.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
