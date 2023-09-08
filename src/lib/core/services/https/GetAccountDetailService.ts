import { GetAccountDetailUseCase } from "../../ports/https/usecases";
import { GetAccountDetailInput, GetAccountDetailOutput } from "../../models";
import { AccountManager } from "../../ports/https/adapters";
import { Logger } from "../../ports/shared/adapters";

export class GetAccountDetailService implements GetAccountDetailUseCase {
	constructor(
		private readonly accountManager: AccountManager,
		private readonly logger: Logger
	) {}

	async execute(data: GetAccountDetailInput): Promise<GetAccountDetailOutput> {
		const result = await this.accountManager.getAccountDetail(data);

		this.logger.info(`Get Account Detail`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
