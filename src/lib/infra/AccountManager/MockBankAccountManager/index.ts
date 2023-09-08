import {
	CreateAccountInput,
	CreateAccountOutput,
	GetAccountDetailInput,
	GetAccountDetailOutput,
} from "../../../core/models";
import { AccountManager } from "../../../core/ports/https/adapters/AccountManager";
import { getAccountDetail } from "./getAccountDetail";
import { createAccount } from "./createAccount";

export class MockBankAccountManager implements AccountManager {
	async createAccount(
		requestId: string,
		data: CreateAccountInput
	): Promise<CreateAccountOutput> {
		return await createAccount(requestId, data);
	}

	async getAccountDetail(
		data: GetAccountDetailInput
	): Promise<GetAccountDetailOutput> {
		return await getAccountDetail(data);
	}
}
