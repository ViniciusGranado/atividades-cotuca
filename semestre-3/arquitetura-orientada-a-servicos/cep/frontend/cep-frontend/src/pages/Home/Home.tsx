import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  AlertColor,
  CircularProgress,
  SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';
import { UseGetAllUsers } from '../../hooks/UseGetAllUsers';
import { UseGetUserById } from '../../hooks/UseGetUserById';
import { UserAddress } from '../../models/models';

import styles from './Home.module.css';

export const Home = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const { users, isGetUsersError, isGetUsersLoading} =
    UseGetAllUsers();

  const {
    user,
    selectedId,
    setSelectedId,
    isGetUserError,
    isGetUserLoading,
  } = UseGetUserById();

  useEffect(() => {
    if (isGetUsersError || isGetUserError) {
      setAlertSeverity('error');
      setAlertTitle('An error occured. Please try again.');
      handleOpenAlert();
    }
  }, [isGetUsersError, isGetUserError]);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const handleChangeUser = (event: SelectChangeEvent<number>) => {
    setSelectedId(+event.target.value);
    console.log(selectedId);
  };

  const getAddres = (user: UserAddress) => {
    return `${user.adress.logradouro} Nº ${user.user.number}\n${user.adress.bairro}\n${user.adress.cidade}/${user.adress.estado}`
  }

  if (isGetUsersLoading) {
    return <CircularProgress />;
  }

  if (isGetUsersError || !users) {
    return <div>Error</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
      className={styles.Home}
    >
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Usuário</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          defaultValue={0}
          label='Usuário'
          onChange={handleChangeUser}
        >
          <MenuItem value={0}>Selecione o usuário para ver seus dados</MenuItem>
          {users.map((user) => (
            <MenuItem value={user.id} key={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isGetUserLoading && <CircularProgress />}
      {selectedId !== 0 && user && (
        <>
          <FormControl fullWidth>
            <TextField
              label='Nome'
              name='name'
              value={user.user.name}
              inputProps={{ readOnly: true }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='Idade'
              name='age'
              value={user.user.age}
              inputProps={{ readOnly: true }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='CEP'
              name='cep'
              value={user.user.cep}
              inputProps={{ readOnly: true }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='Endereço'
              name='adress'
              value={getAddres(user)}
              multiline
              minRows={3}
              inputProps={{ readOnly: true }}
            />
          </FormControl>
        </>
      )}

      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        title={alertTitle}
        severity={alertSeverity}
      />
    </Box>
  );
};
