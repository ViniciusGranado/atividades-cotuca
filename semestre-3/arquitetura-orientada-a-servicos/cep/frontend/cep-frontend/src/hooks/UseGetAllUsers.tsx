import { cepApi } from '../api/cep.api';
import { User } from '../models/models';
import { useQuery } from 'react-query';

export const UseGetAllUsers = () => {
  const {
    data: users,
    isSuccess: isGetUsersSuccess,
    isLoading: isGetUsersLoading,
    isError: isGetUsersError,
    refetch: refetchGetUsers,
  } = useQuery<User[]>('users', cepApi.getAllUsers());

  return {
    users,
    isGetUsersSuccess,
    isGetUsersLoading,
    isGetUsersError,
    refetchGetUsers,
  };
};
