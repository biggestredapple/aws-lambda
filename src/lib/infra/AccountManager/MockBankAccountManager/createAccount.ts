import { CreateAccountInput, CreateAccountOutput } from "../../../core/models";
import axios from "axios";

export const createAccount = async (
	requestId: string,
	data: CreateAccountInput
): Promise<CreateAccountOutput> => {
	try {
		const result = await axios(
			`${process.env.MOCK_BANK_API}/account/${requestId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					name: data.name,
					currency: data.currencyCode,
					sortCode: data.sortCode,
				},
			}
		);

		return result.data;
	} catch (err) {
		throw err;
	}
};
