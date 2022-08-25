import { Product, Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';

export class ProductEntity implements Product {
  id: string;
  createdAt: Date;
  name: string;
  description: string;

  @Transform(({ value }) => value.toNumber)
  price: Prisma.Decimal;

  sku: string;
  published: boolean;

  updatedAt: any;

  constructor(partial: Partial<ProductEntity>) {
    Object.assign(this, partial);
  }

  // short for 👇
  // this.id = partial.id;
  // this.createdAt = partial.createdAt;
  // this.updatedAt = partial.updatedAt;
  // this.name = partial.name;
  // this.description = partial.description;
  // this.price = partial.price;
  // this.sku = partial.sku;
  // this.published = partial.published;
}
