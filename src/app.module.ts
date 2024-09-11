import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConsulModule } from './providers/consul/consul.module';
import { ProductModule } from './domain/products/product.module';
import { PriceModule } from './domain/price/price.module';
import { StockModule } from './domain/stock/stock.module';

@Module({
  imports: [
    ProductModule,
    PriceModule,
    StockModule,
    ConsulModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
