/* eslint-disable react/no-unescaped-entities */

import { FaGithub } from "react-icons/fa";

import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser,signWithGoogle,signWithGithub } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin=()=>{
    signWithGoogle()
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    })
    .catch(error=>{
      console.error(error)
    })
  }
  const handleGithubLogin=()=>{
    signWithGithub()
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login success!!");
        navigate(location?.state ? location.state : "/");
        
      })
      .catch((error) => {
        console.error(error);
        toast.warn("Please provide valid email & password");
      });
  };
  return (
    <div>
      <Helmet>
        <title>EverGreen | Login</title>
      </Helmet>
      <Card
        color="transparent"
        shadow={false}
        className="max-w-7xl mx-auto min-h-[calc(100vh-421px)] bg-gray-200 mt-3 flex justify-center items-center"
      >
        <Typography className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
          Login
        </Typography>
        <div className="space-y-4 mt-4">
        <Button
              onClick={handleGoogleLogin}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center justify-center text-black gap-3 w-96 "
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-4 w-6 text-black"
              />
              Continue with Google
            </Button>
            <Button
            onClick={handleGithubLogin}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3 w-96 text-black justify-center"
            >
              <FaGithub  className="h-4 w-6 text-black" />
              Continue with Github
            </Button>
            
        </div>
        <p className="mt-6 text-black">Or Login With Email</p>
        <form
          onSubmit={handleLogin}
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            
            <Input
              size="lg"
              type="email"
              label="Email"
              variant="outlined"
              name="email"
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                label="password"
                variant="outlined"
                name="password"
                required
              />
              <span
                className="absolute right-2 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <button
            size="lg"
            className="mt-2 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto"
          >
            Login
          </button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register">
              <span className="font-medium text-red-900">Register</span>
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
