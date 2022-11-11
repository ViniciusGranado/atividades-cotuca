import { useQuery } from "react-query";
import { storeApi } from "../api/store.api";
import { Product } from "../models/models";

export const useGetProductById = (productId: string, enabled: boolean) => {
  const { data: product, isLoading: isProductLoading, isSuccess: isProductSuccess } = useQuery<Product>(
    'productById',
    storeApi.getProductById(productId),
    { enabled }
  );

  return {
    product,
    isProductLoading,
    isProductSuccess,
  };
};