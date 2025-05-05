import { motion } from "framer-motion";

export default function ScrewdriverAnimation() {
  return (
    <div className="screwdriver-container w-60 h-[280px] relative flex items-center justify-center">
      <motion.div
        className="relative w-[50px] h-[250px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Screwdriver Handle */}
        <motion.svg 
          width="50" 
          height="100" 
          viewBox="0 0 50 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0"
        >
          <rect width="50" height="100" rx="8" fill="#E42313" />
          <rect x="8" y="8" width="34" height="84" rx="4" fill="#C20000" />
          <rect x="20" y="10" width="10" height="80" rx="2" fill="#B10000" opacity="0.7" />
        </motion.svg>

        {/* Screwdriver Shaft */}
        <motion.svg 
          width="8" 
          height="130" 
          viewBox="0 0 8 130" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[100px] left-[21px]"
        >
          <rect width="8" height="130" rx="2" fill="#DDDDDD" />
          <rect x="1.5" y="0" width="5" height="130" rx="1" fill="#BBBBBB" />
        </motion.svg>

        {/* Screwdriver Tip */}
        <motion.svg 
          width="16" 
          height="24" 
          viewBox="0 0 16 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-[17px]"
        >
          <path d="M0 0H16L8 24L0 0Z" fill="#777777" />
          <path d="M4 0H12L8 24L4 0Z" fill="#666666" />
        </motion.svg>
      </motion.div>

      {/* Subtle shadow */}
      <div className="absolute bottom-0 w-[70px] h-[8px] bg-black/10 rounded-full blur-sm"></div>
    </div>
  );
}
