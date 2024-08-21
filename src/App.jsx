import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import AppSk from "./components/Skeletons/AppSk.jsx";
import Home from "./Pages/Dashboard/Home/Home.jsx";
const Login = lazy(() => import("./Pages/Login/Login.jsx"));
const Signup = lazy(() => import("./Pages/Signup/Signup.jsx"));
const Dashboard = lazy(() => import("./Pages/Dashboard/index.jsx"));
const Forgot = lazy(() => import("./Pages/Forgot/Forgot.jsx"));
const Reset = lazy(() => import("./components/Reset/Reset.jsx"));
const Virtual = lazy(() => import("./Pages/Dashboard/Virtual/Virtual.jsx"));
const Monitor = lazy(() => import("./Pages/Dashboard/Monitor/Monitor.jsx"));
const Crystal = lazy(() => import("./Pages/Dashboard/Crystal/Crystal.jsx"));
const ComplaintHistory = lazy(() => import("./Pages/Dashboard/ComplaintHistory/ComplaintHistory.jsx"));
const NotificationHistory = lazy(() =>import("./Pages/Dashboard/NotificationHistory/NotificationHistory.jsx"));
const Edit = lazy(() => import("./Pages/Dashboard/Edit/Edit.jsx"));
const Logout = lazy(() => import("./Pages/Dashboard/Logout/Logout.jsx"));
const CheckStatus = lazy(() =>import("./CheckStatus/CheckStatus.jsx"));
const Otp = lazy(() => import("./components/Otp/Otp.jsx"));
const OtpForget = lazy(() =>import("./components/Otp/OtpForget/OtpForget.jsx"));
const OtpSignup = lazy(() => import("./components/Otp/OtpSignup.jsx"));
const OtpSign = lazy(() => import("./components/Otp/Otpsign.jsx"));
const WellMaster = lazy(() => import("./Pages/WellMaster/WellMaster.jsx"));
const SingleWell = lazy(() =>import("./Pages/Dashboard/SingleWell/SingleWell.jsx"));
const AddWell = lazy(() =>import("./Pages/WellMaster/AddWell/AddWell.jsx"));
const ManageAsset = lazy(() =>import("./Pages/Dashboard/ManageAsset/ManageAsset.jsx"));
const DeviceManage = lazy(() =>import("./Pages/Dashboard/DeviceManage/DeviceManage.jsx"));
const AddDevice = lazy(() =>import("./Pages/Dashboard/DeviceManage/AddDevice/AddDevice.jsx"));




function App() {
  const route = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/dashboard",
      element: <Dashboard />,

      children: [
        { path: "/dashboard", element: <Home /> },
        { path: "/dashboard/monitor", element: <Monitor /> },
        { path: "/dashboard/virtual", element: <Virtual /> },
        { path: "/dashboard/crystal", element: <Crystal /> },
        { path: "/dashboard/complaint", element: <ComplaintHistory /> },
        { path: "/dashboard/notification", element: <NotificationHistory /> },
        { path: "/dashboard/edit", element: <Edit /> },
        { path: "/dashboard/logout", element: <Logout /> },
        { path: '/dashboard/wellmaster', element: <WellMaster /> },
        { path: '/dashboard/addwell', element: <AddWell /> },
        { path: "/dashboard/singlewell", element: <SingleWell /> },
        { path: "/dashboard/ManageAsset", element: <ManageAsset /> },
        { path: "/dashboard/DeviceManage", element: <DeviceManage /> },
        { path: "/dashboard/AddDevice", element: <AddDevice /> },

      ]
    },
    { path: "/CheckStatus", element: <CheckStatus /> },
    { path: "/reset", element: <Reset /> },
    { path: "/otp", element: <Otp /> },
    { path: "/forgot", element: <Forgot /> },
    { path: "/otpsignup", element: <OtpSignup /> },
    { path: "/otpsign", element: <OtpSign /> },
    { path: "/otpforget", element: <OtpForget /> },

  ]);

  return (
    <>
      <Suspense fallback={<AppSk />}>{route}</Suspense>
    </>
  );
}

export default App;
