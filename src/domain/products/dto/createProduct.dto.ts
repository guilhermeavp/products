import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  id_company: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  minCart?: number;

  @IsOptional()
  @IsNumber()
  maxCart?: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsNumber()
  promotionalValue: number;

  @IsOptional()
  @IsBoolean()
  isPromotion: boolean;

  @IsOptional()
  @IsBoolean()
  avaliable: boolean;
}
