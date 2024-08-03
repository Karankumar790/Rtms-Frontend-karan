import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { lazy } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

// import Signup from './Pages/Signup/Signup.jsx';
const Login = lazy(() => import('./Pages/Login/Login.jsx'))

function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    // { path: '/Signup', element: <Signup /> }

  ])

  return (
    <>
      <Header />
      <Suspense fallback={'LOADING......'}>

        {route}

      </Suspense>
      <Footer />
    </>
  )
}

export default App
