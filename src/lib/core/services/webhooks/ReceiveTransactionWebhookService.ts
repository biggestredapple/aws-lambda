import { ReceiveTransactionWebhookUseCase } from "../../ports/webhooks/usecases";
import {
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput,
} from "../../models";
import { WebhookManager } from "../../ports/webhooks/adapters";
import { Logger } from "../../ports/shared/adapters";

export class ReceiveTransactionWebhookService
	implements ReceiveTransactionWebhookUseCase
{
	constructor(
		private readonly webhookManager: WebhookManager,
		private readonly logger: Logger
	) {}

	async execute(
		data: ReceiveTransactionWebhookInput
	): Promise<ReceiveTransactionWebhookOutput> {
		const result = await this.webhookManager.receiveTransaction(data);

		this.logger.info(`Receive Transaction Webhook`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
