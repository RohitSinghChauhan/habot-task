import city from "../assets/citybg.jpg";
import ButtonView from "../components/buttons/ButtonView";
import InputView from "../components/InputView";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const HeroBanner = () => {
  return (
    <div
      className="sm:py-[3.5rem] md:py-[6rem] lg:py-[7rem] xl:py-[7rem] 2xl:py-[7rem] relative flex justify-center \
      items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${city})` }}
    >
      <div className="absolute backdrop-brightness-50 backdrop-saturate-200 h-full w-full z-0"></div>
      <div className="flex flex-col sm:gap-[1.4rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem] items-center z-10">
        <div className="text-white sm:pb-0 md:pb-0 lg:pb-1 xl:pb-1 2xl:pb-1 flex justify-center items-center flex-col gap-[0.6rem]">
          <p className="sm:text-[1.9rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] 2xl:text-[3rem] font-semibold">
            Are You a Supplier?
          </p>
          <p className="sm:text-[1.4rem] md:text-[2.8rem] lg:text-[2.930rem] xl:text-[2.930rem] 2xl:text-[2.930rem] text-center">
            Explore Matching Opportunities.
          </p>
        </div>

        {/*INPUT FIELDS HERE*/}
        <div
          className="sm:w-[80%] md:w-[80%] lg:w-[47.6rem] xl:w-[47.6rem] 2xl:w-[47.6rem] flex gap-2
        sm:h-full md:h-full lg:h-12 xl:h-12 2xl:h-12 sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row"
        >
          <InputView
            placeholder="Search your required service here"
            icon={<BusinessCenterIcon className="text-orange-500" />}
          />
          <InputView
            placeholder="Search your desired location here"
            icon={<LocationOnIcon className="text-orange-500" />}
          />
          <ButtonView
            label="Search"
            onClick={() => {}}
            style="sm:hidden md:hidden lg:inline-flex xl:inline-flex 2xl:inline-flex"
          />
          <div className="sm:inline-flex md:inline-flex lg:hidden xl:hidden 2xl:hidden w-full justify-center">
            <ButtonView label="Search" onClick={() => {}} />
          </div>
        </div>

        {/*TEXTS AFTER THE FIELDS*/}
        <div className="flex gap-3 text-white flex-wrap justify-center">
          <p className="text-b">Are you a buyer?</p>
          <p className="text-[0.8rem] text-gray-200 underline">
            Click here if you are looking to post a requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
