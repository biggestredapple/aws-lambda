import { UseCase } from "../../shared/usecases";

import { GetAccountDetailInput, GetAccountDetailOutput } from "../../../models";

export type GetAccountDetailUseCase = UseCase<
	GetAccountDetailInput,
	GetAccountDetailOutput
>;
