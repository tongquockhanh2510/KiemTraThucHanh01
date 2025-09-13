export type Product = {
  id: number;
  name: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: "Áo thun", price: 150000 },
  { id: 2, name: "Quần jean", price: 300000 },
  { id: 3, name: "Giày thể thao", price: 500000 },
];