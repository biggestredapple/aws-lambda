import { SendOutTransactionUseCase } from "../../../lib/core/ports/https/usecases";
import { TransactionManager } from "../../../lib/core/ports/https/adapters";
import { SendOutTransactionService } from "../../../lib/core/services/https/SendOutTransactionService";
import { Logger } from "../../../lib/core/ports/shared/adapters";
import { MockBankTransactionManager } from "../../../lib/infra/TransactionManager";
import { ECSWinstonLogger } from "../../../lib/infra/Logger";
import { checkEnv } from "../../../lib/utils/checkEnv";
import { BANK_SORT_CODE } from "../../../config";

checkEnv();

export type ExecutionContext = {
	sendOutTransactionUseCase: SendOutTransactionUseCase;
};

export async function getExecutionContext(
	sortCode: string
): Promise<ExecutionContext> {
	const logger: Logger = new ECSWinstonLogger({
		level: "debug",
	});

	let transactionManager: TransactionManager;
	switch (sortCode) {
		case BANK_SORT_CODE.MOCK_BANK:
			transactionManager = new MockBankTransactionManager();
			break;
		default:
			throw new Error("Unsupported Bank Sort Code");
	}

	const sendOutTransactionUseCase = new SendOutTransactionService(
		transactionManager,
		logger
	);

	return {
		sendOutTransactionUseCase,
	};
}
