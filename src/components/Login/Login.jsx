/* eslint-disable react/no-unescaped-entities */

import {  Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const {signInUser}=useContext(AuthContext)
  const [showPassword, setShowPassword]=useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email,password)
    .then()
    .catch(error=>{
     console.error(error)
    })
  };
  return (
    <div>
      <Card color="transparent" shadow={false} className="max-w-7xl mx-auto min-h-[calc(100vh-429px)] bg-gray-200 mt-3 flex justify-center items-center">
      <Typography  className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
       Login
      </Typography>
      <Typography className="mt-1 font-normal text-black">
        Nice to meet you! Enter your details to Login.
      </Typography>
      <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
              type={
                showPassword?"text" :"password"
              }
              size="lg"
              label="password"
              variant="outlined"
              name="password"
              required
            />
            <span className="absolute right-2 top-3" onClick={()=>setShowPassword(!showPassword)}>
              {
                showPassword? <FaEye/> : <FaEyeSlash/>
              }
            </span>
            </div>
        </div>
        
        <button size="lg"className="mt-2 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto" >
          Login
        </button>
        <Typography color="gray" className="mt-4 text-center font-normal">
         Don't have an account?{" "}
          <Link to='/register'>
          <span className="font-medium text-red-900">
            Register
          </span>
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  );
};

export default Login;