pipeline {
    agent any
     tools {
        docker 'Docker'
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
                    sh "docker login -u meriem1219 -p spn123456789"
                    sh "${DOCKER_PATH} push"
                }
            }
        }
    }
}
