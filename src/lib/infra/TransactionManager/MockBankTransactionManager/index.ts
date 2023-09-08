import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../../core/models";
import { TransactionManager } from "../../../core/ports/https/adapters/TransactionManager";
import { sendOutTransaction } from "./sendOutTransaction";

export class MockBankTransactionManager implements TransactionManager {
	async sendOutTransaction(
		data: SendOutTransactionInput
	): Promise<SendOutTransactionOutput> {
		return await sendOutTransaction(data);
	}
}
