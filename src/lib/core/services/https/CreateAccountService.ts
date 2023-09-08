import { CreateAccountUseCase } from "../../ports/https/usecases";
import { CreateAccountInput, CreateAccountOutput } from "../../models";
import { AccountManager } from "../../ports/https/adapters";
import { Logger } from "../../ports/shared/adapters";
import { CreateAccountRequestManager } from "../../utils/CreateAccountRequestManager";

export class CreateAccountService implements CreateAccountUseCase {
	private createAccountRequestManager: CreateAccountRequestManager;

	constructor(
		accountRequestTableName: string,
		private readonly accountManager: AccountManager,
		private readonly logger: Logger
	) {
		this.createAccountRequestManager = new CreateAccountRequestManager({
			tableName: accountRequestTableName,
		});
	}

	async execute(data: CreateAccountInput): Promise<CreateAccountOutput> {
		const requestId =
			await this.createAccountRequestManager.generateCreateAccountRequest(data);

		const result = await this.accountManager.createAccount(requestId, data);

		this.logger.info(`Create Account Request : ${requestId}`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
