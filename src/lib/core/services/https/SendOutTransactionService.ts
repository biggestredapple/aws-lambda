import { SendOutTransactionUseCase } from "../../ports/https/usecases";
import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../models";
import { TransactionManager } from "../../ports/https/adapters";
import { Logger } from "../../ports/shared/adapters";

export class SendOutTransactionService implements SendOutTransactionUseCase {
	constructor(
		private readonly transactionManager: TransactionManager,
		private readonly logger: Logger
	) {}

	async execute(
		data: SendOutTransactionInput
	): Promise<SendOutTransactionOutput> {
		const result = await this.transactionManager.sendOutTransaction(data);

		this.logger.info(`Send Out Transaction`);
		this.logger.info(`Data: ${JSON.stringify(data)}`);
		this.logger.info(`Result: ${JSON.stringify(result)}`);
		this.logger.info("");

		return result;
	}
}
