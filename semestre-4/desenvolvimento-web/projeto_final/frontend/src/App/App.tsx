import { Navbar } from '../components/Navbar/Navbar';
import { Product, TabItem } from '../models/models';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from '../pages/Home/Home';
import { Products } from '../pages/Products/Products';
import { Admin } from '../pages/Admin/Admin';
import { Login } from '../pages/Login/Login';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { EditProduct } from '../pages/EditProduct/EditProduct';
import { NewProduct } from '../pages/NewProduct/NewProduct';

const tabs: TabItem[] = [
  {
    label: 'Store',
    url: '/home',
    style: { marginRight: 'auto' },
  },
  {
    label: 'Produtos',
    url: '/produtos',
  },
  {
    label: 'Gerenciar Produtos',
    url: '/admin',
  },
  {
    label: 'Login',
    url: '/login',
  },
]

export const App = () => {
  return (
    <>
      <Navbar tabs={tabs} />

      <MainContainer>
        <Routes>
          <Route path="/produtos" element={<Products />} />
          <Route path="/admin/:productId" element={<EditProduct />} />
          <Route path="/admin/new-product" element={<NewProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </>
  );
}
