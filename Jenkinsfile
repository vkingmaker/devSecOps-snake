node ('master'){  
   // def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    /*stage('SAST'){
        build 'SECURITY-SAST-SNYK'
    }*/

    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
       // app = docker.build("vkingmaker/snake")
	sh 'echo Build-and-Tag'
    }
    stage('Post-to-dockerhub') {
    
    /* docker.withRegistry('https://registry.hub.docker.com', 'training_creds') {
            app.push("latest")
        			}*/
	sh 'echo Post-to-dockerhub';
         }
    stage('SECURITY-IMAGE-SCANNER'){
       /* build 'SECURITY-IMAGE-SCANNER-AQUAMICROSCANNER'*/
	sh 'echo security-Image-Scanner'
    }
  
    
    stage('Pull-image-server') {
    
         /*sh "docker-compose down"
         sh "docker-compose up -d"*/
	sh 'echo Puul-image-server'
      }
    
    stage('DAST')
        {
       /* build 'SECURITY-DAST-OWASP_ZAP'*/
	sh 'echo Dast'
        }
 
}
