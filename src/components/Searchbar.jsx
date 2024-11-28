import {
  AppBar,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/myContactsSlice';
import { handleLogOut } from '../services/fetchAPI';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
	const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearchChange = e => {
    dispatch(setSearch(e.target.value));
  };
  const logOut = () => {
    dispatch(handleLogOut());
    navigate('/goit-react-hw-08-phonebook/contacts');
  };

  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='contained'
          sx={{ position: 'absolute', top: 10, right: 10, bgcolor:'white', color:'blue' }}
          onClick={logOut}>
          Log Out
        </Button>
        <TextField
          onChange={handleSearchChange}
          variant='outlined'
          placeholder='Search'
          sx={{
            width: 250,
            '& .MuiOutlinedInput-root': {
              color: 'text.primary',
              backgroundColor: '#fff',
              fontWeight: 'bold',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2e2e2e',
                borderWidth: '2px',
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Searchbar;
