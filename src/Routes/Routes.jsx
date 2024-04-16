import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import DetailsEstate from "../components/DetailsEstate/DetailsEstate";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";



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
          path:'/blog',
          element:<PrivateRoute><Blog/></PrivateRoute>
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