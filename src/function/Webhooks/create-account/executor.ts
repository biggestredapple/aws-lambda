import { CreateAccountWebhookUseCase } from "../../../lib/core/ports/webhooks/usecases";
import { WebhookManager } from "../../../lib/core/ports/webhooks/adapters";
import { CreateAccountWebhookService } from "../../../lib/core/services/webhooks/CreateAccountWebhookService";
import { CreateAccountRequestManager } from "../../../lib/core/utils/CreateAccountRequestManager";
import { Logger } from "../../../lib/core/ports/shared/adapters/Logger";
import { ECSWinstonLogger } from "../../../lib/infra/Logger";
import { checkEnv } from "../../../lib/utils/checkEnv";
import { MockBankWebhookManager } from "../../../lib/infra/WebhookManager";
import { BANK_SORT_CODE } from "../../../config";

checkEnv();

export type ExecutionContext = {
	createAccountWebhookUseCase: CreateAccountWebhookUseCase;
};

export async function getExecutionContext(
	requestId: string
): Promise<ExecutionContext> {
	const logger: Logger = new ECSWinstonLogger({
		level: "debug",
	});

	const createAccountRequestManager: CreateAccountRequestManager =
		new CreateAccountRequestManager({
			tableName: process.env.ACCOUNT_REQUEST_TABLE_NAME!,
		});

	const accountData = await createAccountRequestManager.getCreateAccountRequest(
		requestId
	);

	let webhookManager: WebhookManager;
	switch (accountData.sortCode) {
		case BANK_SORT_CODE.MOCK_BANK:
			webhookManager = new MockBankWebhookManager();
			break;
		default:
			throw new Error("Unsupported Bank Sort Code");
	}

	const createAccountWebhookUseCase = new CreateAccountWebhookService(
		webhookManager,
		logger,
		accountData
	);

	return {
		createAccountWebhookUseCase,
	};
}
