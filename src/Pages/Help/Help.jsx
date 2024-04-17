/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import { Helmet } from "react-helmet-async";

const Help = () => {
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
      <div>
        <h1>EverGreen Help Center</h1>
        <p>
          Welcome to EverGreen's help center! Here you can find answers to
          frequently asked questions.
        </p>
        {/* Add FAQ content */}
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>How do I search for properties?</h3>
          <p>
            To search for properties, simply go to the{" "}
            <a href="/listings">Listings</a> page and use our search filters to
            find properties that match your criteria.
          </p>
        </div>
        <div className="faq">
          <h3>How do I contact support?</h3>
          <p>
            You can contact our support team by visiting the{" "}
            <a href="/contact">Contact</a> page and filling out the contact
            form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
