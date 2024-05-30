import admin from "../assets/admin.png";
import list from "../assets/list.png";
import todo from "../assets/todo.png";
import details from "../assets/details.png";
import hands from "../assets/hands.png";
import note from "../assets/note.png";

const items = [
  { title: "Select Your Role and Sign Up", icon: admin },
  { title: "Buyers Post Your Requirements", icon: list },
  { title: "Review, Select and Contact the Best Suppliers", icon: todo },
  {
    title: "Suppliers complete your profile and get notified for opportunities",
    icon: details,
  },
  {
    title: "Contact to Buyers and Share your Quote for the service",
    icon: hands,
  },
  {
    title: "Both the Parties can Connect and make Business leave a Feedback",
    icon: note,
  },
];

const ProcessOverview = () => {
  return (
    <div
      className="bg-default py-[5rem] sm:px-3 md:px-3 lg:px-[10rem] xl:px-[10rem] 2xl:px-[10rem] flex flex-col items-center
    sm:gap-[2rem] md:gap-[2rem] lg:gap-[4rem] xl:gap-[4rem] 2xl:gap-[4rem]"
    >
      <div
        className="flex flex-col sm:gap-[1rem] md:gap-[1rem] lg:gap-[2rem] xl:gap-[2rem] 
        2xl:gap-[2rem] items-center sm:w-[100%] md:w-[100%] lg:w-[85%] xl:w-[60%]
      2xl:w-[60%]"
      >
        <p className="sm:text-[1.8rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem] font-bold">
          How it works?
        </p>
        <p className="sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem] text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 
      xl:grid-cols-3 2xl:grid-cols-3 sm:gap-[1rem] md:gap-[1rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]"
      >
        {items.map((e, i) => (
          <div
            key={i}
            className={`flex flex-col gap-[2rem] py-[2rem] sm:px-[1.9rem] md:px-[1.9rem] lg:px-[7rem] xl:px-[7rem] 2xl:px-[7rem] items-center ${
              i % 2 === 0 ? "bg-primary" : "bg-white"
            }`}
          >
            <img src={e.icon} className="w-[5rem]" alt="" />
            <p
              className="text-center font-bold sm:text-[0.7rem] md:text-[0.9rem] lg:text-[0.9rem]
            xl:text-[0.9rem] 2xl:text-[0.9rem]"
            >
              {e.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessOverview;
