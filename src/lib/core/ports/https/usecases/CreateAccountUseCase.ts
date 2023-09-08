import { UseCase } from "../../shared/usecases";

import { CreateAccountInput, CreateAccountOutput } from "../../../models";

export type CreateAccountUseCase = UseCase<
	CreateAccountInput,
	CreateAccountOutput
>;
