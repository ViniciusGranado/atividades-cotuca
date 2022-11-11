import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { storeApi } from "../api/store.api";

export const useDeleteProductHook = () => {
  const [deletedId, setDeletedId] = useState('');
  const queryClient = useQueryClient();
  
  const {
    mutate,
    isSuccess: isDeleteProductSuccess,
    isLoading: isDeleteProductLoading,
    isError: isDeleteProductError,
  } = useMutation(storeApi.deleteProduct(deletedId), 
    {
      onSuccess: () => queryClient.invalidateQueries('products'),
    }
  );

  useEffect(() => {
    if (deletedId) {
      mutate();
    }
  }, [deletedId, mutate]);

  const deleteProduct = (productId: string) => {
    setDeletedId(productId);
  }

  return {
    isDeleteProductSuccess,
    isDeleteProductError,
    isDeleteProductLoading,
    deleteProduct,
  }
}