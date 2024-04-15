import {  Card, Input, Typography } from "@material-tailwind/react";


const UpdateProfile = () => {
  return (
    <div>
      <Card color="transparent" shadow={false} className="max-w-7xl mx-auto min-h-[calc(100vh-431px)] bg-gray-200 mt-2 flex justify-center items-center">
      <Typography variant="h4" color="blue-gray" className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
        Update Your Profile
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
            size="lg"
            label="Photo Url"
            variant="outlined"
          />
        </div>
        
        <button className="mt-2 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto" >
          Update
        </button>
       
      </form>
    </Card>
    </div>
  );
};

export default UpdateProfile;