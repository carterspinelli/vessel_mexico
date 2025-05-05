import { motion } from "framer-motion";
import { CheckCircle, Bolt, HandMetal, Award } from "lucide-react";

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
      title: "Japanese Quality",
      description: "Meticulously crafted following strict Japanese quality standards and testing procedures.",
      icon: <CheckCircle className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Durability",
      description: "Built to last with premium materials that withstand the most demanding conditions.",
      icon: <Bolt className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Ergonomic Design",
      description: "Comfortable grip and balanced weight distribution to reduce fatigue during extended use.",
      icon: <HandMetal className="w-10 h-10" />
    },
    {
      id: 4,
      title: "Warranty Backed",
      description: "Our confidence in our products is reflected in our comprehensive warranty program.",
      icon: <Award className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-vessel-gray">
            Why Choose <span className="text-vessel-red">Vessel Bolt</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Our tools are designed with the professional in mind, offering unmatched quality and performance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="text-center p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300"
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
