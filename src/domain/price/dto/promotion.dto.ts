import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class PromotionDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsBoolean()
  isPromotion: boolean;
}
