import { Model } from 'mongoose';
import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Product } from '../interfaces/stock.interface';
import { ListStockDto } from '../dto/listStock.dto';
import { UpdateStockDto } from '../dto/updateStock.dto';
import { CustomException } from 'src/http/http.provider';

@Injectable()
export class StockService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async find(listStockDto: ListStockDto): Promise<Product[]> {
    return this.productModel.find(listStockDto).exec();
  }

  async findByID(id: string): Promise<any> {
    try {
      const result = (await this.productModel.find({ _id: id }).exec()).map(
        (i) => {
          return {
            quantity: i.quantity,
          };
        },
      );
      return result[0];
    } catch {
      throw 'Não foi encontrado resultados';
    }
  }

  async update(updateStockDto: UpdateStockDto): Promise<any> {
    try {
      const { id, quantity } = updateStockDto;
      const find = await this.productModel.find({ _id: id }).exec();
      if (find[0]?.maxCart > quantity) {
        throw new HttpException(
          'A quantidade maxima do carrinha é maior que a quantidade atual',
          HttpStatus.NOT_FOUND,
        );
      }
      const result = await this.productModel.findOneAndUpdate(
        { _id: id },
        { quantity: quantity },
        { new: true },
      );
      return {
        quantity: result.quantity,
      };
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
