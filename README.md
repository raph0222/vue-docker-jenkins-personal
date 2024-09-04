# READ ME

This is a how-to-use file explaining the logic used in this project. This project development is still ongoing. Improvements and backend project will be done.

## Docker

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

## Jenkins
There is a Jenkins server setup in a docker container. You can access jenkins from [http://localhost:8081/](http://localhost:8081/) It will be used to simply handle code "reviews" for now. Each time code needs to be merged, jenkins will be triggered, start a docker container with node and verify if the code can be : linted, built... (see /jenkins/Jenkinsfile). Update the .env with your GID as explained if you want to test it out.

notes : for now, it uses local code, as the github repo is not created yet. The review pipeline is triggered manually by simply starting the build.

```sh
# the jenkins and docker files are located in /jenkins
cd jenkins
docker-compose up -d --build
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).