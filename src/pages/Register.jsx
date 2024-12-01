import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../services/handleAuth';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    try {
      const result = await dispatch(handleRegister(userData));
      if (handleRegister.fulfilled.match(result)) {
        navigate('/goit-react-hw-08-phonebook');
      } else {
        throw new Error(result.error.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <Paper
          elevation={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 10,
            width: 300,
            height: 500,
          }}>
          <Typography variant='h4'>Register</Typography>
          <form
            onSubmit={onSubmit}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <TextField
              type='text'
              onChange={handleName}
              label='Name'
              required
              variant='outlined'
              sx={{ width: 250 }}
            />
            <TextField
              type='email'
              onChange={handleEmail}
              label='Email'
              required
              variant='outlined'
              sx={{ width: 250 }}
            />
            <TextField
              type='password'
              onChange={handlePassword}
              label='Password'
              required
              variant='outlined'
              sx={{ width: 250 }}
            />
            <Button type='submit' variant='contained'>
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};
export default Register;
