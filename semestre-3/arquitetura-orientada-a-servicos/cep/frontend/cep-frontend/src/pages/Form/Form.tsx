import {
  Box,
  FormControl,
  TextField,
  AlertColor,
  CircularProgress,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ChangeEvent, useEffect, useState } from 'react';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';
import { UseInsertUserHook } from '../../hooks/UseInsertUserHook';

import styles from './Form.module.css';

export const Form = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const {
    createUser,
    isCreateUserSuccess,
    isCreateUserLoading,
    isCreateUserError,
    setNewUserDto,
    newUserDto,
  } = UseInsertUserHook();

  useEffect(() => {
    if (isCreateUserSuccess) {
      setAlertSeverity('success');
      setAlertTitle('The User was created!');
      handleOpenAlert();
    }
  }, [isCreateUserSuccess]);

  useEffect(() => {
    if (isCreateUserError) {
      setAlertSeverity('error');
      setAlertTitle('The User was not created. Please try again.');
      handleOpenAlert();
    }
  }, [isCreateUserError]);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewUserDto((prev) => {
      const stateCopy = { ...prev };

      stateCopy[event.target.name] = event.target.value;

      return stateCopy;
    });
  };

  if (isCreateUserLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
      className={styles.Form}
    >
      <FormControl fullWidth>
        <TextField
          label='Nome'
          name='name'
          onChange={onChange}
          value={newUserDto.name}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label='Idade'
          name='age'
          onChange={onChange}
          value={newUserDto.age}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label='CEP'
          name='cep'
          onChange={onChange}
          value={newUserDto.cep}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          label='Número'
          name='number'
          onChange={onChange}
          value={newUserDto.number}
        />
      </FormControl>

      <LoadingButton
        variant='contained'
        sx={{ padding: '0.625rem 5rem' }}
        onClick={() => createUser()}
        loading={isCreateUserLoading}
      >
        Cadastrar
      </LoadingButton>

      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        title={alertTitle}
        severity={alertSeverity}
      />
    </Box>
  );
};
