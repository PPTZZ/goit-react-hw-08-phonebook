import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogIn } from '../services/fetchAPI';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(handleLogIn(userData)).then(result => {
      if (result.type === 'auth/handleLogIn/fulfilled') {
        navigate('/goit-react-hw-08-phonebook');
      }
    });
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
            gap: 5,
            width: 300,
            height: 500,
          }}>
          <Typography variant='h4'>Login</Typography>
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
              Login
            </Button>
          </form>
          <Box>
            <Typography>Forgot password</Typography>
            <Typography>
              Don&apos;t have an account? <Link to={'/register'}>Sign up!</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default Login;
