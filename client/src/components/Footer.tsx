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
              Vessel México brings the finest Japanese professional tools to the Mexican market, delivering quality, precision, and reliability for every job.
            </p>
            <p className="opacity-70 text-sm">
              © {year} Vessel México. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#home" className="hover:text-vessel-red transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-vessel-red transition duration-300">About Us</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Products</a></li>
              <li><a href="#contact" className="hover:text-vessel-red transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Product Categories</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Precision Screwdrivers</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Impact Drivers</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Specialty Bits</a></li>
              <li><a href="#products" className="hover:text-vessel-red transition duration-300">Tool Sets</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
