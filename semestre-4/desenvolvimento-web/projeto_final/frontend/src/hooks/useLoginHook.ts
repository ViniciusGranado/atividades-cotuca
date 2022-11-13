import { useState } from "react";
import { useMutation } from "react-query";
import { storeApi } from "../api/store.api";
import { LoginDto } from "../models/models";

const initialLoginDto: LoginDto = {
  username: '',
  password: '',
};

export const useLoginHook = () => {
  const [loginDto, setLoginDto] = useState(initialLoginDto);

  const {
    mutate: login,
    isSuccess: isLoginSuccess,
    isLoading: isLoginLoading,
    isError: isLoginError,
    error,
  } = useMutation(storeApi.login(loginDto));

  return {
    login,
    isLoginSuccess,
    isLoginLoading,
    isLoginError,
    setLoginDto,
    loginDto,
    error: error as TypeError,
  };
};