import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

export const City = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#FBECED] rounded-3xl">

      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image1}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Paris</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              10 House
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image2}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">New York</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              30 House
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image3}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">London</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              20 House
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image4}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Verona</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              60 House
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image5}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Tokio</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              27 House
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-xs p-6 sm:px-12 ">
        <img
          src={image6}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">England</h2>
            <p className="px-5 text-xl sm:text-base ">
              07 House
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
