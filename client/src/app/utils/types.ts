export interface Category {
  id: string;
}

export interface Order {
  id: string;
}

export interface ProductType {
  category: Category;
  order: Order[];
  colors: string[];
  createdAt: string;
  description: string[];
  discountprice: number;
  id: string;
  images: string[];
  titleprice: number;
  title: string;
  updatedAt: string;
  variants: string[];
  suscore: number;
  carbonfootprint: number;
}
