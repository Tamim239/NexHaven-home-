import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
    </>
  );

  return (
    <nav className="md:w-4/5 mx-auto items-center my-5">
      <div className="flex justify-between">
        <div className="flex gap-4 flex-row-reverse items-center">
          <h1 className="text-2xl font-bold">NexHaven</h1>
          <div className="md:hidden text-3xl" onClick={() => setOpen(!isOpen)}>
            {isOpen === true ? <IoMdClose /> : <FiMenu />}
          </div>
        </div>
        <ul
          className={`md:flex *:ml-4 text-lg items-center absolute md:static
            ${
              isOpen ? "top-10 w-full" : "hidden"
            } max-sm:bg-slate-800 max-sm:text-white`}
        >
          {navLinks}
        </ul>
        <div className="w-10 h-10 flex gap-5 items-center">
          <img
            src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            alt="profile image"
            className="rounded-full"
          />
          {user ? (
             <button 
             onClick={()=> logOut()}
             className="btn bg-gray-500 text-white">
             Sign Out
             {/* <NavLink to="/login" className={({isActive}) => isActive ? "font-bold underline" : ""}>Login</NavLink> */}
           </button>
          ) : (
            <button className="btn bg-gray-500 text-white">
              <Link to="login">Login</Link>
              {/* <NavLink to="/login" className={({isActive}) => isActive ? "font-bold underline" : ""}>Login</NavLink> */}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
