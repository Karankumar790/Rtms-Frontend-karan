import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { lazy } from 'react';
// import Signup from './Pages/Signup/Signup.jsx';
const Login = lazy(() => import('./Pages/Login/Login.jsx'))
const Signup = lazy(() => import('./Pages/Signup/Signup.jsx'))
const Dashboard = lazy(() => import('./Pages/Dashboard/dash.jsx'))
const Header = lazy(() => import('./components/Header/Header.jsx'))
const Footer = lazy(() => import('./components/Footer/Footer.jsx'))
const Forgot = lazy(() => import('./Pages/Forgot/Forgot.jsx'))
const Reset = lazy(() => import('./Pages/Reset/Reset.jsx'))


function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/Signup', element: <Signup /> },
    { path: '/Dashboard', element: <Dashboard /> },
    { path: '/Reset', element: <Reset /> },
    {path: '/Forgot', element: <Forgot/>}

  ])

  return (
    <>
      <Suspense fallback={'LOADING......'}>
        <Header/>
          {route}
        <Footer />
      </Suspense>
    </>
  )
}

export default App
