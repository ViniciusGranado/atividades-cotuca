import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/models";

import './Admin.css';

export const Admin: React.FC<{ products: Product[] }> = ({ products }) => {
  const navigate = useNavigate();

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