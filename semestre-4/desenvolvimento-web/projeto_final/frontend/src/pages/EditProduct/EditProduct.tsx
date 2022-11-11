import { Box, CircularProgress, FormGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";

import './EditProduct.css';

export const EditProduct = () => {
    const { productId } = useParams();
    const [enabledQuery, setEnabledQuery] = useState(false);

    const { isProductLoading, isProductSuccess, product } = useGetProductById(productId ?? '', enabledQuery);

    useEffect(() => {
        if (productId) {
            setEnabledQuery(true);
        }
    }, [productId]);

    if (isProductLoading) {
      return (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      );
    }
  
    if (product === undefined) {
      return <Typography>Error while loading</Typography>;
    }

    if (isProductSuccess) {
        return (
            <FormGroup className='EditProduct'>
                <TextField label="Nome do produto" defaultValue={product.name} />
                <TextField
                    label="Descrição do produto"
                    multiline
                    rows={4}
                    defaultValue={product.description}
                />
                <TextField label='URL da imagem' defaultValue={product.imgUrl}></TextField>
                <TextField label='Preço' defaultValue={product.price} />
            </FormGroup>
        );
    }

    return null;
}