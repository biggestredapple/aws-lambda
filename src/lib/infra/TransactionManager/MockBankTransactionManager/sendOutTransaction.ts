import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../../core/models";
import axios from "axios";

interface MockBankSendOutTransactionInput extends SendOutTransactionInput {
	transactionId: number;
	senderBBan: string;
	receiverBBan: string;
	receiverIBan: string;
	receiverSwiftCode: string;
	sendAmount: number;
	receiveAmount: number;
	receiveFee: number;
}

export const sendOutTransaction = async (
	data: SendOutTransactionInput
): Promise<SendOutTransactionOutput> => {
	const mockBankData = data as MockBankSendOutTransactionInput;

	try {
		const result = await axios(
			`${process.env.MOCK_BANK_API}/account/send/${mockBankData.transactionId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					senderBBan: mockBankData.senderBBan,
					receiverBBan: mockBankData.receiverBBan,
					receiverIBan: mockBankData.receiverIBan,
					receiverSwiftCode: mockBankData.receiverSwiftCode,
					sendAmount: mockBankData.sendAmount,
					receiveAmount: mockBankData.receiveAmount,
					receiveFee: mockBankData.receiveFee,
				},
			}
		);

		return result.data;
	} catch (err) {
		console.log(err);
		return {};
	}
};
