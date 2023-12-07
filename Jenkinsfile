pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_PATH = '"C:/Program Files/Docker/Docker/resources/bin/"'
    }

    stages {
        stage('Build Image') {
            steps {
                script {
                    echo "Building the Docker images"
                    sh "docker-compose build"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing images to Docker Hub"
                    sh "${DOCKER_COMPOSE_PATH} push"
                }
            }
        }
    }
}
