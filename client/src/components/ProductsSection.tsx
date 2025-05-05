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
      title: "Precision Screwdrivers",
      description: "High-quality screwdrivers designed for precision work in electronics, small appliances, and detailed mechanical applications.",
      image: stockImages.precisionScrewdrivers
    },
    {
      id: 2,
      title: "Impact Drivers",
      description: "Powerful and efficient impact drivers perfect for construction, woodworking, and industrial applications.",
      image: stockImages.impactDrivers
    },
    {
      id: 3,
      title: "Specialty Bits",
      description: "Specialized bits for every application, including security, torx, hex, and custom designs for specific industry needs.",
      image: stockImages.specialtyBits
    },
    {
      id: 4,
      title: "ESD-Safe Tools",
      description: "Electrostatic discharge-safe tools for electronics manufacturing, repair, and other sensitive applications.",
      image: stockImages.esdTools
    },
    {
      id: 5,
      title: "Tool Sets",
      description: "Comprehensive tool sets designed for professionals in various industries, from automotive to precision mechanics.",
      image: stockImages.toolSets
    },
    {
      id: 6,
      title: "Specialty Tools",
      description: "Unique tools designed for specific applications and industries where standard tools won't suffice.",
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
            Our <span className="text-vessel-red">Product Categories</span>
          </h2>
          <div className="w-20 h-1 bg-vessel-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Discover our comprehensive range of professional-grade tools designed for precision and performance.
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
                  Learn More →
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
            Request Product Information
          </a>
        </motion.div>
      </div>
    </section>
  );
}
