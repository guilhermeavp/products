import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePriceDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsNumber()
  promotionalValue: number;
}
