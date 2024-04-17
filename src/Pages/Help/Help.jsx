/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import "animate.css";
import React from "react";
import { Helmet } from "react-helmet-async";

function Icon({ id, open }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


const Help = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <Helmet>
        <title>EverGreen | Help</title>
      </Helmet>
      <div className="bg-gradient-to-r from-[#269064] to-[#30416D] ... text-center p-12 space-y-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-rubik font-bold animate__animated animate__bounce">
        Help center!
        </h2>
      </div>
      <div className="max-w-3xl mx-auto py-4">
        <h1 className="text-center font-rubik font-extrabold  text-3xl">FAQs</h1>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>How do I search for properties on EverGreen?</AccordionHeader>
        <AccordionBody className='text-lg'>
        To search for properties, navigate to the "Listings" page and utilize our search filters to find properties based on your preferences such as location, price range, property type, and more.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Can I save my favorite properties for later viewing?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        Yes, you can! Simply create an account on EverGreen and log in to save properties to your favorites list for easy access later.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        How do I schedule a viewing for a property?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        Once you've found a property you're interested in, contact the listing agent directly through the property details page to schedule a viewing at a convenient time for you.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        What financing options are available for purchasing a property?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        EverGreen works with various lenders to provide financing options such as mortgages and loans. Contact us for more information on financing options tailored to your needs.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Are there any upcoming open houses I can attend?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        Check our "Events" page regularly for information on upcoming open houses and other real estate events in your area.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        How do I list my property for sale or rent on EverGreen?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        If you're a property owner or agent, you can list your property on EverGreen by creating an account and following the simple steps to add your property details and images.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
        What information should I provide when contacting support for assistance?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        When contacting EverGreen support, please provide your name, email address, a detailed description of your issue or inquiry, and any relevant screenshots or documentation to assist us in resolving your query promptly.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(8)}>
        Is there a fee for using EverGreen's services?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        EverGreen offers both free and premium services. Basic features such as property search and listing are free to use, while premium services may incur fees. Contact us for more information on premium services.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(9)}>
        How can I update my account information on EverGreen?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        Log in to your EverGreen account and navigate to the "Update Profile" section, where you can update your personal information, password, and communication preferences.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(10)}>
        What sets EverGreen apart from other real estate websites?
        </AccordionHeader>
        <AccordionBody className='text-lg'>
        EverGreen is committed to providing a seamless and personalized real estate experience. Our user-friendly interface, comprehensive property listings, dedicated support team, and innovative features make us the preferred choice for buyers, sellers, and renters alike.
        </AccordionBody>
      </Accordion>
      </div>
      
    </div>
  );
};

export default Help;
