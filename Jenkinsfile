/* groovylint-disable-next-line CompileStatic */
node('Ubuntu-app-server') {
  def DOCKER_HUB_REPO = 'vkingmaker/snake'
  def DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
  def DOCKER_USERNAME = credentials('docker-hub-username-credential-id')
  def DOCKER_PASSWORD = credentials('docker-hub-password-credential-id')

  stage('Cloning Git') {
    checkout scm
  }

  stage('Build-and-Tag') {
    sh "docker build -t ${DOCKER_HUB_REPO}:${DOCKER_IMAGE_TAG} ."
  }
  stage('Post-to-dockerhub') {
    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
    sh "docker push ${DOCKER_HUB_REPO}:${DOCKER_IMAGE_TAG}"
  }

  stage('Pull-image-server') {
    sh 'docker-compose down'
    sh 'docker-compose up -d'
  }
}

