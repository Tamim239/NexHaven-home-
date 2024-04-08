import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/user-profile">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const profileNavLinks = <>
  <li><NavLink to="/profile">Profile</NavLink></li>
 <li> <NavLink to="/signOut">SignOut</NavLink></li>
  </>

  return (
    <nav className="md:w-4/5 mx-auto items-center">
      <div className="flex justify-between">
        <div className="flex gap-4 flex-row-reverse items-center">
          <h1 className="text-2xl font-bold">NexHaven</h1>
          <div className="md:hidden text-3xl" onClick={()=> setOpen(!isOpen)}>
            {
              isOpen === true ?
              <IoMdClose />
              :
              <FiMenu />
            }
          </div>
        </div>
        <ul className={`md:flex *:ml-4 text-lg items-center absolute md:static
            ${isOpen ? 'top-10 w-full': 'hidden'} max-sm:bg-slate-800 max-sm:text-white`}>
              {navLinks}
              </ul>
        <div className="w-10 relative max-sm:mr-10">
          <img onClick={()=> setProfile(!profile)}
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="profile image"
            className="rounded-full ml-3"
          />
         <div className="absolute">
         {
            profile === true ? 
            <ul className="text-lg md:static text-center p-1
             max-sm:bg-red-50 max-sm:text-black">
              {profileNavLinks}
              </ul>
              :
              null
          }
         </div>
        </div>
      </div>
    </nav>
  );
};
