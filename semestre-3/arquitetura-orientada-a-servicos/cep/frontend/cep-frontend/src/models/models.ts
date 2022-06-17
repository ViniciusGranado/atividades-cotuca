export interface NewUserDto {
  [name: string]: string;
  age: string;
  cep: string;
  number: string;
}

export interface User {
  [id: string]: string;
  name: string;
  age: string;
  cep: string;
  number: string;
}

export interface Address {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface UserAddress {
  user: User,
  adress: Address;
};
