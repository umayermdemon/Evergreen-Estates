import Leaflet from "../Leaflet/Leaflet";
import "animate.css";
const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#269064] to-[#30416D] ... text-center p-12 space-y-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-rubik font-bold animate__animated animate__bounce">
          Contact
        </h2>
        <h4 className="font-rubik font-semibold text-black ">
          Contact with us
        </h4>
      </div>
      <div className="max-w-7xl mx-auto text-center mt-8 space-y-2">
        <h2 className="text-lg md:text-xl lg:text-2xl font-rubik font-bold text-gray-500">
       
          Find Our location
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-rubik font-bold text-[#30416D]">
          Map & Directions
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-rubik font-bold text-gray-600">
          Find out how to find us from your current location
        </p>
        <div className="mx-2">
          <Leaflet />
        </div>

        <div className="py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-rubik font-bold text-[#30416D]">Contact us <br /> live</h1>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
