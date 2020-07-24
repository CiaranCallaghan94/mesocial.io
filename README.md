# mesocial.io

Using json-server currently to mock a real database.

Run server with:
npm start

Run Local Dynamo DB:
java -D"java.library.path=./localDynamo/DynamoDBLocal_lib" -jar localDynamo/DynamoDBLocal.jar -sharedDb

Add User to DB:
aws dynamodb put-item --cli-input-json "file://C:\Users\Ciaran Callaghan\Documents\Development\mesocial.io\localDynamo\User.json" --endpoint-url http://localhost:8000
