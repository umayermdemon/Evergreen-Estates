import { Helmet } from "react-helmet-async";


const About = () => {
  return (
    <div>
      <div>
      <Helmet>
        <title>EverGreen | About</title>
      </Helmet>
      <div className="bg-gradient-to-r from-[#269064] to-[#30416D] ... text-center p-12 space-y-4">
        <h2 className="text-white text-5xl font-rubik font-bold animate__animated animate__bounce ">About</h2>
        <h4 className="font-rubik font-semibold text-black">
          About our company
        </h4>
      </div>

      <div className="my-8 lg:my-16">
        <h1 className="text-center font-rubik text-4xl lg:text-5xl mb-12 lg:mb-16 font-bold text-[#30416D]">Why Choose Us</h1>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-5  max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold font-rubik text-[#269064] col-span-2 mx-3 flex items-center justify-start lg:justify-center">Best <br /> Rent Service, <br /> enjoy your life</h1>
          <p className="col-span-3 text-justify font-rubik text-gray-600 mx-3 mt-4 ">
            Welcome to EverGreen, your premier destination for
            all your real estate needs. At EverGreen, we pride
            ourselves on providing exceptional service and expertise to our
            clients. With years of experience in the industry, our team of
            dedicated professionals is committed to helping you navigate the
            complex world of real estate with ease. Our About page is more than
            just a summary of our company history—it is a reflection of our
            values and dedication to our clients. We believe in transparency,
            integrity, and personalized service. Our team offers a wealth of knowledge
            about local markets, trends, and opportunities, ensuring that you
            have all the information you need to make informed decisions. But
            beyond our expertise, what truly sets us apart is our commitment to
            building lasting relationships with our clients. We take the time to
            understand your unique needs and goals, and we tailor our approach
            to meet them. Thank you for considering EverGreen
            for your real estate journey. We look forward to the opportunity to
            serve you and exceed your expectations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-12 lg:my-24">
        <div className="flex items-center justify-center my-8">
        <img src="https://i.ibb.co/ZWrTthm/About-User.jpg" alt="" className="border-2 border-[#269064] rounded-full p-4 w-80 " />
        </div>
       
        <div>
          <h1 className="text-center font-rubik font-bold text-3xl lg:text-5xl mb-4 text-[#269064]">Dr. Hamza Abbas</h1>
          <h4 className="text-center font-rubik font-bold text-base lg:text-xl mb-4 text-gray-600">Admin</h4>
          <p className="text-justify font-rubik text-gray-600 text-base w-[350px] md:w-[600px] lg:w-[700px] mx-auto">As the owner of a dynamic real estate company, you epitomize innovation, integrity, and client-centric service. Your astute leadership guides a team committed to excellence, offering unparalleled expertise in navigating the ever-evolving real estate landscape. With a passion for connecting people with their ideal properties, you create  experiences that transcend mere transactions. Beyond business, your dedication to community enrichment and philanthropy reflects a deeper commitment to societal well-being. Your unwavering drive, coupled with a genuine desire to exceed expectations, establishes you as a trusted authority and valued partner in the realm of real estate.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;