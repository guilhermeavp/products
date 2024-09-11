import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/mongodb/database.module';

import { productsProviders } from 'src/providers/mongodb/product.providers';
import { StockController } from './controllers/stock.controller';
import { StockService } from './services/stock.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StockController],
  providers: [StockService, ...productsProviders],
})
export class StockModule {}
