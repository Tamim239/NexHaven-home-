import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaBath, FaBed, FaChartArea } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export const FeaturedDetails = () => {
  const [details, setDetails] = useState([]);

  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  // console.log(data, id)

  useEffect(() => {
    const isMatch = data.find((match) => match.id === idInt);
    if (isMatch) {
      setDetails(isMatch);
    }
  }, [data, idInt]);
  const { facilities } = details;
  console.log(details);

  return (
    <div  className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
      <a
        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group  lg:grid lg:grid-cols-12 dark:bg-gray-50"
      >
        <img
          src={details?.image}
          alt=""
          className="object-cover w-full rounded h-full lg:col-span-7 dark:bg-gray-500"
        />
        <div className="p-3 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {details?.estate_title}
          </h3>
          <div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-bold leading-snug">
                  These are just a few examples :
                </p>
                <div className="*:flex *:items-center *:gap-2 *:text-xl flex items-center justify-between gap-4 px-3">
                  <div>
                    <FaBed className="text-[#f85830]" />
                    <p>{details?.bedrooms} Bed</p>
                  </div>
                  <div>
                    <FaBath className="text-[#f85830]" />
                    <p>{details?.bathrooms} Bath</p>
                  </div>
                  <div>
                    <FaChartArea className="text-[#f85830]" />
                    <p>{details?.area}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-bold leading-snug">
                  There are more facilities:
                </p>
                <p className="leading-snug flex gap-2 items-center justify-around">
                  {facilities?.map((facility, index) => (
                    <div
                    key={index}
                      className=" py-2 px-2 rounded-xl bg-[#343131] text-white"
                    >
                      <p>{facility}</p>
                    </div>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-bold leading-snug">
                  Segment Name and Location:
                </p>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <CiLocationOn className="text-xl"/> {details?.location}
                  </p>
                  <p className=" py-2 px-1 rounded-xl bg-[#343131] text-white text-center">
                    {details?.segment_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>{details?.description}</p>
        </div>
      </a>
    </div>
  );
};
