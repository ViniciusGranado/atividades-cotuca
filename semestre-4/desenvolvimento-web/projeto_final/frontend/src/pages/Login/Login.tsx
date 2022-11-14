import { Button, TextField, Box, CircularProgress } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DialogModal,
  DialogModalProps,
} from "../../components/DialogModal/DialogModal";
import { useLoginHook } from "../../hooks/useLoginHook";
import { LoginResponse } from "../../models/models";
import { getCurrentUser } from "../../utils/getCurrentUser";

import "./Login.css";

export const Login: React.FC<{
  setNewLoggedUser: Dispatch<SetStateAction<LoginResponse | null>>;
}> = ({ setNewLoggedUser }) => {
  const navigate = useNavigate();
  const {
    login,
    loginDto,
    setLoginDto,
    isLoginLoading,
    isLoginError,
    isLoginSuccess,
    error,
  } = useLoginHook();
  const [dialogModalConfig, setDialogModalConfig] = useState<DialogModalProps>({
    isDialogOpen: false,
    title: "",
    severity: "success",
    message: "",
    onClickButtonAction: () => {},
  });

  useEffect(() => {
    if (isLoginSuccess) {
      setDialogModalConfig({
        isDialogOpen: true,
        title: "Sucesso",
        message: "Login realizado com sucesso!",
        severity: "success",
        onClickButtonAction: () => {
          const loggedUser = getCurrentUser();
          setNewLoggedUser(loggedUser);
          navigate("/home");
        },
      });
    }
  }, [isLoginSuccess, navigate, setNewLoggedUser]);

  useEffect(() => {
    if (isLoginError) {
      let errorMessage = "Ocorreu um erro ao realizar o Login!";

      if (error.message === "401") {
        errorMessage = "Usuário ou Senha incorretos!";
      }

      setDialogModalConfig({
        isDialogOpen: true,
        title: "Erro",
        message: errorMessage,
        severity: "error",
        onClickButtonAction: closeDialogHandler,
      });
    }
  }, [isLoginError]);

  const closeDialogHandler = () => {
    setDialogModalConfig((prev) => ({
      ...prev,
      isDialogOpen: false,
    }));
  };

  if (isLoginLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="Login">
      <TextField
        label="Usuário"
        name="username"
        defaultValue={loginDto.username}
        onChange={(event) => {
          setLoginDto((prev) => {
            return {
              ...prev,
              [event.target.name]: event.target.value,
            };
          });
        }}
      />

      <TextField
        label="Senha"
        type="password"
        name="password"
        onChange={(event) => {
          setLoginDto((prev) => {
            return {
              ...prev,
              [event.target.name]: event.target.value,
            };
          });
        }}
      />

      <Button variant="contained" onClick={() => login()}>
        LOGIN
      </Button>

      <DialogModal {...dialogModalConfig} />
    </Box>
  );
};
