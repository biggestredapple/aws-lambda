import { CreateAccountUseCase } from "../../../lib/core/ports/https/usecases";
import { AccountManager } from "../../../lib/core/ports/https/adapters";
import { CreateAccountService } from "../../../lib/core/services/https/CreateAccountService";
import { Logger } from "../../../lib/core/ports/shared/adapters";
import { MockBankAccountManager } from "../../../lib/infra/AccountManager";
import { ECSWinstonLogger } from "../../../lib/infra/Logger";
import { checkEnv } from "../../../lib/utils/checkEnv";
import { BANK_SORT_CODE } from "../../../config";

checkEnv();

export type ExecutionContext = {
	createAccountUseCase: CreateAccountUseCase;
};

export async function getExecutionContext(
	sortCode: string
): Promise<ExecutionContext> {
	const logger: Logger = new ECSWinstonLogger({
		level: "debug",
	});

	let accountManager: AccountManager;
	switch (sortCode) {
		case BANK_SORT_CODE.MOCK_BANK:
			accountManager = new MockBankAccountManager();
			break;
		default:
			throw new Error("Unsupported Bank Sort Code");
	}

	const createAccountUseCase = new CreateAccountService(
		process.env.ACCOUNT_REQUEST_TABLE_NAME!,
		accountManager,
		logger
	);

	return {
		createAccountUseCase,
	};
}
