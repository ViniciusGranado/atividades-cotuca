import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress } from "@mui/material";
import { useGetAllProductsHook } from "../../hooks/useGetAllProductsHook";

import './Products.css';

export const Products = () => {
  const { isProductsLoading, products } = useGetAllProductsHook();

  if (isProductsLoading) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress />
      </Box>
    );
  }

  if (products === undefined) {
    return <Typography>Error while loading</Typography>;
  }

  return (
    <Box className='Products'>
      {products.map((product) => (
        <Card sx={{ width: 345 }}>
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

            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" fontSize='2rem' fontWeight='500'>
              R${product.price}
            </Typography>
            <Button size="small" variant="contained">Comprar</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
