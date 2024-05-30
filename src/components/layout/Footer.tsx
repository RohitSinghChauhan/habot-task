import logo from "../../assets/habot-logo.jpg";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/facebook";
import "react-social-icons/twitter";
import "react-social-icons/instagram";

const links = [
  { title: "Company", a: "About", b: "FAQ" },
  { title: "Terms", a: "Data privacy", b: "Terms", c: "Accessibility" },
  { title: "Related", a: "Find Buyer", b: "Feedback" },
];
const socials = ["linkedin", "facebook", "twitter", "instagram"];

const Footer = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="bg-blue-950 w-full py-[2rem]">
        <div
          className="py-[1rem] sm:mx-[2rem] md:mx-[2rem] lg:mx-[10rem] xl:mx-[10rem] 2xl:mx-[10rem]
           border-y border-gray-50 border-opacity-35 flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between 
        items-center sm:gap-3 md:gap-3 lg:gap-0 xl:gap-0 2xl:gap-0"
        >
          {/*LEFT CONTAINER*/}
          <div
            className="sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] flex 
          sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row sm:gap-[1.8rem] lg:gap-[3.7rem]
          md:gap-[1.8rem] xl:gap-[3.7rem] 2xl:gap-[3.7rem] sm:items-center md:items-center
          lg:items-end xl:items-end 2xl:items-end"
          >
            {/*COMPANY LOGO*/}
            <div
              className="inline-flex flex-col sm:gap-[0.470rem] md:gap-[0.470rem] lg:gap-[1.4rem] xl:gap-[1.4rem]
            2xl:gap-[1.4rem]"
            >
              <img src={logo} alt="" className="w-[12rem]" />
              <p className="text-[0.7rem] text-gray-50 font-light">
                © R Singhania
              </p>
            </div>

            {/*LINKS*/}
            <div className="pb-[1.5rem] flex gap-[3rem]">
              {links.map((e) => (
                <div className="flex flex-col gap-[1rem] text-white">
                  <p>{e.title}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-[0.7rem] text-gray-50 font-light">
                      {e.a}
                    </p>
                    <p className="text-[0.7rem] text-gray-50 font-light">
                      {e.b}
                    </p>
                    {e?.c ? (
                      <p className="text-[0.7rem] text-gray-50 font-light">
                        {e.c}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*RIGHT CONTAINER*/}
          <div className="w-[45%] flex justify-center">
            <div className="flex gap-4 items-center">
              {socials.map((e) => (
                <motion.button
                  key={e}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1 }}
                >
                  <SocialIcon
                    url={`www.${e}.com`}
                    bgColor="transparent"
                    style={{
                      border: "1px solid gray",
                      borderRadius: "100%",
                      width: "2.1rem",
                      height: "2.1rem",
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*IT IS FOR THE WHITE BORDER*/}
      <div className="h-[0.530rem] bg-white"></div>
    </div>
  );
};

export default Footer;
