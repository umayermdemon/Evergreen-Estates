import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Context/AuthProvider";
import userImg from "/user.png";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";



const UpdateProfile = () => {
  const { user, loader} = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    console.log(name, photoUrl);
    updateProfile(auth.currentUser,{
      displayName:name, photoURL:photoUrl
    })
    .then(
        location.reload()
    )
    .catch(error=>{
      console.error(error)
    })
  }
  

  if (loader) {
    return (
      <Card
        shadow={false}
        className="relative max-w-7xl mx-2 lg:mx-auto min-h-[calc(100vh-429px)]  bg-gradient-to-r from-[#f6d5f7]  to-[#fbe9d7] mt-3 flex justify-center items-center overflow-hidden text-center"
      >
        <CardHeader floated={false} shadow={false} color="transparent">
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
  // console.log(user);
  const { displayName, email, photoURL } = user;

  return (
    <div>
      <Helmet>
        <title>EverGreen | Update Profile</title>
      </Helmet>

      <Card
        color="transparent"
        shadow={false}
        className="max-w-7xl mx-auto min-h-[calc(100vh-417px)] bg-gray-200 mt-2 flex justify-center items-center"
      >
        <Typography
          color="black"
          className="mt-8 mb-2 text-xl md:text-2xl lg:text-3xl font-semibold leading-[1.5]"
        >
          Hey, <span className="text-red-400">{displayName}</span>!
        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-sm md:text-lg lg:text-lg mt-2 font-rubik font-bold "
        >
          Update Your Profile
        </Typography>
        <div className="relative py-6 px-6 md:px-12">
          <div className="flex  items-center justify-center">
            {photoURL ? (
              <Avatar
                size="xl"
                variant="circular"
                alt="Profile Image"
                className="border-2 border-white"
                src={photoURL}
              />
            ) : (
              <Avatar
                size="xl"
                variant="circular"
                alt={displayName}
                className="border-2 border-white"
                src={userImg}
              />
            )}
          </div>
          {email && (
            <Typography
              color="blue-gray"
              className="mb-2 mt-4 text-sm md:text-lg lg:text-lg font-rubik font-bold leading-[1.5]"
            >
              {email}
            </Typography>
          )}
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              variant="outlined"
              label="Name"
              name="name"
              // value={displayName}
            />

            <Input
              size="lg"
              label="Photo Url"
              variant="outlined"
              name="photoUrl"
              // value={photoURL}
            />
          </div>

          <button className="mt-4 py-2 px-4 text-white rounded-lg  bg-gradient-to-r from-[#269064] to-[#30416D] ... flex mx-auto">
            Save Changes
          </button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
