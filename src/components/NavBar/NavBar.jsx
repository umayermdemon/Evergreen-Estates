import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

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
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          
        </Button>
      </MenuHandler>
    </Menu>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          Home
        </Typography>
      </NavLink>
      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          Blog
        </Typography>
      </NavLink>
      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          About
        </Typography>
      </NavLink>
      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          Contact
        </Typography>
      </NavLink>

      <NavLink>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
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
    <div>
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
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
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            EverGreen
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="flex">
            <Button size="sm" variant="text">
              <span>Log In</span>
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
