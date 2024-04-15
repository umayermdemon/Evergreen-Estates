import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthProvider";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <FaRegCircleUser className="text-4xl" />
        </Button>
      </MenuHandler>
    </Menu>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4  flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          Home
        </Typography>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          Blog
        </Typography>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          About
        </Typography>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          Contact
        </Typography>
      </NavLink>
      <NavLink
        to="/updateProfile"
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          Update Profile
        </Typography>
      </NavLink>
      <NavLink to='/profile'
        className={({ isActive }) =>
          isActive
            ? "text-[#23BE0A] border border-[#5BA600] p-2 lg:p-3 rounded-xl font-medium text-sm lg:text-base pr-2 lg:pr-4"
            : "flex text-sm lg:text-base items-center gap-2  text-white pr-2 lg:pr-4"
        }
      >
        <Typography className="font-medium  font-rubik text-base">
          Profile
        </Typography>
      </NavLink>
    </ul>
  );
}

const NavBar = () => {
  const {user, logOut}=useContext(AuthContext)
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleLogout=()=>{
    logOut()
  }

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  return (
    <div className="bg-[#0B2B4F] sticky top-0 z-50 p-2">
      <Navbar className=" mx-auto max-w-7xl bg-[#0B2B4F] border-none p-2  lg:pl-4">
        <div className="relative mx-auto flex items-center justify-between text-white">
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className=" mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 font-rubik cursor-pointer py-1.5 font-bold text-2xl text-white "
          >
            Ever<span className="text-[#5BA600]">Green</span>
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="flex">
            {
             user ?
             <Button onClick={handleLogout} size="sm" variant="text">
               <span className="text-white text-sm">Log Out</span>
             </Button>
             :
             <Link to='/login'>
             <Button size="sm" variant="text">
               <span className="text-white text-sm">Log In</span>
             </Button>
           </Link>
            }
            <ProfileMenu />
          </div>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
