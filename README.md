# READ ME

This is a how-to-use file explaining the logic used in this project. This project development is still ongoing. Improvements and backend project will be done.

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
For now, this is a front-end only app, so you can simply run :

```sh
npm install
npm run dev
```

## /Jenkins

This path is used to run a Jenkins server setup in a docker container.

You can access jenkins from [http://localhost:8081/](http://localhost:8081/) It is used to handle code "reviews", and the deployment pipeline too for now.
*Update the .env DOCKER_GID value with your GID for jenkins permissions with docker host to test it out*

**2 pipelines** :

- review : Each time code needs to be merged, jenkins will be triggered, docker inside jenkins and check if the project can be : linted, built... (manual for now)

- deploy : get the code from github repo, docker inside jenkins to build the /dist. Send the build to an EC2 instance via ssh. Restart apache.

```sh
# the jenkins and docker files are located in /jenkins
cd jenkins
docker-compose up -d --build
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).