import { inspect } from "../inspect.js";
import type { GrafastResultsList, GrafastValuesList } from "../interfaces.js";
import { UnbatchedExecutableStep } from "../step.js";
import { arrayOfLength } from "../utils.js";

export class ErrorStep<
  TError extends Error,
> extends UnbatchedExecutableStep<never> {
  static $$export = {
    moduleName: "grafast",
    exportName: "ErrorStep",
  };
  isSyncAndSafe = false;
  error: TError;
  constructor(error: TError) {
    super();
    if (!(error instanceof Error)) {
      throw new Error(`${this} called with non-Error ${inspect(error)}`);
    }
    this.error = error;
  }

  execute(values: GrafastValuesList<any>): GrafastResultsList<any> {
    return arrayOfLength(values[0].length, this.error);
  }
  unbatchedExecute(): any {
    return this.error;
  }
}

export function error<TError extends Error>(error: TError): ErrorStep<TError> {
  return new ErrorStep(error);
}
