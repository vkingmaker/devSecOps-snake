node('Ubuntu-app-server') {
    def DOCKER_HUB_REPO = 'vkingmaker' // Your Docker Hub repository
    def APP_TAG = 'snake' // Your Docker image tag

    try {
        // Authenticate with Docker Hub
        withCredentials([usernamePassword(credentialsId: 'training_creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
            sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
        }

        // Checkout your source code from your version control system
        checkout scm

        // Build the Docker image
        sh "docker build -t ${DOCKER_HUB_REPO}/${APP_TAG}:${BUILD_NUMBER} ."

        // Push the Docker image
        sh "docker push ${DOCKER_HUB_REPO}/${APP_TAG}:${BUILD_NUMBER}"

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
