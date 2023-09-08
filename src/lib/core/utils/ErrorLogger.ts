import { Logger } from "../ports/shared/adapters";

export class ErrorLogger {
	public static logError(
		logger: Logger,
		error: Error,
		message: string,
		labels?: Record<string, unknown>
	): void {
		const errorMessage = message;
		const logLabels = labels || {};

		logger.error(errorMessage, {
			err: error,
			labels: logLabels,
		});
	}
}
