import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { storeApi } from "../api/store.api";
import { Product } from "../models/models";

const initialNewProductDto: Product = {
  id: 0,
  name: '',
  description: '',
  imgUrl: '',
  price: 0,
};

export const useEditProductHook = () => {
  const [productDto, setProductDto] = useState(initialNewProductDto);
  const queryClient = useQueryClient();

  const {
    mutate: editProduct,
    isSuccess: isEditProductSuccess,
    isLoading: isEditProductLoading,
    isError: isEditProductError,
  } = useMutation<Product>(storeApi.editProduct(productDto), {onSuccess: () => queryClient.invalidateQueries('productById')});

  return {
    editProduct,
    isEditProductSuccess,
    isEditProductLoading,
    isEditProductError,
    setProductDto,
    productDto,
  };
};