export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export type ProductId = { productsIds: string };
