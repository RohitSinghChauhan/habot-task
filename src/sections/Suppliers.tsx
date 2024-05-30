import ButtonView from "../components/buttons/ButtonView";

const Suppliers = () => {
  return (
    <div
      className="h-[12rem] flex sm:justify-evenly md:justify-evenly xl:justify-between 2xl:justify-between 
      items-center sm:px-16 md:px-16 lg:px-[13rem] xl:px-[13rem] 2xl:px-[13rem] bg-primary sm:flex-col 
      md:flex-col lg:flex-row xl:flex-row 2xl-flex-row"
    >
      <div
        className="flex sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2rem]
       gap-2 font-bold flex-wrap"
      >
        <p>Let Suppliers</p>
        <p>Find You</p>
      </div>

      <ButtonView
        label="Get Verified"
        onClick={() => {}}
        style="bg-orange-400 sm:px-[5rem] md:px-[5rem] lg:px-[2.4rem] xl:px-[2.4rem] 2xl:px-[2.4rem]"
      />
    </div>
  );
};

export default Suppliers;
