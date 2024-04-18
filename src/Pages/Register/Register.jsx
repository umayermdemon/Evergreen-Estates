import {  Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser} = useContext(AuthContext);
  const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const condition=form.get("terms")
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    console.log(name, email, password, photoUrl, condition);

    if (!condition) {
      toast.warn("Please check the terms and conditions.")
      return;
    } 
    else if (password.length < 6) {
      toast.warn("Invalid password format")
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      toast.warn("Invalid password format")
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.warn("Invalid password format")
      return;
    }

      
   
     
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful!");
        updateProfile(result.user,{
          displayName:name, photoURL:photoUrl
        })
        .then(
            navigate('/')
        )
        .catch(error=>{
          console.error(error)
        })
      })
      .catch((error) => {
        console.error(error);
        toast.error("You are already registered. Please Login")
      });

      
      
  };

  return (
    <div className="my-2">
      <Helmet>
        <title>EverGreen | Register</title>
      </Helmet>
       
      <Card
        color="transparent"
        shadow={false}
        
        className="max-w-7xl mx-auto min-h-[calc(100vh-417px)] px-24 bg-gradient-to-r from-[#f6d5f7]  to-[#fbe9d7]  mt-2 flex justify-center items-center"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
          Register
        </h2>
        <h4 className="mt-1 font-normal text-black">
          Nice to meet you! Enter your details to register.
        </h4>
        <form
          onSubmit={handleRegister}
          className="mt-2 mb-1 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              name="name"
              variant="outlined"
              label="Name"
              required
            />
            <Input
              size="lg"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              required
            />
            <Input
              size="lg"
              name="photoUrl"
              type="text"
              label="Photo Url"
              variant="outlined"
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
              <p className="text-[11.5px] text-red-400 mt-2">**Password must contain at least 6 characters & 1 uppercase, 1 lowercase.</p>
            </div>
          </div>
          <Checkbox
            name="terms"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <div>
            <button className="mt-2 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto">
              Register
            </button>
          </div>
          <Typography color="gray" className="mt-3 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login">
              <span className="font-medium text-blue-900">Login</span>
            </Link>
          </Typography>
        </form>
      </Card>
      
    
     
    </div>
  );
};

export default Register;
