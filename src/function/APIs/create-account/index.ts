import { Context, APIGatewayEvent, Handler } from "aws-lambda";
import { getExecutionContext } from "./executor";
import { CreateAccountInput } from "../../../lib/core/models";

const handler: Handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<any> => {
	console.log("Create Account Event BODY: ", event.body);

	context.callbackWaitsForEmptyEventLoop = false;

	let executionError: Error | undefined;

	const body: CreateAccountInput = JSON.parse(event.body!);

	try {
		const executionContext = await getExecutionContext(body.sortCode);

		const result = await executionContext.createAccountUseCase.execute(body);

		return {
			statusCode: 200,
			body: JSON.stringify(result),
		};
	} catch (err) {
		executionError = err as Error;
	}

	if (executionError) {
		throw executionError;
	}
};

module.exports = {
	handler,
};
