import { Context, APIGatewayEvent, Handler } from "aws-lambda";
import { GetAccountDetailInput } from "../../../lib/core/models";
import { getExecutionContext } from "./executor";

export const handler: Handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<any> => {
	context.callbackWaitsForEmptyEventLoop = false;

	let executionError: Error | undefined;

	const data: GetAccountDetailInput = JSON.parse(event.body!);

	try {
		const executionContext = await getExecutionContext(data.sortCode);

		const result = await executionContext.getAccountDetailUseCase.execute(data);
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
