import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/mongodb/database.module';
import { productsProviders } from 'src/providers/mongodb/product.providers';
import { PriceController } from './controllers/price.controller';
import { PriceService } from './services/price.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PriceController],
  providers: [PriceService, ...productsProviders],
})
export class PriceModule {}
