import { motion } from "framer-motion";
import ScrewdriverAnimation from "./ui/screwdriver-animation";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 bg-gradient-to-r from-vessel-black to-vessel-gray text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Professional <span className="text-vessel-red">Quality Tools</span> for Every Job
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Vessel México offers premium Japanese precision tools for professionals and enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#products" 
              className="inline-block bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium py-3 px-8 rounded-md transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-montserrat font-medium py-3 px-8 rounded-md transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ScrewdriverAnimation />
        </motion.div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
            backgroundSize: "cover", 
            backgroundPosition: "center"
          }}
        ></div>
      </div>
    </section>
  );
}
