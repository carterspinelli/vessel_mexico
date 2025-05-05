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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-semibold text-2xl mb-4 text-vessel-gray">Nuestra Filosofía</h3>
            <p className="mb-6">Vessel es un fabricante líder de herramientas de fijación. La política de nuestro fundador de "singularidad de propósito" se ha transmitido hasta nuestros días, y su relevancia se manifiesta en nuestra dedicación a los principios de alta calidad, precios justos, desarrollo de nuevos productos y satisfacción del cliente.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Calidad y Marca</h3>
            <p className="mb-6">Los productos Vessel han cumplido consistentemente con requisitos estrictos de calidad como herramientas profesionales. Con más de 100 años de historia, este compromiso inquebrantable con la calidad ha sido el pilar de nuestras operaciones.</p>
            
            <h3 className="font-montserrat font-semibold text-2xl mb-4 mt-8 text-vessel-gray">Innovación Continua</h3>
            <p className="mb-4">Creemos que nuestra misión es desarrollar nuevos productos y lanzarlos al mercado más rápido que otras empresas. El Grupo Vessel ha implementado una división del trabajo entre plantas para que cada instalación se especialice en un solo tipo de producto.</p>
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
              className="rounded-sm shadow-xl w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        
        <motion.div
          className="mt-12 bg-gray-50 p-8 rounded-sm shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-montserrat font-semibold text-2xl mb-6 text-vessel-gray text-center">Historia de Vessel</h3>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 font-bold text-vessel-red mb-2 md:mb-0">1916</div>
              <div className="md:w-3/4">Vessel fue fundada como el primer fabricante en volumen de destornilladores de Japón. La empresa implementó un sistema de producción en masa especializado en la fabricación de destornilladores para aplicaciones industriales.</div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 font-bold text-vessel-red mb-2 md:mb-0">1933</div>
              <div className="md:w-3/4">La compañía comenzó a estampar sus productos con la marca "VESSEL", que significa un gran barco en inglés, como símbolo de su calidad superior.</div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 font-bold text-vessel-red mb-2 md:mb-0">1954-1958</div>
              <div className="md:w-3/4">Vessel comenzó la producción de puntas para herramientas neumáticas y lanzó su primer destornillador de impacto, ayudando a agilizar las operaciones en sitios de ensamblaje en todo el país.</div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 font-bold text-vessel-red mb-2 md:mb-0">1967</div>
              <div className="md:w-3/4">La empresa estableció los tres pilares de su negocio: destornilladores, puntas y herramientas neumáticas, incluyendo las llaves de impacto neumáticas.</div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 font-bold text-vessel-red mb-2 md:mb-0">2016-Presente</div>
              <div className="md:w-3/4">Vessel celebró el centenario de su fundación y estableció VESSEL TOOLS USA y VESSEL CHINA. Continúa expandiéndose globalmente, llegando ahora al mercado mexicano con herramientas de precisión y calidad.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
