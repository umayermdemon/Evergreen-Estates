import { Button, Card, Input, Typography } from "@material-tailwind/react";


const Login = () => {
  return (
    <div>
      <Card color="transparent" shadow={false} className="max-w-7xl mx-auto min-h-[calc(100vh-431px)] bg-gray-200 mt-2 flex justify-center items-center">
      <Typography  className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
       Login
      </Typography>
      <Typography className="mt-1 font-normal text-black">
        Nice to meet you! Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            type="email"
            label="Email"
            variant="outlined"
          />
          <Input
            type="password"
            size="lg"
            label="password"
            variant="outlined"
          />
        </div>
        
        <Button size="lg" className="mt-6 bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto" >
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Register
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  );
};

export default Login;