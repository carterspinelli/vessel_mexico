import { motion } from "framer-motion";
import { stockImages } from "../assets/stock-images";
import Spline from "@splinetool/react-spline";

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
            <div className="rounded-sm shadow-xl w-full h-96 overflow-hidden">
              <Spline 
                scene="https://prod.spline.design/KrH4DdCLMlxkt-Sl/scene.splinecode" 
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 mb-10">
          <motion.h3 
            className="font-montserrat font-bold text-3xl mb-8 text-vessel-gray text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Historia de <span className="text-vessel-red">Vessel</span>
          </motion.h3>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-vessel-red bg-opacity-20"></div>
            
            {/* Timeline items */}
            <div className="space-y-16 relative">
              {/* 1916 */}
              <motion.div 
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="md:w-1/2 pl-8 md:pl-0 pr-4 md:pr-10 md:text-right pb-10 md:pb-0 relative">
                  <div className="absolute left-[-9px] md:left-auto md:right-[-9px] top-0 h-5 w-5 rounded-full bg-vessel-red border-4 border-white z-10"></div>
                  <h4 className="text-2xl font-semibold text-vessel-red mb-2">1916</h4>
                  <p>Vessel fue fundada como el primer fabricante en volumen de destornilladores de Japón, implementando un sistema de producción en masa especializado.</p>
                </div>
                <div className="md:w-1/2 md:pl-10 md:mt-24 hidden md:block"></div>
              </motion.div>
              
              {/* 1933 */}
              <motion.div 
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="md:w-1/2 md:pr-10 hidden md:block"></div>
                <div className="md:w-1/2 pl-8 md:pl-10 pb-10 md:pb-0 relative">
                  <div className="absolute left-[-9px] top-0 h-5 w-5 rounded-full bg-vessel-red border-4 border-white z-10"></div>
                  <h4 className="text-2xl font-semibold text-vessel-red mb-2">1933</h4>
                  <p>La compañía comenzó a estampar sus productos con la marca "VESSEL", que significa un gran barco en inglés, como símbolo de su calidad superior.</p>
                </div>
              </motion.div>
              
              {/* 1954-1958 */}
              <motion.div 
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="md:w-1/2 pl-8 md:pl-0 pr-4 md:pr-10 md:text-right pb-10 md:pb-0 relative">
                  <div className="absolute left-[-9px] md:left-auto md:right-[-9px] top-0 h-5 w-5 rounded-full bg-vessel-red border-4 border-white z-10"></div>
                  <h4 className="text-2xl font-semibold text-vessel-red mb-2">1954-1958</h4>
                  <p>Vessel comenzó la producción de puntas para herramientas neumáticas y lanzó su primer destornillador de impacto, revolucionando operaciones industriales.</p>
                </div>
                <div className="md:w-1/2 md:pl-10 hidden md:block"></div>
              </motion.div>
              
              {/* 1967 */}
              <motion.div 
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="md:w-1/2 md:pr-10 hidden md:block"></div>
                <div className="md:w-1/2 pl-8 md:pl-10 pb-10 md:pb-0 relative">
                  <div className="absolute left-[-9px] top-0 h-5 w-5 rounded-full bg-vessel-red border-4 border-white z-10"></div>
                  <h4 className="text-2xl font-semibold text-vessel-red mb-2">1967</h4>
                  <p>La empresa estableció los tres pilares de su negocio: destornilladores, puntas y herramientas neumáticas, incluyendo las llaves de impacto neumáticas.</p>
                </div>
              </motion.div>
              
              {/* 2016-Presente */}
              <motion.div 
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="md:w-1/2 pl-8 md:pl-0 pr-4 md:pr-10 md:text-right relative">
                  <div className="absolute left-[-9px] md:left-auto md:right-[-9px] top-0 h-5 w-5 rounded-full bg-vessel-red border-4 border-white z-10"></div>
                  <h4 className="text-2xl font-semibold text-vessel-red mb-2">2016-Presente</h4>
                  <p>Vessel celebró el centenario de su fundación y estableció VESSEL TOOLS USA y VESSEL CHINA, expandiéndose globalmente, incluyendo ahora en México con herramientas de precisión.</p>
                </div>
                <div className="md:w-1/2 md:pl-10 hidden md:block"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
