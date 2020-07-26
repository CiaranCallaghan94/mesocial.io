# mesocial.io

Run server with:
npm test
OR
npm start

Run Local Dynamo DB:
java -D"java.library.path=./localDynamo/DynamoDBLocal_lib" -jar localDynamo/DynamoDBLocal.jar -sharedDb

Add User to DB:
aws dynamodb put-item --cli-input-json "file://C:\Users\Ciaran Callaghan\Documents\Development\mesocial.io\localDynamo\User.json"
