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
      {
        user && (

      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive }) => (isActive ? "font-bold underline" : "")}
        >
          Update Profile
        </NavLink>
      </li>
        )
      }
{user && (
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
      )}
 {user && (
        <li>
          <NavLink
            to="/payment"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : ""
            }
          >
            Payment
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
              isOpen ? " top-16 w-full z-50" : "hidden"
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
             <Link to="/login">
             <button className="btn text-white text-base bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]">Login</button>
             </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
