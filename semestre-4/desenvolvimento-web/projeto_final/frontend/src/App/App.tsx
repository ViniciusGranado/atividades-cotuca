import { Navbar } from "../components/Navbar/Navbar";
import { LoginResponse, TabItem } from "../models/models";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Admin } from "../pages/Admin/Admin";
import { Login } from "../pages/Login/Login";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { getCurrentUser } from "../utils/getCurrentUser";
import { Logout } from "../pages/Logout/Logout";
import { useEffect, useState } from "react";
import { EditProduct } from "../pages/EditProduct/EditProduct";
import { NewProduct } from "../pages/NewProduct/NewProduct";

export const App = () => {
  const [currentUser, setCurrentUser] = useState<LoginResponse | null>(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const tabs: TabItem[] = [
    {
      label: "Store",
      url: "/home",
      style: { marginRight: "auto" },
    },
    {
      label: "Produtos",
      url: "/produtos",
    },
  ];

  if (currentUser?.user.role === "administrator" || currentUser?.user.role === "seller") {
    tabs.push({
      label: "Gerenciar Produtos",
      url: "/admin",
    });
  }

  tabs.push({
    label: !currentUser ? "Login" : "Logout",
    url: !currentUser ? "/login" : "/logout",
  });

  return (
    <>
      <Navbar tabs={tabs} />

      <MainContainer>
        <Routes>
          <Route path="/produtos" element={<Products />} />

          {currentUser?.user.role === "administrator" ||
          currentUser?.user.role === "seller" ? (
            <Route path="/admin/:productId" element={<EditProduct />} />
          ) : (
            <Route path="/admin/:productId" element={<Login setNewLoggedUser={setCurrentUser} />} />
          )}

          {currentUser?.user.role === "administrator" ||
          currentUser?.user.role === "seller" ? (
            <Route path="/admin/new-product" element={<NewProduct />} />
          ) : (
            <Route path="/admin/new-product" element={<Login setNewLoggedUser={setCurrentUser} />} />
          )}

          {currentUser?.user.role === "administrator" ||
          currentUser?.user.role === "seller" ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<Login setNewLoggedUser={setCurrentUser} />} />
          )}

          <Route path="/login" element={<Login setNewLoggedUser={setCurrentUser} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </>
  );
};
