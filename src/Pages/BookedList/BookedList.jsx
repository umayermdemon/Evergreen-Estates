import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getEstates } from "../../Utils/localStorage";
import Booked from "../Booked/Booked";

const BookedList = () => {
  const estates = useLoaderData();

  const [displayEstates, setDisplayEstates] = useState([]);

  useEffect(() => {
    const storedEstatesId = getEstates()
    if (estates.length > 0) {
      const bookedEstates = [];
      for (const id of storedEstatesId) {
        const estate = estates.find((job) => job.id === id);
        bookedEstates.push(estate);
      }
      setDisplayEstates(bookedEstates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estates]);
  return (
    <div>
      <Helmet>
        <title>EverGreen | Booked List</title>
      </Helmet>
      <div className="bg-gradient-to-r from-[#269064] to-[#30416D] ... text-center p-4 space-y-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-rubik font-bold animate__animated animate__bounce">
          Booked List
        </h2>
        <h4 className="tex font-rubik font-semibold text-black ">
          Explore Your Booked List with Ease
        </h4>
      </div>
     
      <div className="bg-gray-50 mx-auto mt-1 rounded-lg max-w-7xl min-h-[calc(100vh-539px)]" >
          {
            displayEstates.map((estate,idx)=><Booked key={idx} estate={estate}></Booked>)
          }
      </div>
    </div>
  );
};

export default BookedList;
