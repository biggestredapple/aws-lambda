import {
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput,
	CreateAccountInput,
} from "../../../core/models";
import axios from "axios";

export const createAccount = async (
	data: CreateAccountWebhookInput,
	accountData: CreateAccountInput
): Promise<CreateAccountWebhookOutput> => {
	const result = await axios(
		`${process.env.CUSTOMER_BACKEND_SERVER}/account/webhook`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				userId: accountData.userId,
				sortCode: accountData.sortCode,
				name: accountData.name,
				color: accountData.color,
				currencyCode: accountData.currencyCode,
				balance: data.account.balance,
				accountNumber: data.account.bban,
				iban: data.account.iban,
				swiftCode: data.account.swiftCode,
				bankName: "Mock",
				bankAddress: "Mock Address",
			},
		}
	);

	return result.data;
};
