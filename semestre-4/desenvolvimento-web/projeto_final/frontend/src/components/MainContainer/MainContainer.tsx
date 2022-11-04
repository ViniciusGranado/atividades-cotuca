import { Container } from "@mui/material";
import React from "react";


export const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container sx={{
      margin: '3rem auto',
    }}>
      {children}
    </Container>
  );
}