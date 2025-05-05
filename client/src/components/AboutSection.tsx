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
            Sobre <span className="text-vessel-red">Vessel México</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Una subsidiaria del reconocido fabricante japonés de herramientas, trayendo herramientas de calidad premium al mercado mexicano.
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
            <h3 className="font-montserrat font-semibold text-2xl mb-4 text-vessel-gray">Nuestro Legado de Excelencia</h3>
            <p className="mb-4">Desde 1916, Vessel ha estado a la vanguardia en la fabricación de herramientas y equipos de alta calidad. Nuestra historia de innovación y artesanía continúa hoy con nuestra expansión en México.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Precisión Japonesa</h3>
            <p className="mb-4">Nuestras herramientas son fabricadas para cumplir con los más altos estándares japoneses, garantizando precisión, durabilidad y diseño ergonómico en los que los profesionales confían.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Nuestra Misión</h3>
            <p className="mb-4">Estamos comprometidos a proporcionar a los profesionales mexicanos las mejores herramientas que mejoran la mano de obra, aumentan la eficiencia y entregan resultados sobresalientes.</p>
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
              alt="Taller de herramientas moderno" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
