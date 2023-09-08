import {
	SendOutTransactionWebhookInput,
	SendOutTransactionWebhookOutput,
} from "../../../core/models";
import axios from "axios";

interface MockBankSendOutTransactionWebhookInput
	extends SendOutTransactionWebhookInput {
	transactionId: number;
}

export const sendOutTransaction = async (
	data: SendOutTransactionWebhookInput
): Promise<SendOutTransactionWebhookOutput> => {
	const mockBankData = data as MockBankSendOutTransactionWebhookInput;

	const result = await axios(
		`${process.env.CUSTOMER_BACKEND_SERVER}/transaction/send-out-transaction/webhook`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				transactionId: mockBankData.transactionId,
			},
		}
	);

	return result.data;
};
