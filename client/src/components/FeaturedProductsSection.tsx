import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface FeaturedProduct {
  id: number;
  title: string;
  model: string;
  description: string;
  specs: string[];
  image: string;
  codeNo: string;
}

export default function FeaturedProductsSection() {
  const featuredProducts: FeaturedProduct[] = [
    {
      id: 1,
      title: "Alicate Neumático Tipo Cuadrado ADV",
      model: "No.GT-NS20A",
      description: "Mayor fuerza de presión en un 20%. Recomendado para equipos más ligeros y pequeños. La posición de entrada de aire se puede ajustar 180 grados según la posición de montaje.",
      specs: [
        "Capacidad máxima: Plástico suave 8mm / Plástico duro 5.5mm",
        "Capacidad máxima: Cobre 3mm / Acero 2.4mm",
        "Presión de aire: 0.4~0.6 MPa",
        "Peso: 366g"
      ],
      image: "/attached_assets/GTNS20A.jpg",
      codeNo: "360029"
    },
    {
      id: 2,
      title: "Alicate Neumático Tipo Cuadrado ADV",
      model: "No.GT-NS30A",
      description: "Mayor fuerza de presión en un 50%. Recomendado para equipos más ligeros y pequeños. La posición de entrada de aire se puede ajustar 180 grados según la posición de montaje.",
      specs: [
        "Capacidad máxima: Plástico suave 11mm / Plástico duro 7mm",
        "Capacidad máxima: Cobre 4.5mm / Acero 3mm",
        "Presión de aire: 0.5~0.6 MPa",
        "Peso: 686g"
      ],
      image: "/attached_assets/GTNS30A.jpg",
      codeNo: "360030"
    },
    {
      id: 3,
      title: "Alicate Neumático Manual",
      model: "No.GT-N20",
      description: "Para corte o engarzado de resinas o metales. Las cuchillas fabricadas a medida por VESSEL proporcionan soluciones para una gama prácticamente ilimitada de necesidades.",
      specs: [
        "Capacidad máxima: Plástico suave 7mm / Plástico duro 5mm",
        "Capacidad máxima: Cobre 2.6mm / Acero 2mm",
        "Presión de aire: 0.5~0.6 MPa",
        "Peso: 375g"
      ],
      image: "/attached_assets/GTN20_01.jpg",
      codeNo: "360007"
    },
    {
      id: 4,
      title: "Alicate Neumático con Palanca de Seguridad",
      model: "No.GT-NL30",
      description: "Alicate neumático ideal para trabajos manuales de corte. Para corte de plástico y acero, o para trabajos de engarzado. Con cuchillas fabricadas a medida, la gama de aplicaciones es infinita.",
      specs: [
        "Capacidad máxima: Plástico suave 10mm / Plástico duro 6.5mm",
        "Capacidad máxima: Cobre 3.3mm / Acero 2.8mm",
        "Presión de aire: 0.5~0.6 MPa",
        "Peso: 627g"
      ],
      image: "/attached_assets/GTNL30.jpg",
      codeNo: "360777"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-8 py-2.5 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-normal mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-vessel-red mr-3 relative">
              <span className="absolute inset-0 w-full h-full rounded-full bg-vessel-red animate-ping opacity-75"></span>
            </span>
            Productos Destacados
          </span>
          
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-black">
            ALICATES NEUMÁTICOS
          </h2>
          
          <div className="w-24 h-0.5 bg-vessel-red mx-auto mt-4 mb-8"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Alicates Neumáticos, Tijeras Neumáticas, y más. Herramientas profesionales de alta precisión para corte y engarzado.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md group transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 p-6 flex items-center justify-center bg-white">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain max-h-48 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="md:w-3/5 p-6 bg-white flex flex-col">
                  <div className="mb-2">
                    <h3 className="font-montserrat font-semibold text-lg text-vessel-gray mb-1">
                      {product.title}
                    </h3>
                    <p className="text-vessel-red font-medium">{product.model}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4 flex-grow">
                    <ul className="space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start">
                          <span className="text-vessel-red mr-2 text-xs">■</span> 
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="w-12 h-0.5 bg-vessel-red mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
                    
                    <p className="text-xs text-gray-500 mb-2">Código de producto: {product.codeNo}</p>
                    
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-vessel-red font-medium text-sm hover:underline"
                    >
                      Más información
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
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
              Solicitar Información Técnica
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