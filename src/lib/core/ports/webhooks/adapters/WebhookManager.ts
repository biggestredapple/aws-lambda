import {
	CreateAccountInput,
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput,
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput,
	SendOutTransactionWebhookInput,
	SendOutTransactionWebhookOutput,
} from "../../../models";

export interface WebhookManager {
	createAccount(
		data: CreateAccountWebhookInput,
		accountData: CreateAccountInput
	): Promise<CreateAccountWebhookOutput>;

	sendOutTransaction(
		data: SendOutTransactionWebhookInput
	): Promise<SendOutTransactionWebhookOutput>;

	receiveTransaction(
		data: ReceiveTransactionWebhookInput
	): Promise<ReceiveTransactionWebhookOutput>;
}
