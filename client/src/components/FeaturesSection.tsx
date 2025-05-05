import { motion } from "framer-motion";
import { CheckCircle, Bolt, HandMetal, Award, Lightbulb, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

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
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Innovación",
      description: "Nuestra misión es desarrollar nuevos productos y traerlos al mercado más rápido que otras empresas, mediante tecnologías avanzadas.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Diseño Ergonómico",
      description: "Creamos productos que todos los clientes encontrarán cómodos, desde usuarios principiantes hasta profesionales que trabajan con nuestras herramientas todos los días.",
      icon: <HandMetal className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Durabilidad",
      description: "Construido para durar con materiales premium que resisten las condiciones más exigentes del entorno de trabajo profesional.",
      icon: <Bolt className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Seguridad",
      description: "Vessel diseña productos para garantizar la salud y seguridad de los usuarios mediante rigurosas evaluaciones y pruebas de seguridad.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Garantía Respaldada",
      description: "Nuestro enfoque intransigente de fabricación y artesanía y nuestro compromiso con la calidad respaldan cada herramienta que fabricamos.",
      icon: <Award className="w-8 h-8" />
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
        
        <motion.div 
          className="bg-white shadow-md rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
  index,
  ...motionProps
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
} & React.ComponentProps<typeof motion.div>) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col py-10 px-8 relative group/feature border-gray-200 min-h-[300px]",
        "lg:border-r lg:border-b",
        // Add left border to first column items
        (index === 0 || index === 3) && "lg:border-l",
        // Add top border to first row
        index < 3 && "lg:border-t",
        // Add bottom border to last row in responsive view
        index > 2 && "lg:border-b"
      )}
      {...motionProps}
    >
      {/* Hover background effect */}
      <div 
        className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-br from-white via-gray-50 to-white pointer-events-none"
      />
      
      {/* Icon */}
      <div className="mb-6 relative z-10 text-vessel-red flex justify-center transform group-hover/feature:scale-110 transition duration-300">
        {icon}
      </div>
      
      {/* Title with hover effect */}
      <div className="text-xl font-bold mb-4 relative z-10 px-0 font-montserrat">
        <div className="absolute left-0 top-1 h-5 group-hover/feature:h-7 w-1.5 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-vessel-red hover:bg-vessel-red transition-all duration-300 origin-center ease-out" />
        <span className="pl-6 group-hover/feature:pl-8 transition-all duration-300 inline-block text-vessel-gray">
          {title}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 relative z-10 px-0 text-left pl-6 group-hover/feature:text-gray-700 transition duration-300">
        {description}
      </p>
    </motion.div>
  );
};
