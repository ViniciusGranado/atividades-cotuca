import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (_: SyntheticEvent, newTabIndex: number) => {
    setSelectedTabIndex(newTabIndex);
  };

  return (
    <Box className={styles.Navbar}>
      <Tabs
        value={selectedTabIndex}
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-end',
          },
        }}
      >
        <Tab label='Home' onClick={() => navigate(`/`)} />
        <Tab label='Cadastrar Usuario' onClick={() => navigate(`/new-user`)} />
        <Tab label='Atualizar Usuario' onClick={() => navigate(`/update-user`)} />
      </Tabs>
    </Box>
  );
};
