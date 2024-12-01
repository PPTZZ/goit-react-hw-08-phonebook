import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import Contacts from '../pages/Contatcs'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/goit-react-hw-08-phonebook'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/goit-react-hw-08-phonebook/contacts'
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path='/goit-react-hw-08-phonebook/login' element={<Login />} />
        <Route path='/goit-react-hw-08-phonebook/register' element={<Register />} />
      </Routes>
    </>
  );
};
export default App;