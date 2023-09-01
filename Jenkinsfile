node ('Ubuntu-app-server'){  
   def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
	sh 'sudo apt install gnupg2 pass -y'
    }  
    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
       app = docker.build("vkingmaker/snake")
    }
    stage('Post-to-dockerhub') {
    
    docker.withRegistry('https://registry.hub.docker.com', 'training_creds') {
            app.push("latest")
        			}
         }
  
    
    stage('Pull-image-server') {
    
         sh "docker-compose down"
         sh "docker-compose up -d"
      }
 
}
