import { NewProductDto } from "../models/models";

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

    return response.json();
  };
};

export const storeApi = {
  getAllProducts: request('Product'),
  getProductById: (id: string) => request(`Product/${id}`),
  insertProduct: (newProductDto: NewProductDto) =>
    request('products', {
      method: 'POST',
      body: JSON.stringify(newProductDto), 
    }),
};