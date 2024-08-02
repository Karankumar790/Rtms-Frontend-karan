import React, { Suspense } from 'react';
import {useRoutes } from 'react-router-dom'
import { lazy } from 'react';

// import Signup from './Pages/Signup.jsx';
import Header from './components/Header/Header.jsx';
const Login = lazy(() => import('./Pages/Login/Login.jsx'))

function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    // {path:'/Signup',element:<Signup/>}

  ])

  return (
    <>
      <Suspense fallback={'LOADING......'}> {route}</Suspense>

    </>
  )
}

export default App
