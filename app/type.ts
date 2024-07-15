export type Product = {
  image: string;
  title: string;
  price: number;
  price_sale: number;
  cent_sale: number;
  star: number;
  comments: number;
};

export type CartItem = {
  img: string;
  date: string;
  title: string;
  description: string;
};

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};
