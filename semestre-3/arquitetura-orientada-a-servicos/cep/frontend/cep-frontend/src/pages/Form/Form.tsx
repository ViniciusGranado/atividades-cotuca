import { Box, FormControl, TextField, Button } from '@mui/material';

import styles from './Form.module.css';

export const Form = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}
      className={styles.Form}
    >
      <FormControl fullWidth>
        <TextField label='Nome' name='name'/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Idade' name='age'/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='CEP' name='cep'/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Endereço' name='adress' multiline minRows={3}/>
      </FormControl>

      <Button variant='contained'>Cadastrar</Button>
    </Box>
  );
}