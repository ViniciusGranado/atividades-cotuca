import { LoginDto, NewProductDto, Product } from "../models/models";

const request = (
  path: RequestInfo,
  options: RequestInit | undefined = undefined,
  headers: HeadersInit | undefined = undefined,
) => {
  return async () => {
    const response = await fetch(`https://localhost:7011/api/${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...headers },
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
  getAllProducts: request('product'),
  getProductById: (id: string) => request(`product/${id}`),
  deleteProduct: (id: string) => request(`product/${id}`, {
      method: 'DELETE',
    },
  ),
  editProduct: (productDto: Product, authorizationToken: string | undefined) =>
    request(`product/${productDto.id}`, {
      method: 'PUT',
      body: JSON.stringify(productDto),
    }, {
      'Authorization': authorizationToken || '',
    }),
  newProduct: (newProductDto: NewProductDto) => 
    request('product', {
      method: 'POST',
      body: JSON.stringify(newProductDto),
    }),
  login: (loginDto: LoginDto) =>
    request('user/login', {
      method: 'POST',
      body: JSON.stringify(loginDto),
    })
};