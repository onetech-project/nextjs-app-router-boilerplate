pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Docker Build') {
      steps {
        sh 'docker build -t app-router-portfolio .'
      }
    }
    stage('Docker Run') {
      steps {
        sh 'docker run -p 3000:3000 app-router-portfolio'
      }
    }
  }
}
