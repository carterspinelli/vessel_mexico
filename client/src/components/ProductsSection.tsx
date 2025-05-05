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
              className="bg-white overflow-hidden shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-vessel-gray">{product.title}</h3>
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
