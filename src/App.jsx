import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom'
import AppSk from './components/Skeletons/AppSk.jsx';
import Home from './Pages/Dashboard/Home/Home.jsx'
import SideBar from './Pages/Dashboard/SideBar/SideBar.jsx'
const Login = lazy(() => import('./Pages/Login/Login.jsx'))
const Signup = lazy(() => import('./Pages/Signup/Signup.jsx'))
const Dashboard = lazy(() => import('./Pages/Dashboard/index.jsx'))
const Forgot = lazy(() => import('./Pages/Forgot/Forgot.jsx'))
const Reset = lazy(() => import('./Pages/Reset/Reset.jsx'))
const Table = lazy(() => import('./Pages/Dashboard/Table/Table.jsx'))
const Otp = lazy(() => import('./Pages/Otp/Otp.jsx'))
const Virtual = lazy(() => import('./Pages/Dashboard/Virtual/Virtual.jsx'))
const Monitor = lazy(() => import('./Pages/Dashboard/Monitor/Monitor.jsx'))
const Crystal = lazy(() => import('./Pages/Dashboard/Crystal/Crystal.jsx'))
const Complaint = lazy(() => import('./Pages/Dashboard/ComplaintHistory/ComplaintHistory.jsx'))
const Notification = lazy(() => import('./Pages/Dashboard/NotificationHistory/NotificationHistory.jsx'))
const Edit = lazy(() => import('./Pages/Dashboard/Edit/Edit.jsx'))
const Logout = lazy(() => import('./Pages/Dashboard/Logout/Logout.jsx'))
const DashboardTwo = lazy(() => import('./Pages/DashboardTwo/DashboardTwo.jsx'))


function App() {
  const route = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/dashboard', element: <Dashboard />,
      children: [
        { path: "", element: <Home /> },
        {path:"table",element:<Table/>},
        {path:"virtual",element:<Virtual/>},
        {path:"monitor",element:<Monitor/>},
        {path:"crystal",element:<Crystal/>},
        {path:"complaint",element:<Complaint/>},
        {path:"notification",element:<Notification/>},
        {path:"edit",element:<Edit/>},
        {path:"logout",element:<Logout/>}
      ]
    },
    { path: '/reset', element: <Reset /> },
    { path: '/otp' , element: <Otp />},
    { path: '/forgot', element: <Forgot /> },
    { path: '/dashboardtwo', element: <DashboardTwo /> }

  ])

  return (
    <>
      <Suspense fallback={<AppSk />}>
        {route}
      </Suspense>
    </>
  );
}

export default App;
