import { useState } from 'react';
import { cepApi } from '../api/cep.api';
import { NewUserDto, User } from '../models/models';
import { useMutation } from 'react-query';

const initialNewUserDto: NewUserDto = {
  name: '',
  age: '',
  cep: '',
  number: '',
}

export const UseInsertUserHook = () => {
  const [newUserDto, setNewUserDto] = useState(initialNewUserDto);

  const {
    mutate: createUser,
    isSuccess: isCreateUserSuccess,
    isLoading: isCreateUserLoading,
    isError: isCreateUserError,
  } = useMutation<User>(cepApi.newUser(newUserDto));

  return {
    createUser,
    isCreateUserSuccess,
    isCreateUserLoading,
    isCreateUserError,
    setNewUserDto,
    newUserDto,
  };
};