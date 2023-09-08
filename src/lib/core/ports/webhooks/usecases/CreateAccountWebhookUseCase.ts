import { UseCase } from "../../shared/usecases";

import {
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput,
} from "../../../models";

export type CreateAccountWebhookUseCase = UseCase<
	CreateAccountWebhookInput,
	CreateAccountWebhookOutput
>;
