import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  AOS.init()
  return (
    <Swiper
    data-aos="zoom-in" data-aos-duration="1000"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper h-[500px]"
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full relative rounded-3xl"
        >
          <div className="absolute md:top-32 top-16  max-sm:p-3 md:left-10  space-y-3">
            <h1 className="text-4xl md:text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="md:w-1/2 md:mx-auto max-sm:px-5 text-white max-sm:text-center">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <Link to="/login"
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Button Text</span>
              </span>
            </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full relative rounded-3xl"
        >
          <div className="absolute md:top-32 top-16  max-sm:p-3 md:left-10  space-y-3">
            <h1 className="text-4xl md:text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="md:w-1/2 md:mx-auto max-sm:px-5 text-white max-sm:text-center">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <Link to="/login"
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Button Text</span>
              </span>
            </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full relative rounded-3xl"
        >
          <div className="absolute md:top-32 top-16  max-sm:p-3 md:left-10  space-y-3">
            <h1 className=" text-4xl md:text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="md:w-1/2 md:mx-auto max-sm:px-5 text-white max-sm:text-center">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <Link to="/login"
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Button Text</span>
              </span>
            </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
          className="w-full h-full relative rounded-3xl" 
        >
          <div className="absolute md:top-32 top-16  max-sm:p-3 md:left-10  space-y-3">
            <h1 className=" text-4xl md:text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="md:w-1/2 md:mx-auto max-sm:px-5 text-white max-sm:text-center">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <Link to="/login"
              href="#_"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Button Text</span>
              </span>
            </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="autoplay-progress absolute bottom-10 md:bottom-16 text-xl right-10 md:right-20 text-white z-40 rounded-full p-1" slot="">
        <svg viewBox="0 0 48 48" ref={progressCircle}>  
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};
