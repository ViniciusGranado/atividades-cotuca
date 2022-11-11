import { useState } from "react";
import { useMutation } from "react-query";
import { storeApi } from "../api/store.api";
import { NewProductDto, Product } from "../models/models";

const initialNewProductDto: Product = {
  id: 0,
  description: "",
  imgUrl: "",
  name: "",
  price: 0,
};

export const useCreateProductHook = () => {
  const [newProductDto, setNewProductDto] = useState(initialNewProductDto);

  const {
    mutate: saveNewProduct,
    isSuccess: isSaveNewProductSuccess,
    isLoading: isSaveNewProductLoading,
    isError: isSaveNewProductError,
  } = useMutation<NewProductDto>(storeApi.newProduct({
    description: newProductDto.description,
    imgUrl: newProductDto.imgUrl,
    name: newProductDto.name,
    price: newProductDto.price,
  }))

  return {
    newProductDto,
    setNewProductDto,
    saveNewProduct,
    isSaveNewProductSuccess,
    isSaveNewProductError,
    isSaveNewProductLoading,
  }
}