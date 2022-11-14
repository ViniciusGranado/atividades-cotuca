import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useGetAllProductsHook } from "../../hooks/useGetAllProductsHook";

import './Home.css';

export const Home = () => {
  const { isProductsLoading, products } = useGetAllProductsHook();

  if (isProductsLoading) {
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
    <Box className="Home">
      {products.slice(0, 6).map((product) => (
        <Card sx={{ width: 200 }} key={product.id}>
          <CardMedia
            component="img"
            height="100"
            image={product.imgUrl}
            alt={product.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
          </CardContent>

          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body2" fontSize="1.5rem" fontWeight="500">
              R${product.price}
            </Typography>
            <Button size="small" variant="contained">
              Comprar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
