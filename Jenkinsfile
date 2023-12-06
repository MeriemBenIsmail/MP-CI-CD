pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                script {
                    checkout([$class: 'GitSCM',
                            branches: [[name: '*/main']],
                            doGenerateSubmoduleConfigurations: false,
                            extensions: [[$class: 'CleanCheckout']],
                            submoduleCfg: [],
                            userRemoteConfigs: [[url: 'https://github.com/MeriemBenIsmail/MP-CI/CD',
                                                credentialsId: 'gitCredentials']]])
                }
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
