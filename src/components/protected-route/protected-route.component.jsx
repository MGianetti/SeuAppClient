import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // if (!currentUser) {
  //return <Navigate to="/clients" />;
  //}

  return <div>{children}</div>;
};

export default ProtectedRoute;
