import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import DetailsEstate from "../components/DetailsEstate/DetailsEstate";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import BookedList from "../Pages/BookedList/BookedList";



  const router=createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/bookedList',
          element:<PrivateRoute><BookedList/></PrivateRoute>,
          loader: ()=> fetch('/data.json')
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile/>
        },
        {
          path:'/detailsEstate/:id',
          element:<PrivateRoute><DetailsEstate/></PrivateRoute>,
          loader: ()=> fetch('/data.json')
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/profile',
          element:<Profile/>
        },
      ]
    }

  ])


export default router;