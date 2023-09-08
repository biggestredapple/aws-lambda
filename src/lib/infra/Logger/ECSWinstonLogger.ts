import ecsFormat from "@elastic/ecs-winston-format";
import winston from "winston";
import { Logger } from "../../core/ports/shared/adapters";

// eslint-disable-next-line @typescript-eslint/no-var-requires

export class ECSWinstonLogger implements Logger {
	private _logger: winston.Logger;

	public constructor(options: {
		level: "error" | "warn" | "info" | "verbose" | "debug" | "silly";
		transports?: winston.transport[];
	}) {
		this._logger = winston.createLogger({
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			format: ecsFormat(),
			level: options.level,
			transports: options.transports || [new winston.transports.Console()],
		});
	}

	public get winstonLogger(): winston.Logger {
		return this._logger;
	}

	//public warning(message: string, ...meta: any[]): void;
	public emerg(message: string, meta?: unknown): void {
		this._logger.emerg(message, meta);
	}

	public alert(message: string, meta?: unknown): void {
		this._logger.alert(message, meta);
	}

	public crit(message: string, meta?: unknown): void {
		this._logger.crit(message, meta);
	}

	public error(message: string, meta?: unknown): void {
		this._logger.error(message, meta);
	}

	public warning(message: string, meta?: unknown): void {
		this._logger.warn(message, meta);
	}

	public notice(message: string, meta?: unknown): void {
		this._logger.notice(message, meta);
	}

	public info(message: string, meta?: unknown): void {
		this._logger.info(message, meta);
	}

	public debug(message: string, meta?: unknown): void {
		this._logger.debug(message, meta);
	}
}
