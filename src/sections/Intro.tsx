import { useState } from "react";
import IconButton from "../components/buttons/IconButton";
import check from "../assets/checkicon.png";

const items = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah & Ajmal",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwin",
];

const Intro = () => {
  const [active, setActive] = useState(1);
  //To implement color & border change style in the buyer & supplier texts (Conditionally)
  return (
    <div
      className="bg-default py-[5rem] sm:px-3 md:px-3 lg:px-[10rem] xl:px-[10rem] 2xl:px-[10rem] flex flex-col 
    sm:gap-[2rem] md:gap-[2rem] lg:gap-[6rem] xl:gap-[6rem] 2xl:gap-[6rem]"
    >
      <div className="w-full flex flex-1 flex-wrap sm:gap-[1.6rem] md:gap-[1.6rem] lg:gap-0 xl:gap-0 2xl:gap-0">
        <div className="sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex flex-col gap-7 sm:pr-0 md:pr-0 lg:pr-[5rem] xl:pr-[5rem] 2xl:pr-[5rem]">
          <p className="sm:text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem] font-[800] text-center">
            Ready to dive into HABOT?
          </p>
          <p className="little leading-normal text-center">
            Signing up with HABOT open the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <div
            className="flex w-full justify-center sm:items-center md:items-start 
          lg:justify-start xl:justify-start 2xl:justify-start"
          >
            <IconButton label="Sign up Today!" onClick={() => {}} />
          </div>
        </div>

        {/*RENDERING CITY CARDS*/}
        <div
          className="grid sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]
           sm:pl-0 md:pl-0 lg:pl-[11rem] xl:pl-[11rem] 2xl:pl-[11rem]
         py-[1.4rem] grid-cols-2 gap-4"
        >
          {items.map((e, i) => (
            <div
              key={i}
              className="border border-orange-400 rounded-md flex justify-center text-center items-center
              sm:p-3 md:p-3 lg:p-0 xl:p-0 2xl:p-0 sm:text-[0.8rem] md:text-[0.9rem] 
              lg:text-inherit xl-text-inherit 2xl-text-inherit 2xl-text-inherit flex-1"
            >
              {e}
            </div>
          ))}
        </div>
      </div>

      {/*VIDEO SECTION*/}
      <div
        className="sm:py-[2.4rem] md:py-[2.4rem] lg:py-[6.8rem] xl:py-[6.8rem] 2xl:py-[6.8rem] 
        sm:px-[2rem] md:px-[2rem] lg:px-[3.7rem] xl:px-[3.7rem] 2xl:px-[3.7rem] bg-blue-950 
        w-full flex gap-[2rem] rounded-[0.270rem]
      sm:flex-col md:flex-col lg:flex-row 2xl:flex-row"
      >
        <div className="sm:w-[100%] md:w-[100%] lg:w-[52%] xl:w-[52%] 2xl:w-[52%]">
          <iframe
            className="w-full h-[18rem] rounded-[0.270rem]"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            allowFullScreen
          ></iframe>
        </div>
        <div className="sm:w-[100%] md:w-[100%] lg:w-[52%] xl:w-[52%] 2xl:w-[52%] sm:pt-0 md:pt-0 lg:pt-4 xl:pt-4 2xl:pt-4">
          <div className="sm:w-[100%] md:w-[100%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex justify-between px-[1rem] pb-[2rem]">
            <p
              onClick={() => setActive(1)}
              className={`tab-text ${
                active === 1
                  ? "text-orange-500 border-b-orange-500"
                  : "text-white"
              }`}
            >
              Buyer
            </p>
            <p
              onClick={() => setActive(2)}
              className={`tab-text ${
                active === 2
                  ? "text-orange-500 border-b-orange-500"
                  : "text-white"
              }`}
            >
              Supplier
            </p>
          </div>
          <div className="flex flex-col gap-[0.880rem] pl-[0.8rem]">
            <div className="flex gap-2">
              <img src={check} alt="" className="w-[1rem]" />
              <p className="little text-white">Post your requirements.</p>
            </div>
            <div className="flex gap-2">
              <img src={check} alt="" className="w-[1rem]" />

              <p className="little  text-white">
                Sit back for multiple suppliers to contact you.
              </p>
            </div>

            <div className="flex gap-2">
              <img src={check} alt="" className="w-[1rem] h-[1rem]" />
              <p className="little  text-white">
                Choose among the suppliers based on the ratings and reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
