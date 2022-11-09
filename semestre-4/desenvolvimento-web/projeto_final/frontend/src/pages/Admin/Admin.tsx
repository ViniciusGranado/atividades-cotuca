import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsHook } from "../../hooks/useGetAllProductsHook";
import { Product } from "../../models/models";

import './Admin.css';

export const Admin = () => {
  const navigate = useNavigate();
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
    <Box className='Admin'>
    {products.map((product) => (
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
            }}>
              Editar
            </Button>
        </CardActions>
      </Card>
    ))}
  </Box>
  );
}