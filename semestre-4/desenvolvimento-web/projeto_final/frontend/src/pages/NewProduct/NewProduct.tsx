import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { useCreateProductHook } from "../../hooks/useCreateProductHook";

import "./NewProduct.css";

export const NewProduct = () => {
  const {
    newProductDto,
    setNewProductDto,
    saveNewProduct,
    isSaveNewProductLoading,
  } = useCreateProductHook();

  if (isSaveNewProductLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="NewProduct">
      <Typography component="h1" variant="h3" sx={{ opacity: "0.7" }}>
        Novo Produto
      </Typography>
      <ProductForm product={newProductDto} setProductDto={setNewProductDto} />
      <Button variant="contained" onClick={() => saveNewProduct()}>
        Salvar
      </Button>
    </Box>
  );
};
