import { FaBath, FaBed, FaChartArea } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export const Feature = ({ feature }) => {
  const {
    id,
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
              {status}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
        <p className=" py-2 px-2 rounded-xl text-center  text-2xl font-semibold">
          {segment_name}
        </p>
        <div className="flex items-center text-xs ">
            <span className="text-base bg-[#ffd519] p-2 rounded-xl font-bold">
              {price}
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
        </div>
        <hr />
      </div>
      <div className="text-right mt-2">
        <Link to={`/feature/${id}`}>
          <button className="btn bg-gradient-to-r from-[#f79b11] to-[#454242] text-white flex-grow">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

Feature.propTypes ={
  feature: PropTypes.object
}