import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";



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
          element:<Blog/>
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
        }
      ]
    }

  ])


export default router;