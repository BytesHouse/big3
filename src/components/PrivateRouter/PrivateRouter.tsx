import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../core/utils/localStorage';

export const PrivateRouter = ({ children }: any) => {
  const Auth = getUserFromLocalStorage();

  if (!Auth) return <Navigate to="/" />;

  return children;
};
