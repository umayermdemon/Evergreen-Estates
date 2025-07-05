import {
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { IoLocation, IoMail} from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import "animate.css";
import Leaflet from "../../components/Leaflet/Leaflet";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>EverGreen | Contact</title>
      </Helmet>
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
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-rubik font-bold text-[#30416D]" data-aos="fade-left" data-aos-duration='1000'>
          Map & Directions
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-rubik font-bold text-gray-600">
          Find out how to find us from your current location
        </p>
        <div className="mx-2">
         <Leaflet/>
        </div>

        <div className="py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-rubik font-bold text-[#30416D]" data-aos="fade-left" data-aos-duration='1000'>
            Contact us <br /> live
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-5 ">
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 md:gap-16 lg:gap-8 col-span-2 pt-8 pb-8 lg:pt-16 justify-center lg:justify-start items-center lg:items-start text-left" data-aos="fade-right" data-aos-duration='1000'>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <IoLocation className="text-[#30416D] text-2xl" />
                  <h1 className="text-[#30416D] text-2xl font-rubik font-bold">
                    Address
                  </h1>
                </div>
                <address>
                  121 King St, Melbourne VIC <br />
                  3000, Australia
                </address>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <IoMail className="text-[#30416D] text-2xl"/>
                <h1 className="text-[#30416D] text-2xl font-rubik font-bold">
                  Mail
                </h1>
                </div>
                <h4>yourmail@gmail.com</h4>
                <h4>houserentmail@gmail.com</h4>
              </div>
              <div className="flex flex-col gap-2 ">
               <div className="flex flex-row items-center  gap-2 mb-2">
                <FaPhoneVolume className="text-[#30416D] text-2xl"/>
               <h1 className="text-[#30416D] text-2xl font-rubik font-bold">
                  Call
                </h1>
               </div>
                <h4>+88 0215469875</h4>
                <h4>666 35874692050</h4>
              </div>
            </div>
            <div className="col-span-3 mx-2 md:mx-12" >
              <Typography variant="h3" color="blue-gray" data-aos="zoom-in" data-aos-duration='1000'>
                Have a question
              </Typography>
              <div className="mt-4 lg:w-[700px]">
                <Card shadow={false} className=" bg-gray-100 p-4 lg:p-8">
                  <Typography variant="h4" color="blue-gray" data-aos="fade-up" data-aos-duration='1000'>
                    Send Us A email
                  </Typography>

                  <form className="mt-8  ml-6 md:ml-20 lg:ml-2 flex flex-col gap-6 items-center justify-center lg:w-[600px] md:w-[500px] sm:w-96" data-aos="zoom-in" data-aos-duration='1000'>
                    <Input label="Name" variant="standard" required />

                    <Input
                      size="lg"
                      label="Email"
                      variant="standard"
                      required
                    />

                    <Input
                      type="text"
                      size="lg"
                      variant="standard"
                      label="Website"
                      required
                    />

                    <Textarea
                      size="lg"
                      variant="standard"
                      label="Your Message"
                    />

                    <button className="mt-2 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto">
                      Submit
                    </button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
