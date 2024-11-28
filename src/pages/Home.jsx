import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ContactList from '../components/ContactList';
import Input from '../components/Input';
import AddBtn from '../components/AddBtn';
import AlertBox from '../components/AlertBox';
import Searchbar from '../components/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../services/fetchAPI';

const Home = () => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const token = useSelector(state=>state.auth.token)

	return (
		<>
			<Searchbar />
			{token}
			<Container sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
				<ContactList />
				<Input open={open} toggleSlide={setOpen} />
				<AddBtn toggleSlide={setOpen} />
				<AlertBox />
			</Container>
		</>
	);
};
export default Home;
