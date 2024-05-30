const InputView = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center gap-2 pl-3
     bg-white rounded-[0.3rem] border-none sm:h-[2.3rem] md:h-[2.4rem] lg:h-full xl:h-full 2xl:h-full"
    >
      {icon}
      <input
        placeholder={placeholder}
        className="h-full w-full rounded-[0.3rem] focus:outline-none text-[0.8rem] font-light"
      />
    </div>
  );
};

export default InputView;
