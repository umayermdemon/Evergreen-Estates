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
import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

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
      <NavLink to="/">
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-white font-rubik text-base"
        >
          Home
        </Typography>
      </NavLink>
      <NavLink to="/blog">
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-white font-rubik text-base"
        >
          Blog
        </Typography>
      </NavLink>
      <NavLink to="/about">
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-white font-rubik text-base"
        >
          About
        </Typography>
      </NavLink>
      <NavLink to="/contact">
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-white font-rubik text-base"
        >
          Contact
        </Typography>
      </NavLink>
      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-white font-rubik text-base"
        >
          Update Profile
        </Typography>
      </NavLink>
    </ul>
  );
}

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

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
            <Button size="sm" variant="text">
              <span className="text-white text-sm">Log In</span>
            </Button>
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
