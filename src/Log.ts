export const enum LogLevel {
  Info, Warn,
  Debug, Error
}

export class Logger {
  logLevel: LogLevel
  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel
  }
}

