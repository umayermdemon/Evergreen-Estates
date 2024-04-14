import {  Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DetailsEstate = () => {
  const [details, setDetails]=useState()
  const {id}=useParams()
  const estates=useLoaderData();

  useEffect(()=>{
    const findEstate=estates.find(estate=>estate.id===+id);
    setDetails(findEstate)
  },[estates, id])

  const {
    image,
    estate_title,
    segment_name,
    description,
    rating,
    price,
    bedrooms,
    location,
    area,
    facilities
  } = details || {};
  
  return (
    <div>
     
     <Card className=" min-h-[calc(100vh-433px)] max-w-6xl mx-auto flex-col lg:flex-row  mt-4">
        <CardHeader
          shadow={false}
          floated={false}
          className=" m-0 mx-auto w-[96%] lg:w-2/5 shrink-0 "
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase font-rubik">
            {segment_name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 font-rubik">
          {estate_title}
          </Typography>
          <Typography color="gray" className="mb-2 font-rubik font-normal">
            {description}
          </Typography>

          <div className="flex flex-row justify-between font-rubik">
            <h2 className="text-black"><span className="font-semibold text-lg text-[#30416D]">Rent:</span> {price}</h2>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal font-rubik"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </Typography>
          </div>

          <div className="flex flex-row gap-4 mt-2 items-center">
            <p className="text-xl font-bold font-rubik text-[#30416D]">Facilities:</p>
            <h1 className="flex gap-2 md:gap-4 lg:gap-4 text-[#23BE0A] font-rubik">
              {
                facilities?.map((item, idx)=><p key={idx}>{item}</p>)
              }
            </h1>
          </div>

          <div className="flex flex-row justify-between mt-4 items-center">
            <p className="text-black"><span className="font-semibold text-lg text-[#30416D] font-rubik">Area:</span> {area}</p>
            <p className="text-black"><span className="font-semibold text-lg text-[#30416D] font-rubik">Bedrooms:</span> {bedrooms}</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-black"><span className="font-semibold text-lg text-[#30416D] font-rubik">Location:</span> {location}</p>
          </div>
        </CardBody>
      </Card>
     </div>
  );
}

export default DetailsEstate;