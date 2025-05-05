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
      image: manualesImg
    },
    {
      id: 2,
      title: "HERRAMIENTAS NEUMÁTICAS",
      description: "Destornilladores Neumáticos, Llaves de Impacto Neumáticas, y más.",
      image: neumaticImg
    },
    {
      id: 3,
      title: "PUNTAS / DADOS / TALADROS DE CONSTRUCCIÓN",
      description: "Puntas de Construcción, dados, Brocas / Portabrocas, y más.",
      image: constructionImg
    },
    {
      id: 4,
      title: "DESTORNILLADORES ELÉCTRICOS",
      description: "Destornilladores Eléctricos, y más.",
      image: electricImg
    },
    {
      id: 5,
      title: "PUNTAS / DADOS INDUSTRIALES",
      description: "Puntas Industriales, dados, Portapuntas, y más.",
      image: industrialImg
    },
    {
      id: 6,
      title: "HERRAMIENTAS CON MOTOR A GASOLINA",
      description: "Llave de impacto a gasolina.",
      image: gasolineImg
    }
  ];

  return (
    <section id="products" className="py-20 bg-vessel-light-gray">
      <div className="container mx-auto px-4">
        <div className="relative z-10 pb-16">
          <motion.div 
            className="text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background decorative element */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-vessel-red opacity-5 rounded-full"></div>
            
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 text-vessel-gray relative inline-block">
              Nuestras <span className="text-vessel-red">Categorías de Productos</span>
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-vessel-red"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </h2>
            
            <p className="max-w-3xl mx-auto text-lg mt-8 relative">
              Descubre nuestra amplia gama de herramientas de grado profesional diseñadas para 
              <span className="relative inline-block mx-1">
                <span className="text-vessel-red font-medium">precisión</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-vessel-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                ></motion.span>
              </span>
              y
              <span className="relative inline-block mx-1">
                <span className="text-vessel-red font-medium">rendimiento</span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-vessel-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                ></motion.span>
              </span>.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="group bg-white overflow-hidden rounded-lg border border-gray-200 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-white relative">
                <div className="absolute inset-0 bg-vessel-red opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>
              </div>
              <div className="p-6 relative">
                {/* Animated red bar that appears on hover */}
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-vessel-red group-hover:w-full transition-all duration-500"></div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-vessel-gray group-hover:text-vessel-red transition-colors duration-300">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium py-3 px-8 rounded-md transition duration-300"
          >
            Solicitar Información de Productos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
