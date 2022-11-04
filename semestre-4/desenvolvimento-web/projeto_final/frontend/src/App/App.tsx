import { Navbar } from '../components/Navbar/Navbar';
import { Product, TabItem } from '../models/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from '../pages/Home/Home';
import { Products } from '../pages/Products/Products';
import { Admin } from '../pages/Admin/Admin';
import { Login } from '../pages/Login/Login';
import { MainContainer } from '../components/MainContainer/MainContainer';

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

const mockProducts: Product[] = [{
  name: "Bread Roll Foccacia",
  description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  imgUrl: "http://dummyimage.com/100x100.png/dddddd/000000"
}, {
  name: "Flower - Carnations",
  description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  imgUrl: "http://dummyimage.com/100x100.png/ff4444/ffffff"
}, {
  name: "Pork - Back Ribs",
  description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  imgUrl: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
}, {
  name: "Appetizer - Assorted Box",
  description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  imgUrl: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
}, {
  name: "Wine - Sawmill Creek Autumn",
  description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  imgUrl: "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
}, {
  name: "Oil - Olive",
  description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  imgUrl: "http://dummyimage.com/100x100.png/dddddd/000000"
}]

export const App = () => {
  return (
    <>
      <Navbar tabs={tabs} />

      <MainContainer>
        <Routes>
          <Route path="/produtos" element={<Products products={mockProducts} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </>
  );
}
