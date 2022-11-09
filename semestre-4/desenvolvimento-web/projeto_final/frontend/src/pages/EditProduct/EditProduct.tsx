import { FormGroup, TextField } from "@mui/material";
import { Product } from "../../models/models";

const product: Product = {
    id: 1,
    name: 'Name',
    description: 'Description',
    imgUrl: 'www.google.com',
    price: 9.99,
}

export const EditProduct = () => {
    return (
        <FormGroup>
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