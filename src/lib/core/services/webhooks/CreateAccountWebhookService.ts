import { CreateAccountWebhookUseCase } from "../../ports/webhooks/usecases";
import {
	CreateAccountInput,
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput,
} from "../../models";
import { WebhookManager } from "../../ports/webhooks/adapters";
import { Logger } from "../../ports/shared/adapters";

export class CreateAccountWebhookService
	implements CreateAccountWebhookUseCase
{
	constructor(
		private readonly webhookManager: WebhookManager,
		private readonly logger: Logger,
		private accountData: CreateAccountInput
	) {}

	async execute(
		data: CreateAccountWebhookInput
	): Promise<CreateAccountWebhookOutput> {
		const result = await this.webhookManager.createAccount(
			data,
			this.accountData
		);

		this.logger.info(`Create Account Webhook`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
