import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/createProduct.dto';
import { UpdateProductDto } from '../dto/updateProduct.dto';
import { ProductsService } from '../services/products.service';
import { ListProductDto } from '../dto/listProduct.dto';

@Controller()
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('')
  createProduct(@Body() createProductDto: CreateProductDto): any {
    console.log('createProductDto', createProductDto);
    return this.productsService.create(createProductDto);
  }

  @Get('')
  getAllProducts(@Body() listProductDto: ListProductDto): any {
    return this.productsService.findAll(listProductDto);
  }

  @Get(':id')
  getProductForId(@Param('id') id: string): any {
    return this.productsService.findByID(id);
  }

  @Put('')
  updateProduct(@Body() updateProductDto: UpdateProductDto): any {
    return this.productsService.update(updateProductDto);
  }

  @Delete(':id')
  find(@Param('id') id: string): any {
    return this.productsService.delete(id);
  }
}
