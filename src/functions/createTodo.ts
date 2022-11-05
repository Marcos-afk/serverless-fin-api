import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuidV4 } from "uuid";

interface CreateTodoProps {
  user_id: string;
  title: string;
  deadline: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const { user_id, title, deadline } = JSON.parse(
    event.body
  ) as CreateTodoProps;

  const todo = {
    id: uuidV4(),
    user_id,
    title,
    done: false,
    deadline,
  };

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Atividade registrada com sucesso!",
      todo,
    }),
  };
};
