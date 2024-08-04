import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom'
import AppSk from './components/Skeletons/AppSk.jsx';
const Login = lazy(() => import('./Pages/Login/Login.jsx'))
const Signup = lazy(() => import('./Pages/Signup/Signup.jsx'))
const Dashboard = lazy(() => import('./Pages/Dashboard/index.jsx'))
const Forgot = lazy(() => import('./Pages/Forgot/Forgot.jsx'))
const Reset = lazy(() => import('./Pages/Reset/Reset.jsx'))


function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/reset', element: <Reset /> },
    { path: '/forgot', element: <Forgot /> }

  ])

  return (
    <>
      <Suspense fallback={<AppSk/>}>
        {route}
      </Suspense>
    </>
  )
}

export default App
