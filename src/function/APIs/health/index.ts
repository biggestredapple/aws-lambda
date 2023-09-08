import { Context, APIGatewayEvent, Handler } from "aws-lambda";

export const handler: Handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<any> => {
	context.callbackWaitsForEmptyEventLoop = false;

	return {
		statusCode: 200,
		body: "OK",
	};
};
