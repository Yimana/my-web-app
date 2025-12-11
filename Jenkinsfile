pipeline {
    agent any

    environment {
        // Replace with your actual Docker Hub username
        IMAGE = "gloray/webapp-jenkins:v1"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo "Building Docker image $IMAGE..."
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Docker Push') {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub', // Make sure this exists in Jenkins
                        usernameVariable: 'USER',
                        passwordVariable: 'PASS'
                    )
                ]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
                sh 'docker push $IMAGE'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully by GlorayS!'
        }
        failure {
            echo 'Pipeline failed. Check the logs!'
        }
    }
}
