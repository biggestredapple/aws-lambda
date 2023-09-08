import assert from "assert";

export const checkEnv = () => {
	assert(
		process.env.ACCOUNT_REQUEST_TABLE_NAME,
		"No ACCOUNT_REQUEST_TABLE_NAME environment value!"
	);
	assert(process.env.MOCK_BANK_API, "No MOCK_BANK_API environment value!");
	assert(
		process.env.CUSTOMER_BACKEND_SERVER,
		"No CUSTOMER_BACKEND_SERVER environment value!"
	);
};
