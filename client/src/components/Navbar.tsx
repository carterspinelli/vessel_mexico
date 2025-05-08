import { Logo } from "../assets/Logo";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export default function Navbar({ 
  isMobileMenuOpen, 
  toggleMobileMenu,
  closeMobileMenu
}: NavbarProps) {
  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Nosotros", href: "#about" },
    { label: "Productos", href: "#products" },
    { label: "Contacto", href: "#contact" }
  ];

  const handleNavClick = () => {
    closeMobileMenu();
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Logo className="h-16" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="nav-link font-montserrat font-medium text-vessel-gray hover:text-vessel-red transition duration-300"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-vessel-gray focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Alternar menú móvil"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="block font-montserrat font-medium text-vessel-gray hover:text-vessel-red py-2"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
