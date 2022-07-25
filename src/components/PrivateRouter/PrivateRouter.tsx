import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRouter = ({ element, path }: any) => {
  const Auth = localStorage.getItem('token');
  const error = localStorage.getItem('401');

  const clear = async () => {
    localStorage.clear();
    window.location.reload();
  };
  if (!Auth) return <Route path="/" />;
  if (error) clear();

  return <Route element={element} path={path} />;
};
