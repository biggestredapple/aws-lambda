export interface GetAccountDetailInput {
	sortCode: string;
	bban?: string;
}

export interface GetAccountDetailOutput {
	name: string;
	currency: string;
	balance: number;
	bban: string;
	iban: string;
	swiftCode: string;
}
