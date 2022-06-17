import { useState } from 'react';
import { cepApi } from '../api/cep.api';
import { User } from '../models/models';
import { useMutation } from 'react-query';

const initialUserDto: User = {
  id: '',
  name: '',
  age: '',
  cep: '',
  number: '',
}

export const UseDeleteUserHook = () => {
  const [userDto, setUserDto] = useState(initialUserDto);

  const {
    mutate: deleteUser,
    isSuccess: isDeleteUserSuccess,
    isLoading: isDeleteUserLoading,
    isError: isDeleteUserError,
  } = useMutation<User>(cepApi.deleteUser(userDto));

  return {
    deleteUser,
    isDeleteUserSuccess,
    isDeleteUserLoading,
    isDeleteUserError,
    setUserDto,
    userDto,
  };
};