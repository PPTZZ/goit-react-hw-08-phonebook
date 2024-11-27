import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
              Don't have an account? <Link to={'/register'}>Sign up!</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default Login;
