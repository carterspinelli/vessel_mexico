import { motion } from "framer-motion";
import { IconBrandHipchat, IconCertificate, IconHammer, IconHeartHandshake, IconRecycle, IconRulerMeasure, IconSettings, IconTools } from "@tabler/icons-react";

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
      title: "Precisión japonesa",
      description: "Herramientas fabricadas bajo estrictos estándares de calidad para garantizar precisión y durabilidad.",
      icon: <IconRulerMeasure className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Innovación Constante",
      description: "Mejoramos continuamente nuestros productos incorporando las últimas tecnologías y materiales.",
      icon: <IconSettings className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Desde 1916",
      description: "Más de 100 años de experiencia y tradición en la fabricación de herramientas profesionales.",
      icon: <IconCertificate className="w-10 h-10" />
    },
    {
      id: 4,
      title: "Garantía Superior",
      description: "Respaldamos nuestros productos con garantía y servicio postventa de primer nivel.",
      icon: <IconHeartHandshake className="w-10 h-10" />
    },
    {
      id: 5,
      title: "Diseño Ergonómico",
      description: "Herramientas diseñadas pensando en el profesional, con mangos ergonómicos y materiales que reducen la fatiga.",
      icon: <IconHammer className="w-10 h-10" />
    },
    {
      id: 6,
      title: "Soporte Técnico",
      description: "Equipo de expertos disponible para brindar asesoramiento técnico y resolver cualquier consulta.",
      icon: <IconBrandHipchat className="w-10 h-10" />
    },
    {
      id: 7,
      title: "Materiales Sostenibles",
      description: "Comprometidos con el medio ambiente, utilizamos materiales y procesos de producción sostenibles.",
      icon: <IconRecycle className="w-10 h-10" />
    },
    {
      id: 8,
      title: "Versatilidad Profesional",
      description: "Soluciones para cada necesidad: desde herramientas manuales hasta sistemas eléctricos especializados.",
      icon: <IconTools className="w-10 h-10" />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
