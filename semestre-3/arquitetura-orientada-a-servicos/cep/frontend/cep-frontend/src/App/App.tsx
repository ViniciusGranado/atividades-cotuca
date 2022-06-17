import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { UpdateUser } from '../pages/UpdateUser/UpdateUser';
import { Form } from '../pages/Form/Form';
import { Home } from '../pages/Home/Home';
import styles from './App.module.css';


export const App = () => {
  return (
    <>
      <Navbar />

      <Box className={styles.content}>
        <Routes>
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/new-user" element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  );
};
