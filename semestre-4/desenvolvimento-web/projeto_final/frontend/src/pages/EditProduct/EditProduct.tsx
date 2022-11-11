import {
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { useEditProductHook } from "../../hooks/useEditProductHook";
import { useGetProductById } from "../../hooks/useGetProductById";

export const EditProduct = () => {
  const { productId } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);

  const { isProductLoading, isProductSuccess, product } = useGetProductById(
    productId ?? "",
    enabledQuery
  );
  const {
    editProduct,
    isEditProductLoading,
    isEditProductError,
    setProductDto,
  } = useEditProductHook();

  useEffect(() => {
    if (productId) {
      setEnabledQuery(true);
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      setProductDto(product);
    }
  }, [product]);

  if (isProductLoading || isEditProductLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (product === undefined || isEditProductError) {
    return <Typography>Error while loading</Typography>;
  }

  if (isProductSuccess) {
    return (
      <>
        <ProductForm product={product} setProductDto={setProductDto} />
        <Button variant="contained" onClick={() => editProduct()} sx={{ marginLeft: '50%', transform: 'translate(-50%)' }}>
          Salvar
        </Button>
      </>
    );
  }

  return null;
};
