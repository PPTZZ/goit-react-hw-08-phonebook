import { Collapse } from '@mui/material';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { selectFilteredContacts } from '../redux/selectors';


const ContactList = () => {
	
	const contacts = useSelector(selectFilteredContacts);
	return (
		<>
				<TransitionGroup>
					{contacts.map((contact) => {
						const { id, name, number } = contact;
						return (
							<Collapse key={id}>
								<Contact name={name} number={number} id={id} />
							</Collapse>
						);
					})}
				</TransitionGroup>

		</>
	);
};
export default ContactList;
