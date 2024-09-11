export interface Product {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly value: number;
  readonly promotionalValue: number;
  readonly isPromotion: boolean;
  readonly minCart: number;
  readonly maxCart?: number;
  readonly description: string;
  readonly category: string;
  readonly avaliable: boolean;
}
