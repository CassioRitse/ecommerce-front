import { UUID } from "crypto";

export interface Product {
  id: UUID;
  qnt: number;
  flag?: string;
  name: string;
  price: number;
}
