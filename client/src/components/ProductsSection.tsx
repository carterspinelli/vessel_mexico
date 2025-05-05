import { motion } from "framer-motion";

// Import product images
import manualesImg from "../assets/products-new/manuales.jpg";
import industrialImg from "../assets/products-new/industrial.jpg";
import constructionImg from "../assets/products-new/construction.jpg";
import electricImg from "../assets/products-new/electric.jpg";
import neumaticImg from "../assets/products-new/neumatic.jpg";
import gasolineImg from "../assets/products-new/gasoline.webp";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      title: "HERRAMIENTAS MANUALES",
      description: "Destornilladores, Llaves, Pelacables, y más.",
      image: manualesImg,
    },
    {
      id: 2,
      title: "HERRAMIENTAS NEUMÁTICAS",
      description:
        "Destornilladores Neumáticos, Llaves de Impacto Neumáticas, y más.",
      image: neumaticImg,
    },
    {
      id: 3,
      title: "PUNTAS / DADOS / TALADROS DE CONSTRUCCIÓN",
      description:
        "Puntas de Construcción, dados, Brocas / Portabrocas, y más.",
      image: constructionImg,
    },
    {
      id: 4,
      title: "DESTORNILLADORES ELÉCTRICOS",
      description: "Destornilladores Eléctricos, y más.",
      image: electricImg,
    },
    {
      id: 5,
      title: "PUNTAS / DADOS INDUSTRIALES",
      description: "Puntas Industriales, dados, Portapuntas, y más.",
      image: industrialImg,
    },
    {
      id: 6,
      title: "HERRAMIENTAS CON MOTOR A GASOLINA",
      description: "Llave de impacto a gasolina.",
      image: gasolineImg,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-vessel-light-gray">
      <div className="container mx-auto px-4">
        <div className="relative z-10 pb-20">
          {/* Abstract decorative elements */}
          <div className="absolute top-0 left-20 w-48 h-48 bg-vessel-red opacity-[0.02] rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-vessel-red opacity-[0.03] rounded-full blur-xl"></div>
          
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1 rounded-full border border-white/20 bg-black text-white text-sm font-medium mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-vessel-red mr-2 relative">
                  <span className="absolute inset-0 w-full h-full rounded-full bg-vessel-red animate-ping opacity-75"></span>
                </span>
                Catálogo Vessel México
              </span>
              
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-2 text-vessel-gray overflow-hidden">
                <span className="inline-block text-vessel-red overflow-hidden">
                  <motion.span 
                    className="inline-block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Categorías de Productos
                  </motion.span>
                </span>
              </h2>
              
              <div className="w-24 h-1 bg-vessel-red mx-auto my-6 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: 0 }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Descubre nuestra amplia gama de herramientas profesionales diseñadas para ofrecer 
              la máxima precisión y un rendimiento excepcional en cada proyecto.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white overflow-hidden rounded-xl shadow-sm transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Decorative corner slash */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 bg-vessel-red opacity-0 group-hover:opacity-[0.08] transition-all duration-500 z-0"
              ></div>
              
              {/* Number tag */}
              <div className="absolute top-0 left-0 bg-vessel-red bg-opacity-80 text-white text-xs font-bold py-1 px-3 rounded-br-lg z-10 transition-all duration-500 group-hover:bg-opacity-100">
                {product.id < 10 ? `0${product.id}` : product.id}
              </div>
              
              {/* Top highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-vessel-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="aspect-[16/10] overflow-hidden bg-white relative z-0 px-8 py-4">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    style={{
                      objectFit: "contain",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>
              
              <div className="p-6 relative z-10 bg-white">
                <h3 className="font-montserrat font-semibold text-lg md:text-xl text-vessel-gray group-hover:text-vessel-red transition-colors duration-300">
                  {product.title}
                </h3>
                
                <div className="w-12 h-0.5 bg-vessel-red mt-3 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500 delay-100"></div>
                
                <p className="text-gray-600 text-sm md:text-base">
                  {product.description}
                </p>
                
                <div className="absolute -bottom-2 right-6 transform rotate-45 w-4 h-4 border-t-2 border-r-2 border-vessel-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-vessel-red px-8 py-3 font-montserrat font-medium text-white shadow-md transition-all duration-300 hover:bg-red-700"
          >
            <span className="absolute right-0 top-0 inline-block h-4 w-4 translate-x-1/2 -translate-y-1/2 rotate-45 bg-white opacity-10"></span>
            <span className="absolute left-0 bottom-0 inline-block h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white opacity-10"></span>
            <span className="relative flex items-center gap-2">
              Solicitar Información de Productos
              <svg 
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
