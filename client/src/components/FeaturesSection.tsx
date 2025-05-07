import { motion } from "framer-motion";
import { CheckCircle, Bolt, HandMetal, Award, Lightbulb, ShieldCheck } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      id: 1,
      title: "Calidad Superior",
      description: "Los productos Vessel cumplen con requisitos estrictos de calidad como herramientas profesionales, respaldados por más de 100 años de experiencia.",
      icon: <CheckCircle className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Innovación",
      description: "Creamos productos excepcionales con tecnologías avanzadas que establecen nuevos estándares y satisfacen las necesidades reales de nuestros clientes.",
      icon: <Lightbulb className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Diseño Ergonómico",
      description: "Diseñamos herramientas cómodas y fáciles de usar para todos, desde principiantes hasta profesionales que las utilizan diariamente.",
      icon: <HandMetal className="w-10 h-10" />
    },
    {
      id: 4,
      title: "Durabilidad",
      description: "Construido para durar con materiales premium que resisten las condiciones más exigentes del entorno de trabajo profesional.",
      icon: <Bolt className="w-10 h-10" />
    },
    {
      id: 5,
      title: "Seguridad",
      description: "Vessel diseña productos para garantizar la salud y seguridad de los usuarios mediante rigurosas evaluaciones y pruebas de seguridad.",
      icon: <ShieldCheck className="w-10 h-10" />
    },
    {
      id: 6,
      title: "Garantía Respaldada",
      description: "Nuestro enfoque en fabricación y nuestro compromiso con la calidad respaldan cada una de nuestras herramientas.",
      icon: <Award className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative pb-16">
          {/* No decorative background element */}
        
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 text-vessel-gray">
              ¿Por qué elegir <span className="text-vessel-red">Vessel</span>?
              <motion.div 
                className="h-1 w-20 bg-vessel-red mx-auto mt-4"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 80, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </h2>
            
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Nuestros valores fundamentales guían cada aspecto del diseño y fabricación de herramientas, ofreciendo calidad y rendimiento inigualables para profesionales.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Decorative slash in the background */}
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-vessel-red opacity-10 transform rotate-45 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon with animated circle */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-vessel-red/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-vessel-red">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Small accent dot */}
                  <div className="absolute w-3 h-3 bg-vessel-red rounded-full -right-1 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-vessel-gray group-hover:text-vessel-red transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                {/* Bottom accent line that expands on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-vessel-red group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
