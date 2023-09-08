import { UseCase } from "../../shared/usecases";

import {
	SendOutTransactionInput,
	SendOutTransactionOutput,
} from "../../../models";

export type SendOutTransactionUseCase = UseCase<
	SendOutTransactionInput,
	SendOutTransactionOutput
>;
