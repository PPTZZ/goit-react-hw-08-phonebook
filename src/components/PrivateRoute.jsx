import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectLogin } from '../redux/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLogin);
  if (!isLoggedIn) {
    return <Navigate to='/goit-react-hw-08-phonebook/login' />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
