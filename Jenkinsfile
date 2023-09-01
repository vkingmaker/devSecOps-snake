node('Ubuntu-app-server') {
  def DOCKER_HUB_REPO = 'vkingmaker/snake'
  def DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
  def DOCKER_USERNAME = credentials('docker-hub-username-credential-id')
  def DOCKER_PASSWORD = credentials('docker-hub-password-credential-id')

  try {
    // Checkout your source code from your version control system
    checkout scm

    // Build the Docker image
    sh "docker build -t ${DOCKER_HUB_REPO}:${DOCKER_IMAGE_TAG} -f Dockerfile ."

    // Log in to Docker Hub using environment variables
    sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"

    // Push the Docker image to Docker Hub
    sh "docker push ${DOCKER_HUB_REPO}:${DOCKER_IMAGE_TAG}"

    // Clean up any dangling images or containers (optional)
    sh 'docker system prune -f'

    // Notify or perform additional actions on success
    echo 'Docker image built and pushed successfully!'
    } catch (Exception e) {
    // Notify or perform actions on failure
    echo 'Docker image build or push failed!'
    currentBuild.result = 'FAILURE'
    } finally {
    // Logout from Docker Hub (optional)
    sh 'docker logout'
  }
}
