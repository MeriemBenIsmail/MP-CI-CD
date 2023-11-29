pipeline {
    agent any
    stages {
        stage('Pull from GitHub') {
            steps {
                git url: 'https://github.com/MeriemBenIsmail/MP-CI/CD', branch: 'main'
                
            }
        }
        stage('Build Image') {
            steps {
                script {
                    echo "building the image"
                    sh "docker build -t MP-CI/CD-app ."
                }
            }
        }
        
        


    }
      
      
        
    
}
