import {
  Box,
  FormControl,
  TextField,
  AlertColor,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ChangeEvent, useEffect, useState } from 'react';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';

import styles from './UpdateUser.module.css';
import { UseGetUserById } from '../../hooks/UseGetUserById';
import { UseGetAllUsers } from '../../hooks/UseGetAllUsers';
import { UseUpdateUserHook } from '../../hooks/UseUpdateUserHook';

export const UpdateUser = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const { users, isGetUsersError, isGetUsersLoading, refetchGetUsers } =
    UseGetAllUsers();

  const {
    user,
    selectedId,
    setSelectedId,
    isGetUserSuccess,
    isGetUserError,
    isGetUserLoading,
  } = UseGetUserById();

  const {
    updateUser,
    updateUserDto,
    isUpdateUserSuccess,
    isUpdateUserError,
    isUpdateUserLoading,
    setUpdateUserDto,
  } = UseUpdateUserHook();

  useEffect(() => {
    if (isGetUserSuccess && user) {
      setUpdateUserDto(user.user);
    }
  }, [isGetUserSuccess, setUpdateUserDto, user]);

  useEffect(() => {
    if (isUpdateUserSuccess) {
      setAlertSeverity('success');
      setAlertTitle('User updated!');
      handleOpenAlert();
      refetchGetUsers();
    }
  }, [isUpdateUserSuccess, refetchGetUsers]);

  useEffect(() => {
    if (isUpdateUserError) {
      setAlertSeverity('error');
      setAlertTitle('The User was not updated. Please try again.');
      handleOpenAlert();
    }
  }, [isUpdateUserError]);

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
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateUserDto((prev) => {
      const stateCopy = { ...prev };

      stateCopy[event.target.name] = event.target.value;

      return stateCopy;
    });
  };

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
      className={styles.UpdateUser}
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
          <MenuItem value={0}>
            Selecione o usuário para atualizar seus dados
          </MenuItem>
          {users.map((user) => (
            <MenuItem value={user.id} key={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {(isUpdateUserLoading || isGetUserLoading) && <CircularProgress />}
      {selectedId !== 0 && user && (
        <>
          <FormControl fullWidth>
            <TextField
              label='Nome'
              name='name'
              onChange={onChange}
              value={updateUserDto.name}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='Idade'
              name='age'
              onChange={onChange}
              value={updateUserDto.age}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='CEP'
              name='cep'
              onChange={onChange}
              value={updateUserDto.cep}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label='Número'
              name='number'
              onChange={onChange}
              value={updateUserDto.number}
            />
          </FormControl>

          <LoadingButton
            variant='contained'
            sx={{ padding: '0.625rem 5rem' }}
            onClick={() => updateUser()}
            loading={isUpdateUserLoading}
          >
            Atualizar
          </LoadingButton>
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
