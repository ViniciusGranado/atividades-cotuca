import { Navbar } from '../components/Navbar/Navbar';
import { TabItem } from '../models/models';
import './App.css';

const tabs: TabItem[] = [
  {
    label: 'Store',
    url: '/home',
    style: { marginRight: 'auto'},
  },
  {
    label: 'Produtos',
    url: '/produtos',
  },
  {
    label: 'Gerenciar Produtos',
    url: '/admins',
  },
]

export const App = () => {
  return (
    <>
      <Navbar tabs={tabs} value={0} />
    </>
  );
}
