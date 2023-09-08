export interface CreateAccountWebhookInput {
	requestId: string;
	account: {
		balance: number;
		bban: string;
		iban: string;
		swiftCode: string;
	};
}

export interface CreateAccountWebhookOutput {}
