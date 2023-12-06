pipeline {
    agent any
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
                    sh "docker-compose build"
                    
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo "push to docker hub"
                sh "docker login -u meriem1219 -p spn123456789"
                sh "docker-compose push"
            }
        }
    }
}
