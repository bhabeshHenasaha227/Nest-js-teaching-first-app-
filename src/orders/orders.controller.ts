import { Controller, Get, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('page') page: string, @Query('limit') limit: string) {
    return {
      page: page,
      limit: limit,
    };
  }
}
