import { NewUserDto } from '../models/models';

const request = (
  path: RequestInfo,
  options: RequestInit | undefined = undefined
) => {
  return async () => {
    const response = await fetch(`http://localhost:8080/${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  };
};

export const cepApi = {
  getAllUsers: () => request(`users`),
  getUser: (id: string) => request(`users/${id}`),
  newUser: (newUserDto: NewUserDto) =>
  request('users', {
    method: 'POST',
    body: JSON.stringify(newUserDto),
  }),
}