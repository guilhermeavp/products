import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateStockDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNumber()
  @IsPositive()
  quantity?: number;
}
