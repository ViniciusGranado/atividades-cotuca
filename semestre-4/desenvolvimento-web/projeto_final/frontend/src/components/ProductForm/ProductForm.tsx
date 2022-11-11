import { FormGroup, TextField, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NewProductDto, Product } from "../../models/models";

import './ProductForm.css';

interface ProductFormProps {
  product: Product | NewProductDto,
  setProductDto: Dispatch<SetStateAction<Product>>,
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, setProductDto }) => {
  return (
    <FormGroup className="ProductForm">
      <TextField
        name="name"
        label="Nome do produto"
        defaultValue={product.name}
        onChange={(event) => {
          setProductDto((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));
        }}
      />
      <TextField
        name="description"
        label="Descrição do produto"
        multiline
        rows={4}
        defaultValue={product.description}
        onChange={(event) => {
          setProductDto((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));
        }}
      />
      <TextField
        name="imgUrl"
        label="URL da imagem"
        defaultValue={product.imgUrl}
        onChange={(event) => {
          setProductDto((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));
        }}
      ></TextField>
      <TextField
        name="price"
        label="Preço"
        defaultValue={product.price}
        onChange={(event) => {
          setProductDto((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
          }));
        }}
      />
    </FormGroup>
  );
};
