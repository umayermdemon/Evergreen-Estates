import { Typography } from "@material-tailwind/react";

const Clients = () => {
  return (
    <div className="my-6">
      <div className="relative h-[200px] w-full">
        <img
          src="https://i.ibb.co/NmNdVtc/safari-lodge.jpg"
          alt="image 1"
          className=" w-full h-[200px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div
            className="flex flex-row gap-8 md:gap-24 lg:gap-32 justify-start text-center "
            
          >
            <div 
           >
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              2500
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              Clients
            </Typography>
            </div>
            <div 
           >
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              3055
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              Booking
            </Typography>
            </div>
            <div 
           >
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              50
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              Swimming
            </Typography>
            </div>
            <div 
           >
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              1530
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="text-base md:text-xl lg:text-5xl font-rubik"
              >
              Apartment
            </Typography>
            </div>
            
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;


