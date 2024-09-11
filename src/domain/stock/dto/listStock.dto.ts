import { IsNotEmpty, IsString } from 'class-validator';

export class ListStockDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  category?: number;

  @IsString()
  company?: string;
}
