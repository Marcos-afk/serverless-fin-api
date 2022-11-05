import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/database/dynamodb";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  const response = await document
    .scan({
      TableName: "todo_list",
      FilterExpression: "user_id = :user_id",
      ExpressionAttributeValues: { ":user_id": user_id },
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Lista de todos!",
      todos: response.Items[0],
    }),
  };
};
