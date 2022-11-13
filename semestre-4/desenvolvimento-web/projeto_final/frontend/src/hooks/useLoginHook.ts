import { useState } from "react";
import { useMutation } from "react-query";
import { storeApi } from "../api/store.api";
import { LoginDto } from "../models/models";

const initialLoginDto: LoginDto = {
  username: '',
  password: '',
};

export const useEditProductHook = () => {
  const [loginDto, setLoginDto] = useState(initialLoginDto);

  const {
    mutate: login,
    isSuccess: isLogintSuccess,
    isLoading: isLogintLoading,
    isError: isLogintError,
  } = useMutation(storeApi.login(loginDto));

  return {
    login,
    isLogintSuccess,
    isLogintLoading,
    isLogintError,
    setLoginDto,
    loginDto,
  };
};