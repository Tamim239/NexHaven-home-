import { FaBath, FaBed, FaChartArea } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Feature = ({ feature }) => {
  const {
    id,
    facilities,
    location,
    area,
    status,
    price,
    estate_title,
    image,
    bedrooms,
    bathrooms,
    segment_name,
  } = feature;

  return (
    <div className=" p-2 shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="space-y-2">
        <div className="space-y-2 relative">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs absolute top-0 left-3">
            <span className="text-xl bg-[#ffd519] p-2 rounded-xl font-bold">
              For {status}
            </span>
          </div>
          <div className="flex items-center text-xs absolute bottom-0 right-0">
            <span className="text-xl bg-[#ffd519] p-2 rounded-xl font-bold">
              For {price}
            </span>
          </div>
        </div>
        <div className="*:flex *:items-center *:gap-2 *:text-xl flex items-center justify-between px-3">
        

          <div>
            <FaBed className="text-[#f85830]" />
            <p>{bedrooms} Bed</p>
          </div>
          <div>
            <FaBath className="text-[#f85830]" />
            <p>{bathrooms} Bath</p>
          </div>
          <div>
            <FaChartArea className="text-[#f85830]" />
            <p>{area}</p>
          </div>
        </div>
        <div className=" space-y-2">
          <h1 className="text-2xl font-medium">{estate_title}</h1>
          <div>
            <p className="flex items-center gap-2">
              <CiLocationOn /> {location}
            </p>
          </div>
          <div className="flex gap-2 items-center justify-around">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className=" py-2 px-2 rounded-xl bg-[#343131] text-white"
              >
                <p>{facility}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
      <div className="text-right mt-2">
        <p className=" py-2 px-2 rounded-xl bg-[#343131] text-white text-center">
          {segment_name}
        </p>
        <Link to={`/feature/${id}`}>
          <button className="btn bg-gradient-to-r from-[#f79b11] to-[#454242] text-white flex-grow">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};
