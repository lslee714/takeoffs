export interface IMaterialCategory {
  id: number;
  name: string;
}

export interface IMaterialProduct {
  id: number;
  name: string;
  storeUrl: string;
  imageUrl: string;
  price: number;
  currency: string;
}
