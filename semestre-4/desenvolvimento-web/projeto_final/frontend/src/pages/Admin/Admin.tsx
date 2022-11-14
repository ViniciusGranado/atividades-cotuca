import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DialogModal,
  DialogModalProps,
} from "../../components/DialogModal/DialogModal";
import { useDeleteProductHook } from "../../hooks/useDeleteProductHook";
import { useGetAllProductsHook } from "../../hooks/useGetAllProductsHook";
import { getCurrentUser } from "../../utils/getCurrentUser";

import "./Admin.css";

export const Admin = () => {
  const navigate = useNavigate();
  const { isProductsLoading, products } = useGetAllProductsHook();
  const {
    deleteProduct,
    isDeleteProductLoading,
    isDeleteProductSuccess,
    isDeleteProductError,
  } = useDeleteProductHook();
  const user = getCurrentUser();
  const [dialogModalConfig, setDialogModalConfig] = useState<DialogModalProps>({
    isDialogOpen: false,
    title: "",
    severity: "success",
    message: "",
    onClickButtonAction: () => {},
  });

  useEffect(() => {
    if (isDeleteProductSuccess) {
      setDialogModalConfig({
        isDialogOpen: true,
        title: "Sucesso",
        message: "Produto deletado com sucesso!",
        severity: "success",
        onClickButtonAction: closeDialogHandler,
      });
    }
  }, [isDeleteProductSuccess]);

  useEffect(() => {
    if (isDeleteProductError) {
      setDialogModalConfig({
        isDialogOpen: true,
        title: "Erro",
        message: "Ocorreu um erro ao deletar o produto!",
        severity: "error",
        onClickButtonAction: closeDialogHandler,
      });
    }
  }, [isDeleteProductError]);

  const closeDialogHandler = () => {
    setDialogModalConfig((prev) => ({
      ...prev,
      isDialogOpen: false,
    }));
  };

  if (isProductsLoading || isDeleteProductLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (products === undefined) {
    return <Typography>Error while loading</Typography>;
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{ marginLeft: "83%" }}
        onClick={() => navigate("new-product")}
      >
        Novo produto
      </Button>
      <Box className="Admin">
        {products.map((product) => {
          if (
            user?.user.role === "administrator" ||
            (user?.user.role === "seller" &&
              product.userId === Number(user.user.id))
          ) {
            return (
              <Card sx={{ width: 150 }} key={product.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imgUrl}
                  alt={product.name}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(String(product.id));
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteProduct(String(product.id));
                    }}
                  >
                    Deletar
                  </Button>
                </CardActions>
              </Card>
            );
          }

          return null;
        })}
      </Box>
      <DialogModal {...dialogModalConfig} />
    </>
  );
};
