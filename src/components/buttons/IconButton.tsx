import { motion } from "framer-motion";
import rightarrow from "../../assets/rightarrow.png";

type Props = { label: string; onClick: () => void; style?: string };

const IconButton = ({ label, onClick = () => {}, style = "" }: Props) => {
  return (
    <motion.button
      className={`bg-secondary text-white text-[0.950rem] py-2 pl-[3.8rem] pr-[1.480rem]
      rounded-[0.260rem] tracking-wide font-bold flex items-center gap-[1rem] ${style}`}
      onClick={onClick}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1 }}
    >
      {label}
      <img src={rightarrow} alt="" className="filter invert w-7" />
    </motion.button>
  );
};

export default IconButton;
