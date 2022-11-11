import { NewProductDto, Product } from "../models/models";

const request = (
  path: RequestInfo,
  options: RequestInit | undefined = undefined
) => {
  return async () => {
    const response = await fetch(`https://localhost:7011/api/${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    if (response.status === 204) {
      return;
    }

    return response.json();
  };
};

export const storeApi = {
  getAllProducts: request('Product'),
  getProductById: (id: string) => request(`Product/${id}`),
  deleteProduct: (id: string) => request(`Product/${id}`, {
      method: 'DELETE',
    },
  ),
  editProduct: (productDto: Product) =>
    request(`Product/${productDto.id}`, {
      method: 'PUT',
      body: JSON.stringify(productDto), 
    }),
  newProduct: (newProductDto: NewProductDto) => 
    request('Product', {
      method: 'POST',
      body: JSON.stringify(newProductDto),
    }),
};