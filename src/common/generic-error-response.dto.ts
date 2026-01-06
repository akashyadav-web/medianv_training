import { ApiProperty } from '@nestjs/swagger';

export class GenericErrorResponseDto {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Error message' })
  message: string;

  @ApiProperty({ example: 'Bad Request' })
  error: string;
}
