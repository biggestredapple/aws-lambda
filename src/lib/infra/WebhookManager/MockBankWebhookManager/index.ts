import {
	CreateAccountInput,
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput,
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput,
	SendOutTransactionWebhookInput,
	SendOutTransactionWebhookOutput,
} from "../../../core/models";
import { WebhookManager } from "../../../core/ports/webhooks/Adapters";
import { createAccount } from "./createAccount";
import { receiveTransaction } from "./receiveTransaction";
import { sendOutTransaction } from "./sendOutTransaction";

export class MockBankWebhookManager implements WebhookManager {
	async createAccount(
		data: CreateAccountWebhookInput,
		accountData: CreateAccountInput
	): Promise<CreateAccountWebhookOutput> {
		return await createAccount(data, accountData);
	}

	async sendOutTransaction(
		data: SendOutTransactionWebhookInput
	): Promise<SendOutTransactionWebhookOutput> {
		return await sendOutTransaction(data);
	}

	async receiveTransaction(
		data: ReceiveTransactionWebhookInput
	): Promise<ReceiveTransactionWebhookOutput> {
		return await receiveTransaction(data);
	}
}
