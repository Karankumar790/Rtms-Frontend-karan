import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { lazy } from 'react';
// import Header from './components/Header/Header.jsx';
// import Footer from './components/Footer/Footer.jsx';

import Signup from './Pages/Signup/Signup.jsx';
const Login = lazy(() => import('./Pages/Login/Login.jsx'))

const Header = lazy(() => import('./components/Header/Header.jsx'))

// const Footer = lazy(() => import('./components/Footer/Footer.jsx'))

function App() {
  const route = useRoutes([

    { path: '/', element: <Login /> },
    { path: '/Signup', element: <Signup /> }

  ])

  return (
    <>
      <Suspense fallback={'LOADING......'}>
        <Header />

        {route}

        {/* <Footer /> */}
      </Suspense>
    </>
  )
}

export default App
