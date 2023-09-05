const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://192.168.56.105:9000',
       options : {
       'sonar.sources': '.',
	'sonar.token': 'squ_3e00163a90578904402d6217a5d0a89eae43507a'
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
