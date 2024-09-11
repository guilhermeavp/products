import { OmitType } from '@nestjs/mapped-types';
import { CreateProductDto } from './createProduct.dto';

export class UpdateProductDto extends OmitType(CreateProductDto, [
  'id_company',
  'quantity',
] as const) {}
