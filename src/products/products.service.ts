import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      productName: 'Laptop',
      price: 999,
      inStock: true,
    },
    {
      id: 2,
      productName: 'Iphone',
      price: 999,
      inStock: true,
    },
    {
      id: 3,
      productName: 'Samsung',
      price: 999,
      inStock: true,
    },
  ];
  getProducts() {
    return this.products;
  }

  getProductByid(id: number) {
    const product = this.products.find((prod) => prod.id === id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }
}
