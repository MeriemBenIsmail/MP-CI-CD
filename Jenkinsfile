pipeline {
    agent any
    environment {
        DOCKER_PATH = '"C:/Program Files/Docker/Docker/resources/bin/docker-compose"'
    }
    stages {
        stage('Build Image') {
            steps {
                script {
                    echo "Building the Docker images"
                    sh "${DOCKER_PATH} build"
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing images to Docker Hub"
                    sh "docker login -u meriem1219 -p spn123456789"
                    sh "${DOCKER_PATH} push"
                }
            }
        }
    }
}
