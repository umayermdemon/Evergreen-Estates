import {  Button, Carousel, Typography } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Banner = () => {
  return (
    <div>
      <Carousel transition={{ duration: 1.5}}>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/R7N4BSR/beach-front.jpg"
          alt="image 1"
          className=" w-full h-[250px] md:h-[300px] lg:h-[835px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-1 md:mb-3 lg:mb-4 text-sm md:text-base lg:text-xl"
            >
              Good Service is our passion
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              Awesome apartment Villa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 md:mb-4 lg:mb-12 opacity-80 text-xs md:text-base lg:text-lg"
            >
              Indulge in Luxury: Book Your Dream Stay Today! Explore our exquisite hotels for a memorable experience like no other. Book now!
            </Typography>
            <div className="flex justify-center gap-2 ">
              <Button size="lg" color="white" className="hidden lg:block">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/KF6G3Tx/mountaine-Chalet.jpg"
          alt="image 2"
          className=" w-full h-[250px] md:h-[300px] lg:h-[835px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-1 md:mb-3 lg:mb-4 text-sm md:text-base lg:text-xl"
            >
              Good Service is our passion
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              Awesome apartment Villa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 md:mb-4 lg:mb-12 opacity-80 text-xs md:text-base lg:text-lg"
            >
              Indulge in Luxury: Book Your Dream Stay Today! Explore our exquisite hotels for a memorable experience like no other. Book now!
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.ibb.co/NmNdVtc/safari-lodge.jpg"
          alt="image 3"
          className=" w-full h-[250px] md:h-[300px] lg:h-[835px] object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-1 md:mb-3 lg:mb-4 text-sm md:text-base lg:text-xl"
            >
              Good Service is our passion
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl"
            >
              Awesome apartment Villa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-4 md:mb-4 lg:mb-12 opacity-80 text-xs md:text-base lg:text-lg"
            >
              Indulge in Luxury: Book Your Dream Stay Today! Explore our exquisite hotels for a memorable experience like no other. Book now!
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to='#estates'>
              <Button size="lg" color="white">
                Explore
              </Button></Link>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
