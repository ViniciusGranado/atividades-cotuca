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
}