pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/atheendraas-collab/git-project-eg.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r git-project-eg/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
