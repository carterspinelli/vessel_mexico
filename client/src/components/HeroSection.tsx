import { motion } from "framer-motion";
import { Logo } from "../assets/Logo";
import toolsHeroImage from "../assets/tools-hero.png";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="pt-28 pb-28 relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={toolsHeroImage} 
          alt="Professional Tools" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo className="h-20 mb-10 mx-auto" />
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
            Herramientas de <span className="text-vessel-red">Precisión Japonesa</span>
          </h1>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto">
            Trayendo herramientas de calidad premium diseñadas con precisión japonesa para los profesionales de México.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <motion.a 
              href="#products" 
              className="inline-block bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium py-3 px-10 transition-all duration-300 text-center border border-transparent"
              whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(228, 35, 19, 0.3)" }}
              whileTap={{ y: 1 }}
            >
              Explorar Productos
            </motion.a>
            <motion.a 
              href="#about" 
              className="inline-block bg-transparent hover:bg-white/10 text-white border border-white font-montserrat font-medium py-3 px-10 transition-all duration-300 text-center"
              whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ y: 1 }}
            >
              Conocer Más
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Simple red bar at top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-vessel-red z-10"></div>
    </section>
  );
}
