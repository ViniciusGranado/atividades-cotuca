import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import styles from './Home.module.css';

export const Home = () => {
  const [age, setAge] = useState('0');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}
      className={styles.Home}
    >
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Usuário</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Usuário'
          onChange={handleChange}
        >
          <MenuItem value={0}>Selecione o usuário para ver seus dados</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Nome' name='name' value='João da Silva' inputProps={{readOnly: true}}/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Idade' name='age' value='23' inputProps={{readOnly: true}}/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='CEP' name='cep' value='13015301' inputProps={{readOnly: true}}/>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Endereço' name='adress' value='Rua dos cascais 18' multiline minRows={3} inputProps={{readOnly: true}}/>
      </FormControl>
    </Box>
  );
};
