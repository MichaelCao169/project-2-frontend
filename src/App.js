import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import PostJob from './Pages/PostJob';
import MyJobs from './Pages/MyJobs';
import UpdateJob from './Pages/UpdateJob';
import JobDetail from './Pages/JobDetail';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import Forgot from './Pages/auth/Forgot';
import Recover from './Pages/auth/Recover';
import NotFound from './Pages/NotFound';
import {UserDataProvider} from './Context/UserDataProvider'
import LayOut from './Pages/LayOut';

const App = () => {

  return (
    <>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/recover" element={<Recover />} />
          <Route path="/" element={<UserDataProvider><LayOut /></UserDataProvider>}>
              <Route path="/" element={<Home />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/my-job" element={<MyJobs />} />
              <Route path="/edit-job/:id" element={<UpdateJob />} />
              <Route path="/job/:id" element={<JobDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
};

export default App;
