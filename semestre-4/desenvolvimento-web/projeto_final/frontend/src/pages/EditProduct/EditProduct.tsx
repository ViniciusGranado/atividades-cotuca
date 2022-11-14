import {
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DialogModal, DialogModalProps } from "../../components/DialogModal/DialogModal";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { useEditProductHook } from "../../hooks/useEditProductHook";
import { useGetProductById } from "../../hooks/useGetProductById";

export const EditProduct = () => {
  const { productId } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);
  const [dialogModalConfig, setDialogModalConfig] = useState<DialogModalProps>({
    isDialogOpen: false,
    title: '',
    severity: 'success',
    message: '',
    onClickButtonAction: () => {},
  });

  const { isProductLoading, isProductSuccess, product } = useGetProductById(
    productId ?? "",
    enabledQuery
  );
  const {
    editProduct,
    isEditProductSuccess,
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
  }, [product, setProductDto]);

  useEffect(() => {
    if (isEditProductSuccess) {
      setDialogModalConfig({
        isDialogOpen: true,
        title: 'Sucesso',
        message: 'Produto editado com sucesso!',
        severity: 'success',
        onClickButtonAction: closeDialogHandler,
      });
    }
  }, [isEditProductSuccess]);

  useEffect(() => {
    if (isEditProductError) {
      setDialogModalConfig({
        isDialogOpen: true,
        title: 'Erro',
        message: 'Ocorreu um erro ao editar o produto!',
        severity: 'error',
        onClickButtonAction: closeDialogHandler,
      });
    }
  }, [isEditProductError]);

  const closeDialogHandler = () => {
    setDialogModalConfig((prev) => ({
      ...prev,
      isDialogOpen: false,
    }));
  }

  if (isProductLoading || isEditProductLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (product === undefined) {
    return <Typography>Error while loading</Typography>;
  }

  if (isProductSuccess) {
    return (
      <>
        <ProductForm product={product} setProductDto={setProductDto} />
        <Button
          variant="contained"
          onClick={() => editProduct()}
          sx={{ marginLeft: "50%", transform: "translate(-50%)" }}
        >
          Salvar
        </Button>
        <DialogModal {...dialogModalConfig} />
      </>
    );
  }

  return null;
};
