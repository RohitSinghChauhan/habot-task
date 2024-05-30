import { motion } from "framer-motion";

type Props = { label: string; onClick: () => void; style?: string };

const ButtonView = ({ label, onClick = () => {}, style = "" }: Props) => {
  return (
    <motion.button
      className={`bg-secondary text-white text-sm py-3 px-7 rounded-[0.260rem] 
      tracking-wide font-medium ${style}`}
      onClick={onClick}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1 }}
    >
      {label}
    </motion.button>
  );
};

export default ButtonView;
