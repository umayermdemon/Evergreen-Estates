import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import userImg from '/user.png'
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <Card
        shadow={false}
        className="relative max-w-7xl mx-2 lg:mx-auto min-h-[calc(100vh-429px)]  bg-gradient-to-r from-[#f6d5f7]  to-[#fbe9d7] mt-3 flex justify-center items-center overflow-hidden text-center"
      >
        
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            as="div"
            variant="h1"
            className="mb-4 h-3 w-56 rounded-full bg-gray-300"
            
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-full rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
          
        </CardBody>
        
      </Card>
    );
  }
  console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <Helmet>
        <title>EverGreen | My Profile</title>
      </Helmet>
      <Card
        shadow={false}
        className="relative max-w-7xl mx-2 lg:mx-auto min-h-[calc(100vh-421px)] bg-gray-200 mt-3 flex justify-center items-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-gradient-to-r from-[#f6d5f7]  to-[#fbe9d7] bg-cover bg-center"
        >
          
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          {
            photoURL?<Avatar
            size="xl"
            variant="circular"
            alt="Profile Image"
            className="border-2 border-white"
            src={photoURL}
          />
          :
          <Avatar
            size="xl"
            variant="circular"
            alt={displayName}
            className="border-2 border-white"
            src={userImg}
          />
          }
          <Typography
            
            color="black"
            className="mt-8 mb-2 text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.5]"
          >
            Name: {displayName}
          </Typography>
          {
            email && <Typography color="black" className="mb-4 text-md md:text-base lg:text-xl font-semibold leading-[1.5]">
            Email: {email}
          </Typography>
          }
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
