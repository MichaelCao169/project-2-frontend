import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './common/NavBar';
import LoggedInNavBar from './common/LoggedInNavBar';
import useAuth from '../hooks/useAuth';

const LayOut = () => {
  const { auth } = useAuth();

  return (
    <>
     
      <Outlet />
    </>
  );
};

export default LayOut;