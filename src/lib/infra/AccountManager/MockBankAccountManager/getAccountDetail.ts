import {
	GetAccountDetailInput,
	GetAccountDetailOutput,
} from "../../../core/models";
import axios from "axios";

export const getAccountDetail = async (
	data: GetAccountDetailInput
): Promise<GetAccountDetailOutput> => {
	const result = await axios(
		`${process.env.MOCK_BANK_API}/account/${data.bban}`,
		{
			method: "GET",
		}
	);

	return result.data;
};
