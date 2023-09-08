import {
	CreateAccountInput,
	CreateAccountOutput,
	GetAccountDetailInput,
	GetAccountDetailOutput,
} from "../../../models";

export interface AccountManager {
	createAccount(
		requestId: string,
		data: CreateAccountInput
	): Promise<CreateAccountOutput>;

	getAccountDetail(
		data: GetAccountDetailInput
	): Promise<GetAccountDetailOutput>;
}
