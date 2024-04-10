import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setOpen] = useState(false);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Update Profile
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/user-profile"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            User Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            Reviews
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="md:w-4/5 mx-auto items-center my-5">
      <div className="flex justify-between">
        <div className="flex gap-4 flex-row-reverse items-center">
          <h1 className="text-2xl font-bold">
            Nex
            <span className="bg-gradient-to-r from-[#ffd519] to-[#a09e9c] bg-clip-text text-transparent">
              Haven
            </span>
          </h1>
          <div className="md:hidden text-3xl" onClick={() => setOpen(!isOpen)}>
            {isOpen === true ? <IoMdClose /> : <FiMenu />}
          </div>
        </div>
        <ul
          className={`md:flex *:ml-4 text-lg items-center absolute md:static
            ${
              isOpen ? "top-16 w-full z-50" : "hidden"
            } max-sm:bg-slate-800 max-sm:text-white`}
        >
          {navLinks}
        </ul>
        <div>
          {user ? (
            <div className="flex gap-5 items-center">
              <div className="my-anchor-element">
                <img
                  src={user.photoURL || ""}
                  alt="profile image"
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <Tooltip anchorSelect=".my-anchor-element" place="left">
                  {user?.displayName || "your Name"}
                </Tooltip>
              </div>
              <button
                onClick={() => logOut()}
                className="btn bg-gray-500 text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-32 h-32 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Login</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            // <Link to="/login"
            //   href="#_"
            //   className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            // >
            //   <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            //   <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            //     <span className="relative text-white">Button Text</span>
            //   </span>
            // </Link>
            // <button className="btn bg-gray-500 text-white">
            //   <Link to="/login">Login</Link>

            // </button>
          )}
        </div>
      </div>
    </nav>
  );
};
