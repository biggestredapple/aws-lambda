import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../../models";

export interface TransactionManager {
	sendOutTransaction(
		data: SendOutTransactionInput
	): Promise<SendOutTransactionOutput>;
}
