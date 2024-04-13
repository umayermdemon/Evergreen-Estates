

import useFetchData from "../../Hooks/useFetchData";
import Estate from "../Estate/Estate";

const Estates = () => {
  const {estates}=useFetchData();
  console.log(estates)
  return (
    <div  className="font-rubik my-4 md:my-8 lg:my-12">
      <div className="max-w-[700px] lg:max-w-[750px] mb-2 mx-2 lg:mb-4 lg:mx-auto text-center space-y-2 lg:space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold">Premier Estate Listings</h2>
        <p className=" text-sm lg:text-base">Explore exclusive real estate listings tailored to your needs. From luxurious estates to cozy homes, find your dream property with detailed descriptions and essential information. </p>
      </div>
     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {
        estates?.map((estate, idx)=><Estate key={idx} estate={estate}></Estate>)
      }
     </div>
    </div>
  );
};

export default Estates;