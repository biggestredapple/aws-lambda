import { UseCase } from "../../shared/usecases";

import {
	SendOutTransactionWebhookInput,
	SendOutTransactionWebhookOutput,
} from "../../../models";

export type SendOutTransactionWebhookUseCase = UseCase<
	SendOutTransactionWebhookInput,
	SendOutTransactionWebhookOutput
>;
