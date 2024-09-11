import { Category } from './category.interface';

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly minCart: number;
  readonly maxCart?: number;
  readonly description: string;
  readonly category: Category;
}
