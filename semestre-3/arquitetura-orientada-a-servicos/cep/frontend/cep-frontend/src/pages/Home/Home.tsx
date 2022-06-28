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
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';
import { UseGetAllUsers } from '../../hooks/UseGetAllUsers';
import { UseGetUserById } from '../../hooks/UseGetUserById';
import { UseDeleteUserHook } from '../../hooks/UseDeleteUser';
import { UserAddress } from '../../models/models';

import styles from './Home.module.css';

export const Home = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const { users, isGetUsersError, isGetUsersLoading, refetchGetUsers } =
    UseGetAllUsers();

  const {
    deleteUser,
    setUserDto,
    isDeleteUserError,
    isDeleteUserLoading,
    isDeleteUserSuccess,
  } = UseDeleteUserHook();

  const {
    user,
    selectedId,
    setSelectedId,
    isGetUserSuccess,
    isGetUserError,
    isGetUserLoading,
  } = UseGetUserById();

  useEffect(() => {
    if (isGetUserSuccess && user) {
      setUserDto(user.user);
    }
  }, [isGetUserSuccess, setUserDto, user]);

  useEffect(() => {
    if (isGetUsersError || isDeleteUserError || isGetUserError) {
      setAlertSeverity('error');
      setAlertTitle('An error occured. Please try again.');
      handleOpenAlert();
    }
  }, [isGetUsersError, isGetUserError, isDeleteUserError]);

  useEffect(() => {
    if (isDeleteUserSuccess) {
      setAlertSeverity('success');
      setAlertTitle('User deleted!');
      handleOpenAlert();
      setSelectedId(0);
      refetchGetUsers();
    }
  }, [isDeleteUserSuccess, refetchGetUsers, setSelectedId]);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const handleChangeUser = (event: SelectChangeEvent<number>) => {
    setSelectedId(+event.target.value);
  };

  const getAddres = (user: UserAddress) => {
    return `${user.adress.logradouro} Nº ${user.user.number}\n${user.adress.bairro}\n${user.adress.cidade}/${user.adress.estado}`;
  };

  if (isGetUsersLoading || isDeleteUserLoading) {
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

          <Box display='flex' justifyContent='space-between' width='100%'>
            <Button variant='contained' onClick={() => deleteUser()}>
              DELETAR USUÁRIO
            </Button>
          </Box>
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
