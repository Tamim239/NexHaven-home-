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

export const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
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
      className="mySwiper md:h-[500px]"
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full relative"
        >
          <div className="absolute top-32 left-10  space-y-3">
            <h1 className="text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="w-1/2 mx-auto text-white">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <button className="btn btn-secondary">Get Started</button>
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
          className="w-full h-full relative"
        >
          <div className="absolute top-32 left-10  space-y-3">
            <h1 className="text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="w-1/2 mx-auto text-white">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <button className="btn btn-secondary">Get Started</button>
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
          className="w-full h-full relative"
        >
          <div className="absolute top-32 left-10  space-y-3">
            <h1 className="text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="w-1/2 mx-auto text-white">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${image4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full relative"
        >
          <div className="absolute top-32 left-10  space-y-3">
            <h1 className="text-6xl text-[#FFEC51] text-center font-bold">
              Welcome Home <br /> to Nex<span className="bg-gradient-to-r from-[#f79b11] to-[#454242] bg-clip-text text-transparent">Haven</span>
            </h1>
            <p className="w-1/2 mx-auto text-white">
              Discover the epitome of modern living at NexHaven. Immerse
              yourself in a vibrant community where comfort meets
              convenience.Explore our range of luxurious amenities, spacious
              floor plans, and unparalleled service. Welcome home to a lifestyle
              redefined.
            </p>
            <div className="flex justify-center">
            <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="autoplay-progress absolute top-1/2 bg-red-500" slot="">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};
