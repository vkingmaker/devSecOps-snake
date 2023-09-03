pipeline {
    agent { label 'Ubuntu-app-server' }
    environment {
        DOCKER_HUB_REPO = 'vkingmaker' // Your Docker Hub repository
        APP_TAG = 'snake' // Your Docker image tag
    }
    stages {
        stage('Checkout') {
      steps {
        // Checkout your source code from your version control system
        checkout scm
      }
        }
        stage('Build and Push Docker Image') {
      steps {
        script {
          // Authenticate with Docker Hub
          withCredentials([
            usernamePassword(
              credentialsId: 'training_creds',
              usernameVariable: 'DOCKER_USERNAME',
              passwordVariable: 'DOCKER_PASSWORD'
            )
          ]) {
            sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
          }
          sh "docker build -t ${DOCKER_HUB_REPO}/${APP_TAG}:${BUILD_NUMBER} ."
          sh "docker push ${DOCKER_HUB_REPO}/${APP_TAG}:${BUILD_NUMBER}"
          sh 'docker system prune -f'
        }
      }
        }
    }
    post {
        success {
      echo 'Docker image built and pushed successfully!'
        }
        failure {
      echo 'Docker image build or push failed!'
        }
    }
}

