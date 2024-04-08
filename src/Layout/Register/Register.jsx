import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [handleError, setHandleError] = useState("");

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photoURL } = data;
    console.log(name, email, password, photoURL);
    if (!/[A-Z]/.test(password)) {
      return setHandleError("Ensure at least one uppercase letter exists");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-2 my-6 rounded-xl text-white bg-[#111827]">
      <h1 className="text-2xl font-bold text-center">
        Create New Account Here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true })}
            placeholder="Your name"
            className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.name && (
            <span className="text-red-600">This name field is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block dark:text-gray-600">
            PhotoURL
          </label>
          <input
            type="text"
            name="photoURL"
            {...register("photoURL")}
            id="photoURL"
            placeholder="photoURL here"
            className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            id="email"
            placeholder="Email address"
            className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          {errors.email && (
            <span className="text-red-600">This email field is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <div className="flex items-center relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-4 py-3 text-black rounded-md  dark:text-gray-800 focus:dark:border-violet-600"
              // fdprocessedid="wqph7e"
            />
            <span
              className="absolute text-black right-0 mr-2 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-600">
              This password field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm bg-green-600"
          //   fdprocessedid="mtmex"
        >
          Register
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link to="/login" className="underline ml-2">
          Login
        </Link>
      </p>
    </div>
  );
};
