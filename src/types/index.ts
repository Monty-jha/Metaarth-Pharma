export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}