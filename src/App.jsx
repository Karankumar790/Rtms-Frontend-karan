import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route, useRoutes} from 'react-router-dom'
// import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
// import Navbar from './components/Navbar/Navbar.jsx'
// import Login from './components/Login/Login.jsx';
// import Signup from './components/Signup/Signup.jsx';


// import Signup from './Pages/Signup/Signup';

import { lazy } from 'react';

import Signup from './Pages/Signup.jsx';
import Header from './components/Header/Header.jsx';
// import Footer from './components/Footer/Footer.jsx';
const Login=lazy(()=>import('./Pages/Login.jsx'))

function App() {
  const route=useRoutes([
    {path:'/',element:<Login/>},
    {path:'/Signup',element:<Signup/>}

  ])

  return (
    <>
    <Suspense fallback={'LOADING......'}> {route}</Suspense>
      
    </>
  )
}

export default App
