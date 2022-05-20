import { useState } from 'react';
import { cepApi } from '../api/cep.api';
import { User } from '../models/models';
import { useQuery } from 'react-query';

export const UseGetAllUsers = () => {
  const {
    data: users,
    isSuccess: isGetUsersSuccess,
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
  } = useQuery<User[]>('users', cepApi.getAllUsers());

  return {
    users,
    isGetUsersSuccess,
    isGetUsersLoading,
    isGetUsersError,
  };
};
