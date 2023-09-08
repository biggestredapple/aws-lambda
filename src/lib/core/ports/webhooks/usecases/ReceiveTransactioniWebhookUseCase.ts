import { UseCase } from "../../shared/usecases";

import {
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput,
} from "../../../models";

export type ReceiveTransactionWebhookUseCase = UseCase<
	ReceiveTransactionWebhookInput,
	ReceiveTransactionWebhookOutput
>;
