import { Model } from 'mongoose';
import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { CreateProductDto } from '../dto/createProduct.dto';
import { UpdateProductDto } from '../dto/updateProduct.dto';
import { ListProductDto } from '../dto/listProduct.dto';
import { CustomException } from 'src/http/http.provider';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async create(createCatDto: CreateProductDto): Promise<Product> {
    const result = await new this.productModel(createCatDto).save();
    return result.id;
  }

  async findAll(listProductDto: ListProductDto): Promise<Product[]> {
    try {
      return this.productModel.find(listProductDto).exec();
    } catch {
      throw 'Não foi encontrado resultados';
    }
  }

  async findByID(id: string): Promise<Product> {
    try {
      const result = await this.productModel.find({ _id: id }).exec();
      if (!result.length) {
        throw new CustomException(
          'Não foi encontrado resultados',
          HttpStatus.NOT_FOUND,
        );
      }
      return result[0];
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

  async delete(id: string): Promise<any> {
    try {
      await this.productModel.findByIdAndDelete({ _id: id });
      return 'Deletado com sucesso';
    } catch {
      throw 'Não foi encontrado resultados';
    }
  }

  async update(updateProductDto: UpdateProductDto): Promise<Product> {
    const createdCat = new this.productModel(updateProductDto);
    return createdCat.save();
  }
}
