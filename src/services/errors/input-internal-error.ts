import { InternalError } from '../../commons/errors/internal-error'

export class InputInternalError extends InternalError {
  constructor (message: string) {
    super(`Unexpected error while processing calculations: ${message}`)
  }
}
