import { motion } from "framer-motion";
import { stockImages } from "../assets/stock-images";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-vessel-gray">
            About <span className="text-vessel-red">Vessel México</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            A subsidiary of the renowned Japanese tool manufacturer, bringing premium quality tools to the Mexican market.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-4 text-vessel-gray">Our Legacy of Excellence</h3>
            <p className="mb-4">Since 1916, Vessel has been at the forefront of manufacturing high-quality tools and equipment. Our history of innovation and craftsmanship continues today with our expansion into Mexico.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Japanese Precision</h3>
            <p className="mb-4">Our tools are manufactured to meet the highest Japanese standards, ensuring precision, durability, and ergonomic design that professionals trust.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Our Mission</h3>
            <p className="mb-4">We are committed to providing Mexican professionals with the finest tools that enhance workmanship, improve efficiency, and deliver outstanding results.</p>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src={stockImages.workshop} 
              alt="Modern tool workshop" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
