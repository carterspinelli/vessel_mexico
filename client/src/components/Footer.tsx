
import { Logo } from "../assets/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-vessel-gray text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="h-12 mb-4" />
            <p className="opacity-80 mb-4">
              Vessel México trae las mejores herramientas profesionales japonesas al mercado mexicano, ofreciendo calidad, precisión y confiabilidad para cada trabajo.
            </p>
            <p className="opacity-70 text-sm">
              © {year} Vessel México. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#home" className="hover:text-vessel-red transition duration-300">Inicio</a></li>
              <li><a href="#about" className="hover:text-vessel-red transition duration-300">Nosotros</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Productos</a></li>
              <li><a href="#contact" className="hover:text-vessel-red transition duration-300">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Categorías de Productos</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Destornilladores de Precisión</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Destornilladores de Impacto</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Puntas Especiales</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Juegos de Herramientas</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
