import { Box, Button, CircularProgress, FormGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEditProductHook } from "../../hooks/useEditProductHook";
import { useGetProductById } from "../../hooks/useGetProductById";

import './EditProduct.css';

export const EditProduct = () => {
    const { productId } = useParams();
    const [enabledQuery, setEnabledQuery] = useState(false);
    
    const { isProductLoading, isProductSuccess, product } = useGetProductById(productId ?? '', enabledQuery);
    const {
        editProduct,
        isEditProductSuccess,
        isEditProductLoading,
        isEditProductError,
        setProductDto,
        productDto,
    } = useEditProductHook();

    useEffect(() => {
        if (productId) {
            setEnabledQuery(true);
        };
    }, [productId]);

    useEffect(() => {
        if (isProductSuccess && product) {
            setProductDto(product);
        };
    }, [product]);

    if (isProductLoading || isEditProductLoading) {
      return (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      );
    }
  
    if (product === undefined || isEditProductError) {
      return <Typography>Error while loading</Typography>;
    }

    if (isProductSuccess) {
        return (
            <FormGroup className='EditProduct'>
                <TextField
                    name='name'
                    label="Nome do produto"
                    defaultValue={product.name}
                    onChange={(event) => {
                        setProductDto((prev) => ({
                            ...prev,
                            [event.target.name]: event.target.value,
                        }))
                    }}
                />
                <TextField
                    name='description'
                    label="Descrição do produto"
                    multiline
                    rows={4}
                    defaultValue={product.description}
                    onChange={(event) => {
                        setProductDto((prev) => ({
                            ...prev,
                            [event.target.name]: event.target.value,
                        }))
                    }}
                />
                <TextField
                    name='imgUrl'
                    label='URL da imagem'
                    defaultValue={product.imgUrl}
                    onChange={(event) => {
                        setProductDto((prev) => ({
                            ...prev,
                            [event.target.name]: event.target.value,
                        }))
                    }}
                ></TextField>
                <TextField
                    name='price'
                    label='Preço'
                    defaultValue={product.price}
                    onChange={(event) => {
                        setProductDto((prev) => ({
                            ...prev,
                            [event.target.name]: event.target.value,
                        }))
                    }}
                />

                <Button
                    variant="contained"
                    onClick={() => editProduct()}
                >
                    Salvar
                </Button>
            </FormGroup>
        );
    }

    return null;
}