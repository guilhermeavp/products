import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/mongodb/database.module';
import { ProductController } from './controllers/product.controller';
import { ProductsService } from './services/products.service';
import { productsProviders } from 'src/providers/mongodb/product.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductsService, ...productsProviders],
})
export class ProductModule {}
