# mesocial.io

Run server with:
npm test
OR
npm start

Run Local Dynamo DB:
java -D"java.library.path=./localDynamo/DynamoDBLocal_lib" -jar localDynamo/DynamoDBLocal.jar -sharedDb

Add User to DB:
aws dynamodb put-item --cli-input-json "file://C:\Users\Ciaran Callaghan\Documents\Development\mesocial.io\localDynamo\User.json"

EC2 Instance Commands:

- sudo yum update
- sudo yum install git
- sudo yum install -y gcc-c++ make
- curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash
- sudo yum install -y nodejs
- git clone https://github.com/CiaranCallaghan94/mesocial.io.git
- cd mesocial.io/
- npm install
- sudo npm install forever -g
- npm install forever-monitor
- forever start src/app.js
