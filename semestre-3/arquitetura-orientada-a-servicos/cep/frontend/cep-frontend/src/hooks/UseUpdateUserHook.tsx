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

export const UseUpdateUserHook = () => {
  const [updateUserDto, setUpdateUserDto] = useState(initialUserDto);

  const {
    mutate: updateUser,
    isSuccess: isUpdateUserSuccess,
    isLoading: isUpdateUserLoading,
    isError: isUpdateUserError,
  } = useMutation<User>(cepApi.updateUser(updateUserDto));

  return {
    updateUser,
    isUpdateUserSuccess,
    isUpdateUserLoading,
    isUpdateUserError,
    setUpdateUserDto,
    updateUserDto,
  };
};