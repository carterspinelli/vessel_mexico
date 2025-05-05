import { motion } from "framer-motion";
import ScrewdriverAnimation from "./ui/screwdriver-animation";
import { Logo } from "../assets/Logo";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 bg-white text-vessel-gray relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.div 
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo className="h-16 mb-8 mx-auto" />
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Herramientas de <span className="text-vessel-red">Precisión Japonesa</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
            Trayendo herramientas de calidad premium diseñadas con precisión japonesa para los profesionales de México.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <motion.a 
              href="#products" 
              className="inline-block bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium py-3 px-8 rounded-sm transition-colors duration-300 text-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              Explorar Productos
            </motion.a>
            <motion.a 
              href="#about" 
              className="inline-block bg-white hover:bg-gray-100 text-vessel-gray border border-gray-300 font-montserrat font-medium py-3 px-8 rounded-sm transition-colors duration-300 text-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
            >
              Conocer Más
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ScrewdriverAnimation />
        </motion.div>
      </div>
      
      {/* Simple decorative elements */}
      <div className="absolute top-0 inset-x-0 h-1 bg-vessel-red"></div>
      <motion.div 
        className="absolute right-0 bottom-0 w-96 h-96 bg-gray-100 rounded-full -mr-48 -mb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute left-0 top-1/2 w-64 h-64 bg-gray-100 rounded-full -ml-32 -mt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.7 }}
      ></motion.div>
    </section>
  );
}
