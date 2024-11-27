// import { useEffect } from 'react';
// import Home from '../pages/Home';
// import Searchbar from './Searchbar';
// import { fetchAPI } from '../services/fetchAPI';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const App = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchAPI());
	// }, [dispatch]);

	return (
		<>
			{/* <Searchbar /> */}
			<Routes>
			{/* <Route path='/goit-react-hw-06-phonebook' element={<Home />}/> */}
			<Route path='/login' element={<Login />}/>
			<Route path='/register' element={<Register />}/>
				
			</Routes>
		</>
	);
};
export default App;
