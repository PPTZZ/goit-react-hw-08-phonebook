import { Button, Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/selectors';
import { logout } from '../redux/slices/authSlice';
const Home = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const capitalisedName = name => name.charAt(0).toUpperCase() + name.slice(1);
  const handleClick = e => {
    navigate(`/goit-react-hw-08-phonebook${e.target.dataset.path}`);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Paper sx={{ px: 5, py: 10, height: '100vh', position: 'relative' }}>
        <Button
          variant='contained'
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={handleLogout}>
          Log Out
        </Button>
        <Typography variant='h4' sx={{ mb: 1 }}>
          Hello {capitalisedName(user.name)}!
        </Typography>
        <Typography sx={{ mb: 1 }}>
          This page is under construction for now
          <br /> For now thoe only pages available is:
        </Typography>
        <Button variant='text' onClick={handleClick} data-path='/contacts'>
          Contacts
        </Button>
      </Paper>
    </Container>
  );
};
export default Home;
