import { Context, APIGatewayEvent, Handler } from "aws-lambda";
import { CreateAccountWebhookInput } from "../../../lib/core/models";
import { getExecutionContext } from "./executor";

export const handler: Handler = async (
	_event: APIGatewayEvent,
	context: Context
): Promise<any> => {
	context.callbackWaitsForEmptyEventLoop = false;

	let executionError: Error | undefined;

	const body: CreateAccountWebhookInput = JSON.parse(_event.body!);

	console.log("Create Account Webhook", JSON.stringify(body));

	try {
		const executionContext = await getExecutionContext(body.requestId);

		const result = await executionContext.createAccountWebhookUseCase.execute(
			body
		);

		return {
			statusCode: 200,
			body: JSON.stringify(result),
		};
	} catch (err) {
		executionError = err as Error;
	}

	if (executionError) {
		// Re throw the error so AWS Lambda can retry the event
		throw executionError;
	}
};
