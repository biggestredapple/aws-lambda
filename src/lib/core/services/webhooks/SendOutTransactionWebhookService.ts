import { SendOutTransactionWebhookUseCase } from "../../ports/webhooks/usecases";
import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../models";
import { WebhookManager } from "../../ports/webhooks/adapters";
import { Logger } from "../../ports/shared/adapters";

export class SendOutTransactionWebhookService
	implements SendOutTransactionWebhookUseCase
{
	constructor(
		private readonly webhookManager: WebhookManager,
		private readonly logger: Logger
	) {}

	async execute(
		data: SendOutTransactionInput
	): Promise<SendOutTransactionOutput> {
		const result = await this.webhookManager.sendOutTransaction(data);

		this.logger.info(`Send Out Transaction Webhook`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
