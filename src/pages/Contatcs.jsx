import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import Searchbar from '../components/Searchbar';
import ContactList from '../components/ContactList';
import AddBtn from '../components/AddBtn';
import AlertBox from '../components/AlertBox';
import Input from '../components/Input';
import { selectContacts } from '../redux/selectors';
import { fetchContacts } from '../services/handleContacts';

const Contatcs = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const existingContacts = useSelector(selectContacts);

  return (
    <>
      <Searchbar />
      <Container sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
        {existingContacts.length !== 0 ? (
          <ContactList />
        ) : (
          <Typography variant='h5'>No contacts to display yet.</Typography>
        )}
        <Input open={open} toggleSlide={setOpen} />
        <AddBtn toggleSlide={setOpen} />
        <AlertBox />
      </Container>
    </>
  );
};
export default Contatcs;