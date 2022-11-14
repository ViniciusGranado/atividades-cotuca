import { useState } from "react";
import { useMutation } from "react-query";
import { storeApi } from "../api/store.api";
import { LoginDto, LoginResponse } from "../models/models";

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
  } = useMutation<LoginResponse>(storeApi.login(loginDto), {
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
    }
  });

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