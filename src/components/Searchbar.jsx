import {
  AppBar,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='contained'
          sx={{ position: 'absolute', top: 10, right: 10, bgcolor:'white', color:'blue' }}>
          Log Out
        </Button>
        <TextField
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
