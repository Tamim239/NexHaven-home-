import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import image1 from "../../assets/image1.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

export const TownHouse = () => {
  AOS.init();
  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold my-5">New York</h1>
      <div>
        <div className="">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={img1}
            alt=""
            className=" md:h-[500px] w-full object-cover object-bottom rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={img2}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
          <div>
            <img
              src={img3}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
          <div>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={img4}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={img5}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
          <div>
            <img
              src={img6}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
          <div>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={image1}
              alt=""
              className="h-96 w-full hover:scale-110 hover:duration-500 hover:ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
