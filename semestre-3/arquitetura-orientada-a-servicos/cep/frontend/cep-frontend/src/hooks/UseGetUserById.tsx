import { useEffect, useState } from 'react';
import { cepApi } from '../api/cep.api';
import { UserAddress } from '../models/models';
import { useQuery } from 'react-query';

export const UseGetUserById = () => {
  const [selectedId, setSelectedId] = useState(0);

  const {
    data: user,
    isSuccess: isGetUserSuccess,
    isLoading: isGetUserLoading,
    isError: isGetUserError,
    refetch,
  } = useQuery<UserAddress>('user', cepApi.getUser(selectedId.toString()), {enabled: selectedId !== 0});
  
  useEffect(() => {
    if (selectedId !== 0) {
      refetch();
    }
  }, [selectedId, refetch]);

  return {
    user,
    selectedId,
    setSelectedId,
    isGetUserSuccess,
    isGetUserLoading,
    isGetUserError,
  };
};