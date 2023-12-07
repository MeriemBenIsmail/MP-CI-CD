pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_PATH = '"C:/Program Files/Docker/Docker/resources/bin/"'
    }

    stages {
        stage('Pull from GitHub') {
            steps {
                git url: 'https://github.com/MeriemBenIsmail/MP-CI-CD', branch: 'main'
                
            }
        }
        stage('Build MongoDB Image') {
            steps {
                script {
                    echo "Building the MongoDB image"
                    sh "docker build -t mongo:latest ."
                }
            }
        }

      /*  stage('Run MongoDB Container') {
            steps {
                script {
                    echo "Running the MongoDB container"
                    sh "docker run -d --name mongodb -p 27017:27017 mongo:latest"
                }
            }
        }*/

        stage('Build Express App Image') {
            steps {
                script {
                    echo "Building the Express App image"
                    sh "docker build -t express-app:latest ."
                }
            }
        }

       /* stage('Run Express App Container') {
            steps {
                script {
                    echo "Running the Express App container"
                    sh "docker run -d --name express-app -p 3000:3000 --link mongodb:db -e MONGO_URI=mongodb://db:27017/MP-database express-app:latest"
                }
            }
        }*/
    

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing images to Docker Hub"

                    sh "docker login -u meriem1219 -p spn123456789"

                    sh "docker tag latest meriem1219/mp-ci-cd"
                    sh "docker push meriem1219/mp-ci-cd"
                }
            }
        }
        
    }
}
