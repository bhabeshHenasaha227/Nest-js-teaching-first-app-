import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  data: unknown[] = [];

  constructor(private productsService: ProductsService) {
    this.data = this.productsService.getProducts();
  }

  @Get()
  getProducts() {
    return this.data;
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    if (id) {
      return this.productsService.getProductByid(Number(id));
    } else {
      throw new BadRequestException('id does not exist');
    }
  }
}
