import { SxProps } from "@mui/material";

export interface TabItem {
  label: string;
  url: string;
  style?: SxProps
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  userId: number;
}

export type NewProductDto = Omit<Product, 'id'>;

export interface LoginDto {
  username: string,
  password: string,
}

interface User {
  id: string,
  username: string,
  role: string,
}

export interface LoginResponse {
  token: string,
  user: User,
}