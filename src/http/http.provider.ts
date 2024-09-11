import { HttpException } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(response: string, statusCode: number) {
    super(response, statusCode);
  }
}
