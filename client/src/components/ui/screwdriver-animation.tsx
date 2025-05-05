import { motion } from "framer-motion";

export default function ScrewdriverAnimation() {
  return (
    <div className="screwdriver-container w-60 h-[300px] relative flex items-center justify-center">
      <motion.div
        className="relative w-[60px] h-[300px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Screwdriver Handle */}
        <motion.svg 
          width="60" 
          height="120" 
          viewBox="0 0 60 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0"
        >
          <rect width="60" height="120" rx="10" fill="#FF0000" />
          <rect x="10" y="10" width="40" height="100" rx="5" fill="#D10000" />
        </motion.svg>

        {/* Screwdriver Shaft */}
        <motion.svg 
          width="10" 
          height="150" 
          viewBox="0 0 10 150" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[120px] left-[25px]"
        >
          <rect width="10" height="150" rx="2" fill="#CCCCCC" />
          <rect x="2" y="0" width="6" height="150" rx="1" fill="#AAAAAA" />
        </motion.svg>

        {/* Screwdriver Tip */}
        <motion.svg 
          width="20" 
          height="30" 
          viewBox="0 0 20 30" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-[20px]"
        >
          <path d="M0 0H20L10 30L0 0Z" fill="#666666" />
          <path d="M5 0H15L10 30L5 0Z" fill="#555555" />
        </motion.svg>
      </motion.div>

      {/* Screwdriver Shadow */}
      <div className="absolute bottom-0 w-[80px] h-[10px] bg-black/20 rounded-full"></div>
    </div>
  );
}
