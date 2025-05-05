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
      description: "Los productos Vessel cumplen con requisitos estrictos de calidad como herramientas profesionales, respaldados por más de 100 años de historia.",
      icon: <CheckCircle className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Innovación",
      description: "Nuestra misión es desarrollar nuevos productos y traerlos al mercado más rápido que otras empresas, mediante tecnologías avanzadas.",
      icon: <Lightbulb className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Diseño Ergonómico",
      description: "Creamos productos que todos los clientes encontrarán cómodos, desde usuarios principiantes hasta profesionales que trabajan con nuestras herramientas todos los días.",
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
      description: "Nuestro enfoque intransigente de fabricación y artesanía y nuestro compromiso con la calidad respaldan cada herramienta que fabricamos.",
      icon: <Award className="w-10 h-10" />
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-vessel-gray">
            Por Qué Elegir <span className="text-vessel-red">Vessel</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Nuestros valores fundamentales guían cada aspecto del diseño y fabricación de herramientas, ofreciendo calidad y rendimiento inigualables para profesionales.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="text-center p-6 border border-gray-200 rounded-sm bg-white shadow-sm hover:shadow-md transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-vessel-red text-4xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-vessel-gray">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
