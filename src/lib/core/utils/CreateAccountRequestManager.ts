import AWS from "aws-sdk";
import { v4 } from "uuid";
import { CreateAccountInput } from "../models";

type DynamoDBTableOptions = {
	tableName: string;
};

export class CreateAccountRequestManager {
	protected dynamoDB: AWS.DynamoDB.DocumentClient;
	protected tableName: string;

	constructor(options: DynamoDBTableOptions) {
		this.dynamoDB = new AWS.DynamoDB.DocumentClient({
			// region: "eu-west-1",
			region: "localhost",
			endpoint: "http://localhost:8000",
		});

		this.tableName = options.tableName;
	}

	async generateCreateAccountRequest(
		data: CreateAccountInput
	): Promise<string> {
		const requestId = v4();

		const params = {
			TableName: this.tableName,
			Item: {
				id: requestId,
				data: data,
			},
		};

		await this.dynamoDB.put(params).promise();

		return requestId;
	}

	async getCreateAccountRequest(
		requestId: string
	): Promise<CreateAccountInput> {
		const params = {
			TableName: this.tableName,
			Key: {
				id: requestId,
			},
		};

		const data = await this.dynamoDB
			.get(params)
			.promise()
			.then((res) => {
				if (res.Item) {
					return res.Item.data;
				} else {
					throw new Error("No data!");
				}
			})
			.catch((err) => {
				throw err;
			});

		return data;
	}
}
