import { IsOptional, IsString } from 'class-validator';

export class ListProductDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsOptional()
  @IsString()
  category?: number;

  @IsOptional()
  @IsString()
  id_company?: string;
}
