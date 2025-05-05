import { motion } from "framer-motion";
// Import product images
import herramientasManuales from "../assets/products/herramientas_manuales.png";
import puntasDadosIndustriales from "../assets/products/puntas_dados_industriales.png";
import puntasDadosTaladros from "../assets/products/dados_puntas_taladros.png";
import destornilladoresElectricos from "../assets/products/desatornilladores_electricos.png";
import herramientasNeumaticas from "../assets/products/herramientas_neumaticas.png";
import herramientasGasolina from "../assets/products/herramientas_gasolina.png";

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
      image: herramientasManuales,
    },
    {
      id: 2,
      title: "PUNTAS / DADOS INDUSTRIALES",
      description: "Puntas Industriales, dados, Portapuntas, y más.",
      image: puntasDadosIndustriales,
    },
    {
      id: 3,
      title: "PUNTAS / DADOS / TALADROS DE CONSTRUCCIÓN",
      description:
        "Puntas de Construcción, dados, Brocas / Portabrocas, y más.",
      image: puntasDadosTaladros,
    },
    {
      id: 4,
      title: "DESTORNILLADORES ELÉCTRICOS",
      description: "Destornilladores Eléctricos, y más.",
      image: destornilladoresElectricos,
    },
    {
      id: 5,
      title: "HERRAMIENTAS NEUMÁTICAS",
      description:
        "Destornilladores Neumáticos, Llaves de Impacto Neumáticas, y más.",
      image: herramientasNeumaticas,
    },
    {
      id: 6,
      title: "HERRAMIENTAS CON MOTOR A GASOLINA",
      description: "Llave de impacto a gasolina.",
      image: herramientasGasolina,
    },
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
            Nuestras{" "}
            <span className="text-vessel-red">Categorías de Productos</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Descubre nuestra amplia gama de herramientas de grado profesional
            diseñadas para precisión y rendimiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="h-64 overflow-hidden bg-gray-100 p-2">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-auto h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="font-montserrat font-semibold text-lg md:text-xl mb-3 text-vessel-gray">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-block text-vessel-red font-montserrat font-medium hover:underline text-sm"
                >
                  Más Información →
                </a>
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
          <motion.a 
            href="#contact" 
            className="inline-block bg-vessel-red hover:bg-red-700 text-white font-montserrat font-medium py-3 px-10 border border-transparent transition-all duration-300 text-center"
            whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(228, 35, 19, 0.3)" }}
            whileTap={{ y: 1 }}
          >
            Solicitar Información de Productos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
