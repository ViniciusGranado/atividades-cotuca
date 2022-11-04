import { Button, TextField, Box } from "@mui/material";
import './Login.css';

export const Login = () => {
  return (
    <Box className="Login">
      <TextField label='E-mail' type='email' />
      <TextField label='Senha' type='password' />

      <Button variant="contained">LOGIN</Button>
    </Box>
  );
}