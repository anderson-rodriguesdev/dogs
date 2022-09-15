import React, { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);
  return login ? props.children : <Navigate to="/login" />;
};

export default ProtectedRoute;
