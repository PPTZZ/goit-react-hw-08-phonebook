import { Button, Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { handleLogOut } from '../services/fetchAPI';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const capitalisedName = name => name.charAt(0).toUpperCase() + name.slice(1);
  const handleClick = e => {
    navigate(e.target.dataset.path);
  };
  const logOut = () => {
    dispatch(handleLogOut());
	navigate('/')
  };

  return (
    <Container>
      <Paper sx={{px:5, py: 10, height: '100vh', position: 'relative' }}>
        <Button
          variant='contained'
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={logOut}>
          Log Out
        </Button>
        <Typography variant='h4' sx={{mb:1}}>
          Hello {capitalisedName(user.name)}!
        </Typography>
        <Typography sx={{mb:1}}>
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
