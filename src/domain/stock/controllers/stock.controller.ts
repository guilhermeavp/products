import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateStockDto } from '../dto/updateStock.dto';
import { ListStockDto } from '../dto/listStock.dto';
import { StockService } from '../services/stock.service';

@Controller()
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('/stock/')
  getAllProducts(@Body() listStockDto: ListStockDto): any {
    return this.stockService.find(listStockDto);
  }

  @Get('/stock/:id')
  getProductForId(@Param('id') id: string): any {
    return this.stockService.findByID(id);
  }

  @Put('/stock/')
  updateProduct(@Body() updateStockDto: UpdateStockDto): any {
    return this.stockService.update(updateStockDto);
  }
}
