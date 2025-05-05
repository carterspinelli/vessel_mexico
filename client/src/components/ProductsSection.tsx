import { motion } from "framer-motion";
import { stockImages } from "../assets/stock-images";

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
      title: "Destornilladores de Precisión",
      description: "Destornilladores de alta calidad diseñados para trabajos de precisión en electrónica, pequeños electrodomésticos y aplicaciones mecánicas detalladas.",
      image: stockImages.precisionScrewdrivers
    },
    {
      id: 2,
      title: "Atornilladores de Impacto",
      description: "Atornilladores de impacto potentes y eficientes, perfectos para construcción, carpintería y aplicaciones industriales.",
      image: stockImages.impactDrivers
    },
    {
      id: 3,
      title: "Puntas Especializadas",
      description: "Puntas especializadas para cada aplicación, incluyendo seguridad, torx, hexagonal y diseños personalizados para necesidades específicas de la industria.",
      image: stockImages.specialtyBits
    },
    {
      id: 4,
      title: "Herramientas ESD",
      description: "Herramientas seguras contra descargas electrostáticas para fabricación de electrónica, reparación y otras aplicaciones sensibles.",
      image: stockImages.esdTools
    },
    {
      id: 5,
      title: "Juegos de Herramientas",
      description: "Juegos completos de herramientas diseñados para profesionales en diversas industrias, desde automotriz hasta mecánica de precisión.",
      image: stockImages.toolSets
    },
    {
      id: 6,
      title: "Herramientas Especiales",
      description: "Herramientas únicas diseñadas para aplicaciones e industrias específicas donde las herramientas estándar no son suficientes.",
      image: stockImages.specialtyTools
    }
  ];

  return (
    <section id="products" className="py-20 bg-vessel-light-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-vessel-gray">
            Nuestras <span className="text-vessel-red">Categorías de Productos</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Descubre nuestra amplia gama de herramientas de grado profesional diseñadas para precisión y rendimiento.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-vessel-gray">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a href="#contact" className="inline-block text-vessel-red font-montserrat font-medium hover:underline">
                  Más Información →
                </a>
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
