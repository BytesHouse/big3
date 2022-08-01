import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }: any) => {
  const Auth = localStorage.getItem('token');
  const error = localStorage.getItem('401');

  const clear = async () => {
    localStorage.clear();
    window.location.reload();
  };
  if (!Auth) return <Navigate to="/" />;
  if (error) clear();

  return children;
};
