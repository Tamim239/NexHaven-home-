export const NewsLetter = () => {
  return (
    <section className="py-6 bg-[#FBECED] my-10">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">
        Get Your Dream House
        </h1>
        <p className="text-xl font-medium text-center">
          Find out about events and other news
        </p>
        <div className="flex items-center">
        <input type="email" placeholder="email here" className="rounded-l-xl py-2 px-4 w-full pr-8 max-w-xs" />
        <button className="py-2 px-4 bg-black text-white text-base rounded-r-xl">Subscribe</button>
        </div>
      </div>
    </section>
  );
};
