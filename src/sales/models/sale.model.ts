export interface SaleDetail {
  id: number;
  sale_id: number;
  amount: number;
  subtotal: number;
  product_id: number;
}

export interface Sale {
  id: number;
  total: number;
  user_id: number;
  client_id: number;
  details: SaleDetail[];
}
