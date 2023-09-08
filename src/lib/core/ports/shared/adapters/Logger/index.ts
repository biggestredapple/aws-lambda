interface LeveledLogMethod {
  (message: string, meta?: unknown): void;
  (message: string): void;
}

/**
 * Logging level conforming to the severity ordering specified by RFC5424;
 * severity of all levels is assumed to be numerically ascending from most important to least important.
 * Some of them are informative, whereas others are critical to report for application processing.
 *
 * https://datatracker.ietf.org/doc/html/rfc5424
 */
export interface Logger {
  // (message: string, ...meta: any[]): Logger;
  // (message: any): Logger;

  //0 - Emergency: system is unusable. The application is in an emergency state.
  emerg: LeveledLogMethod;

  //1- Alert: action must be taken immediately. The application owners need to be alerted.
  alert: LeveledLogMethod;

  //2- Critical: critical conditions. The application is in a critical state
  crit: LeveledLogMethod;

  //3- Error: error conditions. A serious problem occurred while processing the current operation.
  // Such a message usually requires the user to interact with the application or research the problem in order to find the cause and resolve it.
  //(Tip: exceptions are usually reported as errors because they usually have a similar meaning.)
  error: LeveledLogMethod;

  //4- Warning: warning conditions. Such messages are reported when something unusual happened that isn’t critical to process the current operation (and the application in general),
  // but would be useful to review to decide if it should be resolved.
  // (Tip: this level is usually selected as active for applications in production.)
  warning: LeveledLogMethod;

  //5- Notice: normal but significant condition. Notice messages are usually used for developers to notice application state.
  notice: LeveledLogMethod;

  //6- Informational: informational message. Informative messages are usually used for reporting significant application progress and stages.
  // Informative messages should not be reported too frequently because they can quickly become “noise.”
  info: LeveledLogMethod;

  //7- Debug: debug-level messages. used for debugging messages with extended information about application processing.
  // Such messages usually report calls of important functions along with results they return and values of specific variables, or parameters.
  debug: LeveledLogMethod;

  //8- this level is most informative (and usually even excessive). Trace messages report most application actions or events and are mostly used to follow application logic in full detail.
  // trace: LeveledLogMethod;
}
