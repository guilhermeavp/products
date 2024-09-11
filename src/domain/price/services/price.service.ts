import { Model } from 'mongoose';
import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Product } from 'src/domain/products/interfaces/product.interface';
import { PromotionDto } from '../dto/promotion.dto';
import { UpdatePriceDto } from '../dto/updatePrice.dto';
import { CustomException } from 'src/http/http.provider';

@Injectable()
export class PriceService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async updatePrice(updatePriceDto: UpdatePriceDto): Promise<any> {
    try {
      const { id, value, promotionalValue } = updatePriceDto;
      const newValue = {
        value: value,
        promotionalValue: promotionalValue,
      };
      await this.productModel.findOneAndUpdate({ _id: id }, newValue, {
        new: true,
      });
      return 'Atualizado com sucesso';
    } catch (err) {
      if (err.response) {
        throw new CustomException(err.response, err.status);
      } else {
        throw new CustomException(
          'Não foi encontrado resultados',
          HttpStatus.NOT_FOUND,
        );
      }
    }
  }

  async promotion(promotionDto: PromotionDto): Promise<any> {
    try {
      const { id, isPromotion } = promotionDto;
      await this.productModel.findOneAndUpdate(
        { _id: id },
        { isPromotion: isPromotion },
        { new: true },
      );
      return 'Atualizado com sucesso';
    } catch (err) {
      if (err.response) {
        throw new CustomException(err.response, err.status);
      } else {
        throw new CustomException(
          'Não foi encontrado resultados',
          HttpStatus.NOT_FOUND,
        );
      }
    }
  }
}
