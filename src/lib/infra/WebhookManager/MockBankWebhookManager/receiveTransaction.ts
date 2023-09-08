import {
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput,
} from "../../../core/models";
import axios from "axios";
import { BANK_SORT_CODE } from "../../../../config";

interface MokBankAccount {
	name: string;
	currency: string;
	balance: string;
	bban: string;
	iban: string;
	swift: string;
}

interface MockBankReceiveTransactionWebhookInput
	extends ReceiveTransactionWebhookInput {
	senderAccount: MokBankAccount;
	receiveAccount: MokBankAccount;
	amount: number;
	feeDetail: number;
	feeAmount: number;
}

export const receiveTransaction = async (
	data: ReceiveTransactionWebhookInput
): Promise<ReceiveTransactionWebhookOutput> => {
	const mockBankData = data as MockBankReceiveTransactionWebhookInput;

	const result = await axios(
		`${process.env.CUSTOMER_BACKEND_SERVER}/transaction/receive-transaction/webhook`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				receiverAccountNumber: mockBankData.receiveAccount.bban,
				currencyCode: mockBankData.receiveAccount.currency,
				cpName: "",
				cpBankName: "Mock",
				cpBankAddress: "Mock Address",
				cpSortCode: BANK_SORT_CODE.MOCK_BANK,
				cpAccountName: mockBankData.senderAccount.name,
				cpAccountNumber: mockBankData.senderAccount.bban,
				cpIBan: mockBankData.senderAccount.iban,
				cpSwiftCode: mockBankData.senderAccount.swift,
				type: 0,
				amount: mockBankData.amount,
				feeDetail: mockBankData.feeDetail,
				feeAmount: mockBankData.feeAmount,
				internal: 1,
			},
		}
	);

	return result.data;
};
