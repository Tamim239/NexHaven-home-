import { useEffect, useState } from "react";
import { Feature } from "./Feature";
import "aos/dist/aos.css";
import AOS from "aos";

export const FeaturedProperties = () => {
  const [featured, setFeatured] = useState([]);
  AOS.init();
  useEffect(() => {
    fetch("/real.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);
  console.log(featured);
  return (
    <div className="my-10">
      <div className="text-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-3xl font-bold "
        >
          {" "}
          <span className="border-b-4 border-red-600">Featured Properties</span>
        </h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {featured.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};
