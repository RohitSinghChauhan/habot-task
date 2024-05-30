import { useState } from "react";
import hlogo from "../../assets/habot-logo.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); //Defined for open/close menu for small screens

  return (
    <div className="relative z-20">
      <div
        className="py-[0.9rem] sm:px-[0.8rem] md:px-[0.8rem] lg:px-16 xl:px-16 2xl:px-16 flex justify-between 
      items-center z-20 bg-white"
      >
        <img src={hlogo} alt="web-logo" className="w-[8rem]" />

        <div className="sm:hidden md:flex lg:flex xl:flex 2xl:flex gap-8 items-center bg-city">
          <div className="flex items-center gap-8">
            <p className="link">Find Suppliers</p>
            <div className="flex gap-1 items-center">
              <p className="link">Find Service Tags</p>
              <KeyboardArrowDownIcon
                className="text-gray-400"
                sx={{ fontSize: "1.2rem" }}
              />
            </div>
          </div>

          <button className="btn-primary">Login / Sign Up</button>
        </div>

        {/*FOR SMALLEST SCREENS*/}
        <div
          className="sm:inline-block md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon className="text-gray-400" />
        </div>

        {/* Full Screen Menu for Small Screens */}
        <div
          className={`${
            openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300 ease-in-out flex-col gap-[1rem] w-full h-[60%] items-center
           bg-gray-100 fixed inset-0 z-10 p-4 sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden`}
        >
          <div className="w-full flex justify-end items-center bg-green-700 py-1 pr-1 rounded-[0.1rem]">
            <CloseIcon
              onClick={() => setOpenMenu(false)}
              sx={{ color: "white" }}
            />
          </div>

          <p className="link my-2">Find Suppliers</p>
          <div className="flex gap-1 items-center my-2">
            <p className="link">Find Service Tags</p>
            <KeyboardArrowDownIcon
              className="text-gray-400"
              sx={{ fontSize: "1.2rem" }}
            />
          </div>
          <button className="btn-primary my-2">Login / Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
