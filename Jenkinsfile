pipeline {
    agent any
     environment {
        DOCKER_PATH = "C:/Program Files/Docker/Docker/resources/bin/docker-compose"
    }
    stages {
        stage('Pull from GitHub') {
            steps {
                git url: 'https://github.com/MeriemBenIsmail/MP-CI-CD', branch: 'main'
                
            }
        }
        stage('Build Image') {
            steps {
                script {
                    echo "building the image"
                    sh "${DOCKER_PATH} build"
                    
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo "push to docker hub"
                sh "docker login -u meriem1219 -p spn123456789"
                sh "${DOCKER_PATH}  push"
            }
        }
    }
}
