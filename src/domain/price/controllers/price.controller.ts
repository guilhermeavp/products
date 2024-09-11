import { Body, Controller, Post, Put } from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { PromotionDto } from '../dto/promotion.dto';
import { UpdatePriceDto } from '../dto/updatePrice.dto';

@Controller()
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Put('/price/')
  updatePrice(@Body() updatePriceDto: UpdatePriceDto): any {
    return this.priceService.updatePrice(updatePriceDto);
  }

  @Post('/price/')
  promotion(@Body() promotionDto: PromotionDto): any {
    return this.priceService.promotion(promotionDto);
  }
}
