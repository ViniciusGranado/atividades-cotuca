import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/home");
    window.location.reload();
  }, [navigate]);

  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};
