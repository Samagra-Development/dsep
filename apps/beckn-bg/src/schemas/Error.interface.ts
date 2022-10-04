import { ErrorType } from './types/error.enum';

export default interface ErrorInterface {
  type: ErrorType;
  code: string;
  path?: string;
  message?: string; // Human readable message
}
