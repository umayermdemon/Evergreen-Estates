import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";

const Register = () => {
  return (
    <div>
       <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
       Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
        <Input
            size="lg"
            variant="outlined" label="Name"
            
          />
          
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
        <Checkbox
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
        <Button className="mt-6" fullWidth>
          sign up
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

export default Register;